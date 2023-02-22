const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');

router.post('/create-project', projectController.createProject);

module.exports = router;