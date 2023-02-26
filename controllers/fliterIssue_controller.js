const Issue = require('../models/issueSchema');

module.exports.filterByAuthor = async (req, res) => {
    try {
        if(req.body.author){
            const filteredIssue = await Issue.find({
                author: req.body.author
            });
            if(req.xhr){
                return res.json({
                    data: {
                        allIssue: filteredIssue 
                    },
                    message: `List of all issue created by author:`
                });
            }
        }
        else if(req.body.title){
            const filteredIssue = await Issue.find({
                title: req.body.title,
                description: req.body.description
            });
            if(req.xhr){
                return res.json({
                    data: {
                        allIssue: filteredIssue 
                    },
                    message: `List of all issue created by author:`
                });
            }
        }
        else if(req.body.label){
            const issues = await Issue.find({});
            console.log(req.body.label, "label");
            var arr = [];
            for(issue of issues){
                let count = 0;
                for(let j = 0; j < req.body.label.length; j++){
                    for(let i = 0; i < issue.labels.length; i++){
                        if(req.body.label[j] == issue.labels[i]){
                            count++;
                        }
                    }
                }
                if(req.body.label.length == count){
                    arr.push(issue);
                };
            }


              

            console.log(arr);
            if(req.xhr){
                return res.json({
                    data: {
                        allIssue: arr 
                    },
                    message: `List of all issue created by author:`
                });
            }
        }
        return res.redirect('back');



        
    } catch (err) {
        console.log(`Error in filtering ${err}`);
        return;
    }
}