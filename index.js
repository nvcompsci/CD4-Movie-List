//Initialize server object
const express = require("express")
const app = express()

app.use(express.json())
app.use( express.static('public') )

let movies = ["Star Wars Episode IV","Avengers","October Sky"]
let ratings = []

app.post("/rating", (req, res) =>  {
    console.log(req.body.value)
    ratings.push( req.body.value )
    console.log(ratings)
    res.send(ratings)
})

app.get("/ratings", (req, res) => {
    console.log("GET on /ratings")
    res.send(ratings)
})

app.post("/movie", (req, res) =>  {
    console.log(req.body)
    movies.push( req.body.name )
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