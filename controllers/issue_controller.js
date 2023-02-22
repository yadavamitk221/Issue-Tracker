const Project = require('../models/projectSchema');
const Issue = require('../models/issueSchema');

module.exports.projectDetail = async (req, res) => {

    try {
        const project = await Project.findById(req.params.id).populate('issue');
        return res.render('project_details', {
            title: "project details",
            project: project
        });
    } catch (err) {
        if(err){
            console.log("error in fetiching the project and the issue", err);
        } 
        return;
    }    
}

module.exports.createIssue = async (req, res) => {
    try {
         const project = await Project.findById(req.params.id);
         console.log(`params ${req.params.id}`);
         console.log(`form data ${req.body}`);
         const Newissue = await Issue.create({
            title: req.body.title,
            description: req.body.description,
            labels: req.body.label,
            author: req.body.author
         });
         project.issue.push(Newissue.id);
         project.save();
         project.populate('issue');
         return res.redirect('back');
    } catch (err) {
        if(err){
            console.log(`error in creating the Issue ${err}`);
            return;
        }
    }
}