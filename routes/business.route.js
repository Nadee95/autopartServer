var express = require('express');
var router = express.Router();
var Business = require('../models/business.model');
var mongoose = require('mongoose')
var multer = require('multer');
var namify = require('filenamify');
//set the directory for the uploads to the uploaded to
var DIR = './public/business_img';

//gives full access

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR)
  },
  filename: function (req, file, cb) {
    let o = file.originalname;
    let ext = o.substring(o.lastIndexOf('.'), o.length);
    let fname = namify((req.body.bName).trim() + '-' + Date.now() + ext).replace(' ','_');
    cb(null, fname);
  }
});

var upload = multer({ storage: storage }).array('files',4);

router.post('/add', function (req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      console.log(err)
      return res.status(500).json({message: "upload_error", data:err });
    }
    next();
  })
},
  function (req, res) {
   
    var business = req.body;
    business.location = JSON.parse(req.body.location);
    business.contacts = req.body.contacts.split(",");
    console.log(req.body.contacts);
    business.imageIds = JSON.parse(req.body.imageIds);
    req.files.forEach(file => {
     business.imageIds.push(file.filename);
    });
    // business.content.fileId = req.file.filename;
    //business.content.fileType=req.file.mimetype;
    //var o = req.file.originalname;
    //let ext = o.substring(o.lastIndexOf('.'), o.length);
    console.log(req.files);
    Business.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.body.bid) || mongoose.Types.ObjectId() },business,{new:true, upsert: true},function (err,data) {
      if (err) {
        return res.status(500).json({message: "ERROR_CREATE", data: err.message });
      }
      return res.status(200).json({message: "SUCCESSFUL", business: data});
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
      return res.status(500).json({message: "ERROR_CREATE", data: err.message });
    }
    return res.status(200).json({message: "SUCCESSFUL" });
  })
  );
})

router.post('/:businessId/deleteParts', function (req, res, next) {
  let id = req.params.businessId;
  mgi = mongoose.Types.ObjectId(id);
  console.log(req.body);
  Business.findOneAndUpdate({ '_id': mongoose.Types.ObjectId(id) }, { $pull: { 'parts':  {$in: req.body} }}, (function (err) {
    if (err) {
      return res.status(500).json({message: "ERROR_DELETE", data: err.message });
    }
    return res.status(200).json({message: "SUCCESSFUL" });
  })
  );
})

router.get('/', function (req, res, next) {
  let search = req.query.search;
  if (search) {
    Business.find({ $text: { $search: search } }, { bName: 1, owner: 1, address: 1 }, (function (err, business) {
      if (err) {
        return res.status(500).json({message: "ERROR_SEARCH", data: err.message });
      }
      return res.json(business);
    })
    );
  }else{
    let limit = req.query.limit;
    let page = req.query.page;
    if(!limit){
      limit = 25;
    }
    if(!page){
      page = 1;
    }
    Business.paginate({},{select:'bName address district owner imageIds',limit:limit,page:page},(function(err,result){
      if(err){
        return res.json({ status: 500, message: "ERROR", data: err.message });
      }
      return res.status('200').json(result);
    }));
  }
});

router.get('/findByPart', function (req, res, next) {
  let tag = req.query.tag;
  let district = req.query.district;
  let town = req.query.town;
  console.log(tag + ' ' + district);
  if (tag && district && town) {
    Business.find({ parts: tag, district: district, nearestTown: town }, { bName: 1, address: 1, fname: 1, imageIds:1 }, (function (err, business) {
      if (err) {
        return res.status(500).json({ message: "ERROR_CREATE", data: err.message });
      }
      return res.status(200).json({ data: business });
    })
    );
  } else {
    return res.status(400).json({ message: "INSUFFICIENT_PARAMS" });
  }

})

router.get('/gettowns', function (req, res, next) {
  let tag = req.query.tag;
  let district = req.query.district;
  if (tag && district) {
    Business.distinct('nearestTown', { parts: tag, district: district }, (function (err, towns) {
      if (err) {
        return res.json({ status: 500, message: "ERROR_CREATE", data: err.message });
      }
      return res.json({ status: 200, data: towns });
    })
    );
  }
})

router.get('/:id/info', function (req, res, next) {
  let id = req.params.id;
  mgi = mongoose.Types.ObjectId(id);

  if (id) {
    Business.findById(id, {}, (function (err, business) {
      if (err) {
        return res.status(500).json({message: "ERROR_RETRIEVE", data: err.message });
      }
      return res.status(200).json({data: business });
    })
    );
  } else {
    return res.status(304).json({ message: "NO_ID" });
  }
  
})

router.get('/:id/getPartVTypes', function (req, res, next) {
  let id = req.params.id;
  mgi = mongoose.Types.ObjectId(id);
  if (id) {
    Business.aggregate([{
      $match: { "_id": mgi }
    },
    {
      $unwind: "$parts"
    },
    {
      $project: {
        parts: { $substr: ["$parts", 0, 1] }
      }
    }, {
      $group: {
        _id: "$_id",
        parts: { $addToSet: "$parts" }
      }
    }], (function (err, parts) {
      if (err) {
        return res.status(500).json({ message: "ERROR_RETRIEVE", data: err.message });
      }
      return res.status(200).json(parts);
    }));
  } else {
    return res.statusCode(304).json({ message: "NO_ID" });
  }

})

router.get('/:id/getparts', function (req, res, next) {
  var id = req.params.id;
  var level = req.query.lvl;
  const expr = req.query.exp;
  var xto = 0;
  var xfrom = 0;
  mgi = mongoose.Types.ObjectId(id);
  regex = new RegExp("^" + expr + "[A-Z]\w*");
  console.log(level);
  if (level == 1) {
    xto = 1;
    xfrom = 2;
  }else if (level == 2) {
    xto = 3; xfrom = 2;
  }else if(level == 3){
    xto = 5; xfrom = 1;
  }else {
    xto = 6; xfrom = 2;
  }

  console.log(xto + " " + xfrom);
  if (id) {
  Business.aggregate([{
    $match: { "_id": mgi }
  },
  {
    $unwind: "$parts"
  }, {
    $match: {
      parts: { $regex: regex }
    }
  },
  {
    $project: {
      parts: { $substr: ["$parts", xto, xfrom] }
    }
  }, {
    $group: {
      _id: "$_id",
      parts: { $addToSet: "$parts" }
    }
  }], (function (err, parts) {
    if (err) {
      return res.status(500).json({ message: "ERROR_RETRIEVE", data: err.message });
    }
    return res.status(200).json(parts[0]);
  }));
} else {
  return res.statusCode(304).json({ message: "NO_ID" });
}
})

module.exports = router;
