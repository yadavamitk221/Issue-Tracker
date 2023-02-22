const mongoose = require('mongoose');
const Issue = require('./issueSchema');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    Author: {
        type: String,
        require: true
    },
    issue: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Issue
    }]
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;