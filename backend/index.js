import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import { Keyword } from "./models/keyword.js";
import { MONGODB_URL, PORT } from "./tools.js";
import multer from "multer"
import xlsx from "xlsx"
import { generateHtml } from "./generateHtml.js";

const server = express();
const upload = multer({ dest: 'uploads/' })

server.use(cors());


/* 
    Connect with database that hosted in cloud.mongodb.com
*/
mongoose.connect(MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));


/*
    Use it for handle file upload
*/
server.post("/upload", upload.single('file'), (req, res) => {
    if (!req.file)
        return res.status(400).send('No file uploaded.')
    try {
        const file = xlsx.readFile(req.file.path);
        const keywords = xlsx.utils.sheet_to_json(
            file.Sheets[file.SheetNames[0]],
            { header: 1 })
            .flat();

        keywords.map((keyword) =>
            Keyword.create({
                keyword,
                html: generateHtml(keyword)
            }).catch(() => { })
        );
        res.status(201).send("File uploaded successfully!");
    } catch (error) {
        res.status(500).send("Error processing file")
    }
})


/*
    Use it to get all keywords
*/
server.get('/keywords', async (req, res) => {
    try {
        const keywords = await Keyword.find({}, "keyword");

        res.status(200).json(keywords);
    } catch (error) {
        res.status(500).send("Cannot get keywords");
    }
})


/*
    Use it for get specific html page using id
*/
server.get('/keywords/view-html/:id', async (req, res) => {
    try {
        const object = await Keyword.findById(req.params.id, "html");

        if (!object)
            res.status(404).send('Keyword not found');
        res.send(object.html);
    } catch (error) {
        res.status(500).send("Cannot get HTML");
    }
})

/*
    Use it for download specific html page using id
*/
server.get('/keywords/download-html/:id', async (req, res) => {
    try {
        const object = await Keyword.findById(req.params.id, "html");

        if (!object)
            res.status(404).send('Keyword not found');
        res.set({
            'Content-Type': 'text/html',
            'Content-Disposition': 'attachment; filename=index.html'
        });
        res.send(object.html);
    } catch (error) {
        res.status(500).send("Cannot get HTML");
    }
});


server.listen(PORT, () => console.log(`Server is started at port: ${PORT}`))