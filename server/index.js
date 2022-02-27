
const epxress = require("express");
const app = epxress();

app.get("/", (req, res)=>{
    res.send("welcome to port 8080")
})

app.listen(8080, (req, res)=>{
    console.log("listening on port 8080")
})


