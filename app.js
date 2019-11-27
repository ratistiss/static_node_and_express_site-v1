
const express = require('express');
const app = express();
const data = require('./data.json');
const {projects} = data;

app.set('view engine', 'pug');
app.use('/static/', express.static('public'));
app.use('/static/', express.static('images'));

const mainRoutes = require('./routes');
const projectsRoutes = require('./routes/projects');
app.use(mainRoutes);
app.use(projectsRoutes);

app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) =>{
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});



app.listen(process.env.PORT || 3000);