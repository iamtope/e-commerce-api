const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');

// Create a post
router.post('/add', (req, res, next) => {
    const product = req.body.product;
    const description = req.body.description;
    const image = req.body.image;
    const price = req.body.price;

    
    newPost = new Post({
        product: product,
        description: description,
        image: image,
        price: price,
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
        .catch(err => 
            console.log(err))
});

// validate items in checkout array
router.get('/checkout', (req, res, next) => {
    // Post.find()
    //     .then((posts)=>{
    //         if(posts.length === 0){
    //             return res.status(409).json({
    //                 message: "cart cannot be empty on checkout"
    //             })
    //         }else{
    //             res.json(posts)
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    if(!req.body.cart.length) {
        return res.status(409).json({
            message: "Cart can't be empty"
        })
    } else {
        return res.status(200).json({
            message: "Checkout complete!"
        })
    }

});

// to update a Post
router.put('/update/:id', (req, res, next) => {
    //Grab the id of the post
    let id = req.params.id;
    // find the post by id from the databasse
        Post.findByIdAndUpdate(id)
        .then(post => {
            post.product = req.body.product;
            post.description = req.body.description;
            post.image = req.body.image;
            post.price = req.body.price;
            post.save()
            .then(post =>{
                res.send({message: 'Product updated succesfully',
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
            res.send({message: 'Product deleted succesfully',
            status: 'success',
            post: post})

        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


module.exports = router;