var express = require('express');
var router = express.Router();
var Business = require('../models/business.model');
var mongoose = require('mongoose')
var multer = require('multer');
var namify = require('filenamify');
//set the directory for the uploads to the uploaded to
var DIR = './public/business';

//gives full access

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/business')
  },
  filename: function (req, file, cb) {
    let o= file.originalname;
    let ext =o.substring(o.lastIndexOf('.'), o.length);
    let fname= namify(req.body.bName + '-' + Date.now()+ext);
    req.body.fname=fname;
    cb(null,fname);
  }
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
    business.location=JSON.parse(req.body.location);
   // business.content.fileId = req.file.filename;
    //business.content.fileType=req.file.mimetype;
    //var o = req.file.originalname;
    //let ext = o.substring(o.lastIndexOf('.'), o.length);
   // business.content.fileName = (namify(req.body.bName) + ext).replace(' ','_');
    business.fname=req.body.fname;
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
        return res.json({ status: 500, message: "ERROR_SEARCH", data: err.message });
      }
      return res.json(business);
    })
    );
  }
})

router.get('/findByPart',function (req, res, next) {
  let tag = req.query.tag;
  let district = req.query.district;
  console.log(tag + ' ' + district);
  if (tag && district) {
    Business.find({parts:tag,district:district},{bName:1,address:1,fname:1}, (function (err,business) {
      if (err) {
        return res.json({ status: 500, message: "ERROR_CREATE", data: err.message });
      }
      return res.json({status:200,data:business});
    })
    );
  }else{
    return res.json({status:400,message:"INSUFF_PARAMS"});
  }
 
})

router.get('/gettowns',function (req, res, next) {
  let tag = req.query.tag;
  let district = req.query.district;
  if (tag && district) {
    Business.distinct('nearestTown',{parts:tag,district:district}, (function (err,towns) {
      if (err) {
        return res.json({ status: 500, message: "ERROR_CREATE", data: err.message });
      }
      return res.json({status:200,data:towns});
    })
    );
  }
})

router.get('/:id/info',function (req, res, next) {
  let id = req.params.id;
  mgi = mongoose.Types.ObjectId(id);

  if (id) {
    Business.findById(id,{}, (function (err,business) {
      if (err) {
        return res.json({ status: 500, message: "ERROR_RETRIEVE", data: err.message });
      }
      return res.json({status:200,data:business});
    })
    );
  }else{
    return res.json({status:304,message:"NO_ID"});
  }

})
module.exports = router;
