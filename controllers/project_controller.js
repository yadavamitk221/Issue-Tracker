const Project = require('../models/projectSchema');

module.exports.createProject = async (req, res)=>{
    try {
        let newProject = Project.create({
            name: req.body.name,
            Description: req.body.Description,
            Author: req.body.Author
        });
        return res.redirect('back');
    } catch (err) {
        console.log(`Error in creating the new Project ${err}`);
        return;
    }
}