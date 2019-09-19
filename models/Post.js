const mongoose = require('mongoose');
const {Types: {ObjectId}} = mongoose;
const validateObjectId = (id) => ObjectId.isValid(id) && (new ObjectId(id)).toString() === id;

const PostSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    intro:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    created_at: {
        type: String
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);