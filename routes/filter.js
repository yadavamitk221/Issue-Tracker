const express = require('express');
const router = express.Router();
const filerController = require('../controllers/fliterIssue_controller');

router.post('/author', filerController.filterByAuthor);


module.exports = router;