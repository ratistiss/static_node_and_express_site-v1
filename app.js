
const express = require('express');
const app = express();
const data = require('./data.json');
const {projects} = data;

app.set('view engine', 'pug');
app.use('/static/', express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

// app.get("/projects/:id",  (req, res) => {
//     res.render("project.id", {
       
//     });
// });






app.listen(3000);