const db = require('../config/mongoose');
const ToDo = require('../models/todo_item');

module.exports.addItem = function(req, res){
    ToDo.create({
        description: req.body.description,
        category: req.body.category,
        due: req.body.due
    }, function(err, newTodo){
        if(err){
            console.log('Error in creating a new todo');
            return;
        }
        console.log('task added !');
        return res.redirect('back');
    });
}