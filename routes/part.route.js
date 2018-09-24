var express = require('express');
var router = express.Router();
var Part = require('../models/carPart.model');

/* GET users listing. */
router.post('/add', function(req, res, next) {
    var part = new Part(req.body);
    part.save(function (err) {
        if (err){
          return res.json({status:500,message:"ERROR_CREATE",data:err.message});
        } 
        return res.json({status:200,message:"SUCCESSFUL"});
      });
})
module.exports = router;
