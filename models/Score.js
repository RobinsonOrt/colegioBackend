const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const scoreSchema = mongoose.Schema({
    score: {
        type: String,
        required: true,
    },
    course: {
        type: ObjectId,
        ref: "Course",
        required: true,
    },
    studentAccept: {
        type: ObjectId,
        ref: "StudentAccept",
        required: true,
    }
    
})

module.exports = mongoose.model('score', scoreSchema);