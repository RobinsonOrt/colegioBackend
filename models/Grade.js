const mongoose = require('mongoose');

const gradeSchema = mongoose.Schema({
    gradeName: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    }
    
})

module.exports = mongoose.model('grade', gradeSchema);