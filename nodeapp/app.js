const express = require("express")
const app = express()
var PORT = 8080;

app.get('/', (req, res) => {
    res.send("GET Request Called")
  })


app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})