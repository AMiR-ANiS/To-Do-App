const db = require('../config/mongoose');
const ToDo = require('../models/todo_item');

module.exports.addItem = function(req, res){
    let dueDate = "No deadline";
    if(req.body.due != ""){
        dueDate = req.body.due;
        let year = dueDate.substring(0,4);
        let month = dueDate.substring(5,7);
        let day = dueDate.substring(8);
        let m = "";
        switch(month){
            case "01": m="Jan";
            break;
            case "02": m="Feb";
            break;
            case "03": m="Mar";
            break;
            case "04": m="Apr";
            break;
            case "05": m="May";
            break;
            case "06": m="Jun";
            break;
            case "07": m="Jul";
            break;
            case "08": m="Aug";
            break;
            case "09": m="Sept";
            break;
            case "10": m="Oct";
            break;
            case "11": m="Nov";
            break;
            case "12": m="Dec";
            break;
            default: break;
        }
        dueDate = day+"-"+m+"-"+year;
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
        return res.redirect('back');
    });
}