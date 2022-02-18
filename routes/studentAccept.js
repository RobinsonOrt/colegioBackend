const express = require('express');
const router = express.Router();

const { listStudentsAccept, createStudentAccept, studentsByGrade } = require('../controllers/studentAcceptController');

router.get('/studentsaccept', listStudentsAccept);
router.post('/registeraccept', createStudentAccept);
router.get('/grado/:studentGrade', studentsByGrade);

module.exports = router;