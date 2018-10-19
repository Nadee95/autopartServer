var express = require('express');
var router = express.Router();
var Business = require('../models/business.model');
var mongoose = require('mongoose')

/*
//set the directory for the uploads to the uploaded to
var DIR = './uploads/';

//gives full access

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
});

var upload = multer({ storage: storage }).single('file');

router.post('/add', function (req, res,next) {
  upload(req, res, function (err) {
    if (err) {
      return res.json({status:500,message:"upload_error"});
    }
    next();
  })
  },
  function(req,res){
    var business = new Business(req.body);
    console.log(business);
    business.content.fileId = req.file.filename;
    //mongoose.Types.ObjectId(obj.course);
    business.content.fileType=req.file.mimetype;
    var o = req.file.originalname;
    let ext = o.substring(o.lastIndexOf('.'), o.length);
    business.content.fileName = (namify(req.body.title) + ext).replace(' ','_');
    console.log(content.fileName);
    console.log(business);
    
    business.save(function (err) {
      if (err) {
        return res.json({ status: 500, message: "ERROR_CREATE", data: err.message });
      }
      return res.json({ status: 200, message: "SUCCESSFUL" });
    });
  });
//////////////////// 

/* GET users listing. */
/*router.post('/add', function (req, res, next) {
  var business = new Business(req.body);
  business.save(function (err) {
    if (err) {
      return res.json({ status: 500, message: "ERROR_CREATE", data: err.message });
    }
    return res.json({ status: 200, message: "SUCCESSFUL" });
  });
})*/

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
