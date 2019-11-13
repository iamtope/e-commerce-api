const mongoose = require('mongoose');
const {Types: {ObjectId}} = mongoose;
const validateObjectId = (id) => ObjectId.isValid(id) && (new ObjectId(id)).toString() === id;

const PostSchema = mongoose.Schema({
    product:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    created_at: {
        type: String
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);