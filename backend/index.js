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

server.use(cors())

mongoose.connect(MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));


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
            }).catch(() => {})
        );
        console.log("File processed and keywords stored");
        res.status(201).send("File uploaded successfully!");
    } catch (error) {
        console.log("Error:", error); // check error
        res.status(500).send("Error processing file")
    }
})


// For test
server.get("/", (req, res) => {
    res.status(200).send(`Test = ${process.env.PORT}`)
})

server.listen(PORT, () => console.log(`Server is started at port: ${PORT}`))