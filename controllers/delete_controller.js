const db = require('../config/mongoose');
const Todo=require('../models/todo');
module.exports.delcontent= function(req,res){
    let idArray = new Array();
    if(req.params.deleteEle==undefined)
    {
        return res.redirect("back");
    }
    for(let i of (req.params.deleteEle).split(',')){
        idArray.push(i);
    }
    for( let i=0; i<idArray.length; i++){
        Todo.findByIdAndDelete(idArray[i], function(err){
            if(err){
                console.log("Error in deleting an Object from DB");
                return;
            }
        });
    }
    return res.redirect("back");
};