const Score = require('../models/Score');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.createScore = (req, res) =>{
    const score = new Score(req.body)
    score.save((err, data)=>{
        if(err){
            return res.status(200).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.scoreByStudent = (req, res) => {
    Score.find({ studentAccept: req.body.studentAccept, course: req.body.course }).exec((err, data) =>{
        if(err){
            return res.status(201).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    });
}