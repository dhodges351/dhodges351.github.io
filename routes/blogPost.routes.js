var express = require('express'); 
var router = express.Router(); 
var mongoose = require('mongoose'); 
var BlogPost = require('../models/blogPost.model.js');

/* GET ALL BLOG POSTS */ 
router.get('/', function(req, res, next) 
{ 
    BlogPost.find(function (err, blogPosts) 
    { 
        if (err) return next(err); 
        res.json(blogPosts); 
    }); 
}); 

/* GET SINGLE BLOG POST BY ID */ 
router.get('/:id', function(req, res, next) 
{ 
    BlogPost.findById(req.params.id, function (err, post) 
    { 
        if (err) return next(err); 
        res.json(post); 
    }); 
}); 

/* SAVE BLOG POST */ 
router.post('/', function(req, res, next) 
{ 
    BlogPost.create(req.body, function (err, post) 
    { 
        if (err) return next(err); 
        res.json(post); 
    }); 
}); 

/* UPDATE BLOG POST */ 
router.put('/:id', function(req, res, next) 
{ 
    BlogPost.findByIdAndUpdate(req.params.id, req.body, function (err, post) 
    { 
        if (err) return next(err); 
        res.json(post); 
    }); 
}); 

/* DELETE BLOG POST */ 
router.delete('/:id', function(req, res, next) 
{ 
    BlogPost.findByIdAndRemove(req.params.id, req.body, function (err, post)
    { 
        if (err) return next(err); 
        res.json(post); 
    }); 
}); 

module.exports = router;