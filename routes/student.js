const express = require('express');
const router = express.Router();

const { listStudents, createStudent } = require('../controllers/studentController');

router.get('/students', listStudents);
router.post('/register', createStudent);

module.exports = router;