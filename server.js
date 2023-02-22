const express = require ("express");
const members = require("./members");
const memebers = require("./members");

const logger = require("./Middleware/logger")

const app = express()

app.use(logger)

app.use(express.static(__dirname + "/public"))

app.get("/members", (req, res)=> {
    res.json(members)
})

app.get("/members/:id", (req, res ) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
})

const PORT = 5000

app.listen(PORT, (err) => {
    err ? console.log(err)
        : console.log(`Server is running on port ${PORT}`)
})