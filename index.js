//Initialize server object
const express = require("express")
const app = express()

//Define callback function for GET request on route /hello
app.get("/hello", (req, res) => {
    console.log(req.ip)
    res.send("Hello good sir")
})

//Start listening on port 3000, callback function
app.listen(3000, () => console.log("Server started") )