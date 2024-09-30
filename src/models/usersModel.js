var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    dni:String,
    names: String,
    surnames: String,
    phoneNumber: String,
    email: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('users', userSchema);