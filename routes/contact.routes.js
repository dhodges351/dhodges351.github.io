var express = require('express'); 
var routerContact = express.Router(); 
var mongoose = require('mongoose'); 
var Contact = require('../models/contact.model.js');

/* GET ALL CONTACTS */ 
routerContact.get('/', function(req, res, next) 
{ 
    Contact.find(function (err, contacts) 
    { 
        if (err) return next(err); 
        res.json(contacts); 
    }); 
}); 

/* GET SINGLE CONTACT BY ID */ 
routerContact.get('/:id', function(req, res, next) 
{ 
    Contact.findById(req.params.id, function (err, contacts) 
    { 
        if (err) return next(err); 
        res.json(contacts); 
    }); 
}); 

/* SAVE CONTACT */ 
routerContact.post('/', function(req, res, next) 
{ 
    Contact.create(req.body, function (err, contacts) 
    { 
        if (err) return next(err); 
        res.json(contacts); 
    }); 
}); 

/* UPDATE CONTACT */ 
routerContact.put('/:id', function(req, res, next) 
{ 
    Contact.findByIdAndUpdate(req.params.id, req.body, function (err, contacts) 
    { 
        if (err) return next(err); 
        res.json(contacts); 
    }); 
}); 

/* DELETE CONTACT */ 
routerContact.delete('/:id', function(req, res, next) 
{ 
    Contact.findByIdAndRemove(req.params.id, req.body, function (err, contacts)
    { 
        if (err) return next(err); 
        res.json(contacts); 
    }); 
}); 

module.exports = routerContact;