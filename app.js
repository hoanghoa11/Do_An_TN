var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hello');
});

//Users
require('./routers/user')(app);
require('./routers/userRole')(app);
require('./routers/userTag')(app);

//Error
app.use((err,req,res,next)=>{
    res.status(500).send(err);
});

//Port
app.listen(process.env.PORT || 3001,()=>{
    console.log('listening on port'+process.env.PORT);
})