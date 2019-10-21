//Initialize server object
const express = require("express")
const app = express()

app.use( express.static('public') )

let movies = ["Star Wars Episode IV","Avengers","October Sky"]

app.post("/movie", (req, res) =>  {
    movies.push( req.body )
    console.log(movies)
    res.send(movies)
})

//Define callback function for GET request on route /hello
app.get("/hello", (req, res) => {
    console.log(req.ip)
    res.send("Hello good sir")
})

app.get("/movies", (req, res) => {
    console.log("GET on /movies")
    res.send(movies)
})

//Start listening on port 3000, callback function
app.listen(80, () => console.log("Server started") )