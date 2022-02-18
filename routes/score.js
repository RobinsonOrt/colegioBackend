const express = require('express');
const router = express.Router();

const { createScore, scoreByStudent } = require('../controllers/scoreController');

router.post('/createscore', createScore);

router.post('/scorestudent', scoreByStudent);

module.exports = router;