const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    res.send("Hello World");
});

app.listen(port); //dit is wat communicatie tussen de browser en je server. De server luistert naar de port (zie analogy in notion)