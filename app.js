const createError = require('http-errors'); 
const favicon = require('serve-favicon'); 
const logger = require('morgan');
const path = require('path'); 
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();
const DIR = 'assets/images/';
const apiRouter = require('./routes/blogPost.routes.js');
const apiContactRouter = require('./routes/contact.routes.js');
const apiContentRouter = require('./routes/blogContent.routes.js');
const apiCommentRouter = require('./routes/comment.routes.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogDb',
{ 
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true
}) 
.then(() => console.log('connection successful')) 
.catch((err) => console.error(err));
 
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'dist/ng-dh-nav'))); 
app.use('/', express.static(path.join(__dirname, 'dist/ng-dh-nav')));
app.use('/api/comment', apiCommentRouter);
app.use('/api/contact', apiContactRouter);
app.use('/api/blogContent', apiContentRouter);
app.use('/api', apiRouter);

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      //cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
      cb(null, file.originalname);
    }
});
let upload = multer({storage: storage});

app.get('/api', function (req, res) {
  res.end('file catcher example');
}); 
app.post('/api/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return res.send({
          success: true
        })
      }
});
app.use('/api/upload', router);

// catch 404 and forward to error handler 
app.use(function(req, res, next) 
{ 
    next(createError(404)); 
}); 

// error handler 
app.use(function(err, req, res, next) 
{ 
    // set locals, only providing error in development 
    res.locals.message = err.message; 
    res.locals.error = req.app.get('env') === 'development' 
        ? err : {}; 
        
    // render the error page 
    res.status(err.status || 500); 
    res.sendStatus(err.status); 
}); 

module.exports = app;