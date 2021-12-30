const Student = require('../models/Student');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.createStudent = (req, res) =>{
    const student = new Student(req.body)
    student.save((err, data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.listStudents = (req, res) => {
    Student.find().exec((err, data) =>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}