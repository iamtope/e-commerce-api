const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        match: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);