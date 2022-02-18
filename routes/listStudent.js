const express = require('express');
const router = express.Router();

const { listStudents, remove} = require('../controllers/studentController');

router.get('/students', listStudents);
router.delete('/delete/:solicitudId', remove)

module.exports = router;