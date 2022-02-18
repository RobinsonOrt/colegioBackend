const mongoose = require('mongoose');
const studentAcceptSchema = new mongoose.Schema(
    {
        tutorTypeID: {
            type: String,
            require: true,
            maxlength: 12
        },
        tutorID: {
            type: String,
            require: true,
            maxlength: 32
        },
        tutorFirstName: {
            type: String,
            require: true,
            maxlength: 32
        },
        tutorSecondName: {
            type: String,
            maxlength: 32
        },
        tutorSurName: {
            type: String,
            require: true,
            maxlength: 32
        },
        tutorSecondSurName: {
            type: String,
            maxlength: 32
        },
        tutorEmail: {
            type: String,
            require: true,
            maxlength: 32,
            lowercase: true
        },
        tutorPhone: {
            type: String,
            require: true,
            maxlength: 12
        },
        tutorRelationship: {
            type: String,
            require: true,
            maxlength: 12
        },
//Student--------------------------------------------//
        studentTypeID: {
            type: String,
            require: true,
            maxlength: 12
        },
        studentID: {
            type: String,
            require: true,
            maxlength: 32,
            unique: true
        },
        studentFirstName: {
            type: String,
            require: true,
            maxlength: 32
        },
        studentSecondName: {
            type: String,
            maxlength: 32
        },
        studentSurName: {
            type: String,
            require: true,
            maxlength: 32
        },
        studentSecondSurName: {
            type: String,
            maxlength: 32
        },
        studentEmail: {
            type: String,
            require: true,
            maxlength: 32,
            lowercase: true,
            unique: true
        },
        studentPhone: {
            type: String,
            require: true,
            maxlength: 12
        },
        studentBornDate: {
            type: Date,
            require: true,
        },
        studentGrade: {
            type: String,
            require: true,
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("StudentAccept", studentAcceptSchema);