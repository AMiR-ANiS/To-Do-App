const db = require('../config/mongoose');
const ToDo = require('../models/todo_item');

module.exports.home = function(req, res){
    ToDo.find({}, function(err, todoList){
        if(err){
            console.log('error in fetching the database items');
            return;
        }
        return res.render('home', {
            title: "To Do App",
            todo_list: todoList,
            index: 1
        });
    });
}