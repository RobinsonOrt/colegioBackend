const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    email:{
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    password:{
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    date:{
        type: Date,
        default: Date.now
    },
    rol:{
        type: String,
        required: true,
    },
    studentAccept:{
        type: ObjectId,
        ref: "StudentAccept",
        required: false,
    }
})

module.exports = mongoose.model('user', userSchema);