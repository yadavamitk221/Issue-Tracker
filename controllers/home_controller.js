const Project = require('../models/projectSchema');

module.exports.home = async (req, res) => {

    try {
        let allPtoject = await Project.find({}).sort('-createdAt');
        return res.render('home', {
            title: 'Home Page',
            allProject: allPtoject
        });
    } catch (err) {
        console.log(`Error in creating the new Project ${err}`);
        return;
    }
}