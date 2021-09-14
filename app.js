const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello from the server!");
});

app.listen(4500, ()=>{
    console.log("server on port 4500")
});