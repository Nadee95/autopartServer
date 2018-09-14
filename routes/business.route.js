var express = require('express');
var router = express.Router();
var Business = require('../models/business.model');

/* GET users listing. */
router.post('/add', function(req, res, next) {
    var business = new Business(req.body);
    business.save(function (err) {
        if (err){
          return res.json({status:500,message:"ERROR_CREATE",data:err.message});
        } 
        return res.json({status:200,message:"SUCCESSFUL"});
      });
})
//note yet implemented
router.post('/:businessId/addPart', function(req, res, next) {
  let id=req.params.businessId;
  let partId;
  business.query.findOneAndUpdate({conditions}, update, options, (function (err) {
      if (err){
        return res.json({status:500,message:"ERROR_CREATE",data:err.message});
      } 
      return res.json({status:200,message:"SUCCESSFUL"});
    })
  );
})

module.exports = router;
