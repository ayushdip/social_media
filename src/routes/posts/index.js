const Router = require('express').Router();
const express = require('express');
const {createNewPost,findAllPost} = require('../../controllers/posts')
const route = Router;
const {CommentRoute} = require('./comments');
route.use(express.json());
route.use(express.urlencoded({extended:true}));
route.use('/comment',CommentRoute);
route.post('/',async(req,res)=>{
    const {title,body,userId} = req.body;
    if((!title) || (!body) || (!userId)){
        res.status(400).send("Enter valid title body userId");
    }
    else{
        const post = await createNewPost(userId,title,body);
        res.status(201).send(post);
    }

})
route.get('/',async(req,res)=>{
    const posts = await findAllPost();
    res.status(200).send(posts);
})

// route.post('/',async(req,res)=>{
//     const post = await createNewPost(parseInt(Math.random()*5 +1 ),`This is title by ${parseInt(Math.random()*5 + 1)}`,`This is body by ${parseInt(Math.random()*5 + 1)}`);
//     res.status(201).send(post);
// })

module.exports = {
    PostRoute : route
}