const StudentAccept = require('../models/StudentAccept');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.createStudentAccept = (req, res) =>{
    const studentAccept = new StudentAccept(req.body)
    studentAccept.save((err, data)=>{
        if(err){
            return res.status(200).json({
                "error": "Puede que el estudiante ya esté registrado", "status": 400, "errorMsg": 'Ya existe'
            })
        }
        res.json(data);
    })
}

exports.listStudentsAccept = (req, res) => {
    StudentAccept.find().exec((err, data) =>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.listStudentById = (req, res) => {
    StudentAccept.find({ _id: req.params._id }).exec((err, data) =>{
        if(err){
            return res.status(201).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    });
}

exports.studentsByGrade = (req, res) => {
    StudentAccept.find({ studentGrade: req.params.studentGrade }).exec((err, data) =>{
        if(err){
            return res.status(201).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    });
}