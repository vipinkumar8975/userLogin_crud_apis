const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    username: String,
    password:String,
},{
    timestamps: true
});

module.exports =  mongoose.model('user', userSchema)