var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var businessSchema = new mongoose.Schema({
    bName:String,
    owner: String,
    address: String,
    nearestTown:String,
    district:String,
    contacts:[String],  
    email:String,
    imageIds:[String],
    fname:String,
    location:{
        lat:Number,
        lng:Number},
    parts:[String]
});
businessSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Business',businessSchema );