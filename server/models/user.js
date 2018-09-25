let mongoose = require('mongoose')
var User = mongoose.model('Users', {
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 1
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = {User}