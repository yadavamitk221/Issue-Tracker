const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issue_controller');

router.get('/:id', issueController.projectDetail);
router.post('/create-issue/:id', issueController.createIssue);

module.exports =  router;