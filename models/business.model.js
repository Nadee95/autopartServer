var mongoose = require('mongoose');

var Schema = mongoose.Schema();

var businessSchema = new mongoose.Schema({

    bName:String,
    owner:String,
    address:{
        line1:String,
        line2:String,
        city:String
    },
    nearestTown:String,
    district:String,
    cnum:String,
    hp:Number,
    email:String,
    pno:[Number],
    location:{
        lat:Number,
        lng:Number} 
});

module.exports = mongoose.model('Business',businessSchema );