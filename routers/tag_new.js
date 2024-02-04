module.exports = app => {
    var TagNew = require('../controllers/tag_new');
    var router = require('express').Router();

    router.post("/", TagNew.create);
    router.get('/', TagNew.findall);
    router.get('/:id', TagNew.findone);
    router.delete('/:id', TagNew.delete);
    router.patch('/:id', TagNew.update);

    app.use("/tagNews", router);
}