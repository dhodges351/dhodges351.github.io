var express = require('express'); 
var routerContent = express.Router(); 
var mongoose = require('mongoose'); 
var Content = require('../models/blogContent.model.js');

routerContent.get('/', function(req, res, next) 
{ 
    Content.find(function (err, blogContent) 
    { 
        if (err) return next(err); 
        res.json(blogContent); 
    }); 
}); 

routerContent.get('/:id', function(req, res, next) 
{ 
    Content.findById(req.params.id, function (err, blogContent) 
    { 
        if (err) return next(err); 
        res.json(blogContent); 
    }); 
}); 

routerContent.post('/', function(req, res, next) 
{ 
    Content.create(req.body, function (err, blogContent) 
    { 
        if (err) return next(err); 
        res.json(blogContent); 
    }); 
}); 

routerContent.put('/:id', function(req, res, next) 
{ 
    Content.findByIdAndUpdate(req.params.id, req.body, function (err, blogContent) 
    { 
        if (err) return next(err); 
        res.json(blogContent); 
    }); 
}); 

routerContent.delete('/:id', function(req, res, next) 
{ 
    Content.findByIdAndRemove(req.params.id, req.body, function (err, blogContent)
    { 
        if (err) return next(err); 
        res.json(blogContent); 
    }); 
}); 

module.exports = routerContent;