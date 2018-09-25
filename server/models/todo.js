const mongoose = require('mongoose');

var Todo= mongoose.model('Todos', {
    text: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
        
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Number,
        default: null
    }
});

module.exports = {Todo}