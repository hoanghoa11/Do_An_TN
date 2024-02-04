module.exports = (app) => {
    var TagWork = require('../controllers/tag_work');
    var router = require('express').Router();
  
    router.post('/', TagWork.create);
    router.get('/', TagWork.findall);
    router.get('/:id', TagWork.findone);
    router.delete('/:id', TagWork.delete);
    router.patch('/:id', TagWork.update);
  
    app.use('/tagWorks', router);
  };
  