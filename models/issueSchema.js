const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    labels: [{
        type: String
    }]
}, {
    timestamps: true
});

const Issue = mongoose.model('Issue', IssueSchema);
module.exports = Issue;