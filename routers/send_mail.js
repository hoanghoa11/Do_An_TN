module.exports = (app) => {
    var SendMail = require('../controllers/sendMail');
    var router = require('express').Router();
  
    router.post('/', SendMail.send);
  
    app.use('/sendMail', router);
  };
  