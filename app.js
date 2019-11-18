
const express = require('express');
const data = require('./data.json');

const app = express();
app.get('/', (req,res) =>{
    res.send('were connected');

})










app.listen(3000);