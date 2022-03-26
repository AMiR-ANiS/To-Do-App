const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true 
    },
    category: {
        type: String,
        enum: ['personal', 'work', 'school', 'cleaning', 'other'],
        required: true 
    },
    due: {
        type: Date,
        required: true
    }
});

const ToDo = mongoose.model('ToDo', todoSchema);
module.exports = ToDo;

