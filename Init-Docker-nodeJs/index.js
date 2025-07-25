const express = require("express");
const app = express();
const PORT = 3654;

app.get('/', (req, res)=>{
    res.json({
        "hey": "Its Ayush here!"
    })
})

app.listen(PORT, ()=>{
    console.log("Server is live at 3654")
})