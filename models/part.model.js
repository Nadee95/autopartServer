var mongoose = require('mongoose');

var Schema = mongoose.Schema();

var partSchema = new mongoose.Schema({

    vtype:String,
    brand:String,
    catagory:String,
    partType:String

});

module.exports = mongoose.model('Part',partSchema );
