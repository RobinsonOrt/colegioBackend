const Course = require('../models/Course');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.createCourse = (req, res) =>{
    const course = new Course(req.body)
    course.save((err, data)=>{
        if(err){
            return res.status(200).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.coursesByGrade = (req, res) => {
    let order = req.query.order ? req.query.order: 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'
    Course.find({grade: req.params.gradeId }).exec((err, data) =>{
        if(err){
            console.log(err)
            return res.status(201).json({
                error: errorHandler(err)
                
            })
        }
        res.json(data);
        
    });
}