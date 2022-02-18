const express = require('express');
const router = express.Router();

const { createCourse, coursesByGrade } = require('../controllers/courseController');

router.post('/createCourse', createCourse);
router.get('/listcourses/:gradeId', coursesByGrade);

module.exports = router;