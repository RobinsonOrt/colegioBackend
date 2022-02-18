const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const courseSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    grade: {
        type: ObjectId,
        ref: "Grade",
        required: true,
    }
})

module.exports = mongoose.model('course', courseSchema);