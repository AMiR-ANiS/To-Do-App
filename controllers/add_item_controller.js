const db = require('../config/mongoose');
const ToDo = require('../models/todo_item');

module.exports.addItem = function(req, res){
    let dueDate = "No deadline";
    if(req.body.due != ""){
        dueDate = req.body.due;
    }
    ToDo.create({
        description: req.body.description,
        category: req.body.category,
        due: dueDate 
    }, function(err, newTodo){
        if(err){
            console.log('Error in creating a new todo');
            return;
        }
        console.log('*******', newTodo);
        return res.redirect('back');
    });
}