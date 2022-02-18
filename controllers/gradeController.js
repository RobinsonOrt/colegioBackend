const Grade = require('../models/Grade');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.createGrade = (req, res) =>{
    const grade = new Grade(req.body)
    grade.save((err, data)=>{
        if(err){
            return res.status(200).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.listGrades = (req, res) => {
    Grade.find().exec((err, data) =>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.gradeByName = (req, res) => {
    Grade.find({ gradeName: req.params.gradeName }).exec((err, data) =>{
        if(err){
            return res.status(201).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    });
}