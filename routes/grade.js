const express = require('express');
const router = express.Router();

const { createGrade, gradeByName, listGrades } = require('../controllers/gradeController');

router.post('/createGrade', createGrade);
router.get('/gradename/:gradeName', gradeByName);
router.get('/grades', listGrades);

module.exports = router;