const Todo=require('../models/todo');
module.exports.home=function(req,res)
{
    Todo.find({},function(err,todo)
    {
        if(err)
        {
            console.log("error in fetching");
            return;
        }
        return res.render('home',
        {
            title:"Todo app",
            to_do:todo
        });
    });
}