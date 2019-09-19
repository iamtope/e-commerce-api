const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');

// Create a post
router.post('/add', (req, res, next) => {
    const title = req.body.title;
    const author = req.body.author;
    const image = req.body.image;
    const intro = req.body.intro;
    const content = req.body.content;
    
    newPost = new Post({
        title: title,
        author: author,
        image: image,
        intro: intro,
        content: content,
        created_at: new Date()
    });
    newPost.save()
    .then(post => {
        res.json(post); 
    })
    .catch(err => console.log(err));
})

// Get all one post
router.get('/single/:id', (req, res, next) => {
    //Grab the id of the post
    let id = req.params.id;
    Post.findById(id)
        .then((post) => {
            res.json(post);
        })
        .catch(err => console.log(err))
});

// Get all the posts
router.get('/all', (req, res, next) => {
    Post.find()
        .then((posts) => {
            res.json(posts);
        })
        .catch(err => console.log(err))
});

// to update a Post
router.put('/update/:id', (req, res, next) => {
    //Grab the id of the post
    let id = req.params.id;
    // find the post by id from the databasse
        Post.findByIdAndUpdate(id)
        .then(post => {
            post.title = req.body.title;
            post.author = req.body.author;
            post.image = req.body.image;
            post.intro = req.body.intro;
            post.content = req.body.content;
            post.save()
            .then(post =>{
                res.send({message: 'Post updated succesfully',
                status: 'success',
                post: post})
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
        
    });

// make delete request
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Post.findById(id)
    .then(post => {
        post.delete()
        .then(post =>{
            res.send({message: 'Post deleted succesfully',
            status: 'success',
            post: post})

        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


module.exports = router;