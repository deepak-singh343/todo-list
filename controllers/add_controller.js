const db = require('../config/mongoose');
const Todo=require('../models/todo');
module.exports.addcontent=function(req,res)
{
    // console.log("Body:",req.body);
    Todo.create(
    {
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newinfo)
    {
        if(err)
        {
            console.log("error in running");
            return;
        }
         return res.redirect('back');
    });
    
}