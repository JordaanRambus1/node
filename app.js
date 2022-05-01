const express = require('express');
const app = express(); 

app.get('/',(req,res)=> {
    res.send("My first Node Js App home page");
});


app.listen(3001, () => {
 console.log("ahhh so you are so you are in the console ehhh");
});


