module.exports = (app) => {
    var WorkApply = require('../controllers/workApply');
    var router = require('express').Router();
  
    router.post('/', WorkApply.create);
    router.get('/', WorkApply.findall);
    router.get('/:id', WorkApply.findone);
    router.delete('/:id', WorkApply.delete);
    router.patch('/', WorkApply.update);
  
    app.use('/workApplys', router);
  };
  