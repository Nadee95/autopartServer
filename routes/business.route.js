var express = require('express');
var router = express.Router();
var Business = require('../models/business.model');
var mongoose = require('mongoose')
/* GET users listing. */
router.post('/add', function (req, res, next) {
  var business = new Business(req.body);
  business.save(function (err) {
    if (err) {
      return res.json({ status: 500, message: "ERROR_CREATE", data: err.message });
    }
    return res.json({ status: 200, message: "SUCCESSFUL" });
  });
})
//note yet implemented
router.post('/:businessId/addParts', function (req, res, next) {
  let id = req.params.businessId;
  mgi = mongoose.Types.ObjectId(id);
  console.log(req.body);
  Business.findOneAndUpdate({ '_id': mongoose.Types.ObjectId(id) }, { $addToSet: { parts: req.body } }, (function (err) {
    if (err) {
      return res.json({ status: 500, message: "ERROR_CREATE", data: err.message });
    }
    return res.json({ status: 200, message: "SUCCESSFUL" });
  })
  );
})

router.get('/', function (req, res, next) {
  let search = req.query.search;
  if (search) {
    Business.find({$text:{$search:search}},{bName:1, owner:1,address:1}, (function (err,business) {
      if (err) {
        return res.json({ status: 500, message: "ERROR_CREATE", data: err.message });
      }
      return res.json(business);
    })
    );
  }

})

router.get('/findByPart',function (req, res, next) {
  let tag = req.query.tag;
  let district = req.query.district;
  if (tag && district) {
    Business.find({parts:tag,district:district},{bName:1,address:1}, (function (err,business) {
      if (err) {
        return res.json({ status: 500, message: "ERROR_CREATE", data: err.message });
      }
      return res.json({status:200,data:business});
    })
    );
  }

})

module.exports = router;
