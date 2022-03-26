const db = require('../config/mongoose');
const ToDo = require('../models/todo_item');

module.exports.deleteItem = function(req, res){
    for(let id in req.query){
        ToDo.findByIdAndDelete(req.query[id], function(err){
            if(err){
                console.log('Error in deleting the contact !');
                return;
            }
        });
    }
    res.redirect('back');
}