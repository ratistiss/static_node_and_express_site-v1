
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { projects });
})

router.get('/about', (req, res) => {
    res.render('about');
})

router.get("/projects/:id", (req, res, next) => {
    const projectID = req.params.id;
    const project = projects.find(({ id }) => id === +projectID);

    if (project) {
        res.render("project", { project })
    } else {
        // res.sendStatus(404);
        const err = new Error('Page Not Found');
        err.status = 404;
        next(err);
    }

});

module.exports = router;