import express from "express"

const PORT = process.env.PORT || 3000;

const server = express();

server.get("/", (req, res) => {
    res.status(200).send(`Test = ${process.env.PORT}`)
})

server.listen(PORT, () => console.log(`Server is started at port: ${PORT}`))