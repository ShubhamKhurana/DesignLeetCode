const express = require("express")
const app = express()

app.get("/home", function(req, res){
  res.send("HELLO SIR, IT'S JARVIS THIS SIDE")
})

app.get("/signup", function(req, res){
  res.send("SIGNUP PAGE")
})

app.get("/login", function(req, res){
  res.send("LOGIN PAGE")
})

app.get("/problems", function(req, res){
  res.send("PROBLEMS PAGE")
})

app.get("/submissions", function(req, res){
  res.send("SUBMISSIONS PAGE")
})

app.listen(3000, () => {
  console.log("Jarvis is running this website on Port 3000!")
})
