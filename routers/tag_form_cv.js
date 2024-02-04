module.exports = app => {
    var TagFormCV = require('../controllers/tag_form_cv');
    var router = require('express').Router();

    router.post("/", TagFormCV.create);
    router.get('/', TagFormCV.findall);
    router.get('/:id', TagFormCV.findone);
    router.delete('/:id', TagFormCV.delete);
    router.patch('/:id', TagFormCV.update);

    app.use("/tagFormCVs", router);
}