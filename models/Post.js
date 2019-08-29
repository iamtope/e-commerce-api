const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);