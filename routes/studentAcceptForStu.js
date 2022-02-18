const express = require('express');
const router = express.Router();

const { listStudentById } = require('../controllers/studentAcceptController');

router.get('/student/:_id', listStudentById);

module.exports = router;