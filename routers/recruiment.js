module.exports = app => {
    var Recruiment = require('../controllers/recruiment');
    var router = require('express').Router();

    router.post("/", Recruiment.create);
    router.get('/', Recruiment.findall);
    router.get('/:id', Recruiment.findone);
    router.delete('/:id', Recruiment.delete);
    router.patch('/:id', Recruiment.update);

    app.use("/recruiments", router);
}