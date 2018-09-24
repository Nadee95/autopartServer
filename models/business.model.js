var mongoose = require('mongoose');

var Schema = mongoose.Schema();

var businessSchema = new mongoose.Schema({

    bName:String,
    owner: String,
    address: String,
    nearestTown:String,
    district:String,
    contacts:[String],  
    email:String,
    imageIds:[String],
    location:{
        lat:Number,
        lng:Number},
    parts:[String]
});

module.exports = mongoose.model('Business',businessSchema );