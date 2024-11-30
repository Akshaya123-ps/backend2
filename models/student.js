const mongoose = require('mongoose')

var schema = mongoose.Schema({
    Name:String,
    Age:Number,
    Dept:String,
    Roll_no:Number
})

var StudentModel = mongoose.model("employee",schema)
module.exports =StudentModel