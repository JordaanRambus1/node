const express = require('express');
const app = express(); 

app.get('/',(req,res)=> {
    res.send("My first Node Js App home page");
});

const port = process.env.port || 3000;
app.listen(port, () => {
 console.log("ahhh so you are so you are in the console ehhh");
});


