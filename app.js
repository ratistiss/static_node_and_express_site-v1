
const express = require('express');
const app = express();
const data = require('./data.json');
const {projects} = data;

app.set('view engine', 'pug');
app.use('/static/', express.static('public'));
app.use('/static/', express.static('images'));

app.get('/', (req, res) => {
    res.render('index', { projects });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get("/projects/:id",  (req, res) => {
    const projectID = req.params.id;
    const project = projects.find(({id}) => id === +projectID);

    if(project){
     res.render("project", { project })
     } else {
     res.sendStatus(404);
     }
       
  });


app.use((err, req, res, next) =>{
    res.locals.error = err;
    res.render('error');


});



app.listen(3000);