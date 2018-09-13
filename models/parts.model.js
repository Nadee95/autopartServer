var mongoose = require('mongoose');

var Schema = mongoose.Schema();

var partShema = new Schema({



    bName:String,
    owner:String,
    address:String,
    nearestTown:String,
    district:String,
    cnum:String,
    hp:Number,
    email:String,
    pno:Number,
    location:{lat:Number,
        lon:Number} 
});

module.exports = mongoose.model('Parts',partShema );