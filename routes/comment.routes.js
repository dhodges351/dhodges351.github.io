var express = require('express'); 
var routerComment = express.Router(); 
var mongoose = require('mongoose'); 
var Comment = require('../models/comment.model.js');

/* GET ALL COMMENTS */ 
routerComment.get('/', function(req, res, next) 
{ 
    Comment.find(function (err, comments) 
    { 
        if (err) return next(err); 
        res.json(comments); 
    }); 
});

/* GET SINGLE COMMENT BY ID */ 
routerComment.get('/:id', function(req, res, next) 
{ 
    Comment.findById(req.params.id, function (err, comments) 
    { 
        if (err) return next(err); 
        res.json(comments); 
    }); 
});

/* SAVE COMMENT */ 
routerComment.post('/', function(req, res, next) 
{ 
    Comment.create(req.body, function (err, comments) 
    { 
        if (err) return next(err); 
        res.json(comments); 
    }); 
}); 

/* UPDATE COMMENT */ 
routerComment.put('/:id', function(req, res, next) 
{ 
    Comment.findByIdAndUpdate(req.params.id, req.body, function (err, comments) 
    { 
        if (err) return next(err); 
        res.json(comments); 
    }); 
}); 

/* DELETE COMMENT */ 
routerComment.delete('/:id', function(req, res, next) 
{ 
    Comment.findByIdAndRemove(req.params.id, req.body, function (err, comments)
    { 
        if (err) return next(err); 
        res.json(comments); 
    }); 
}); 

module.exports = routerComment;