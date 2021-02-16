const {genNeWComment,findAllComments} = require('../../controllers/comments');

const Router = require('express').Router();
const route = Router;
route.get('/',async(req,res)=>{
    const comments = await findAllComments();
    res.status(200).send(comments);
})

route.post('/',async(req,res)=>{
    const {body,title,userId,postId} = req.body;
    console.log(body,title,userId,postId);
    if(!body || !title || !userId || !postId){
        res.status(400).send("Invalid body,title,userId,postId of the comment");
    }
    const comment = await genNeWComment(userId,postId,title,body);
    res.status(200).send(comment);
})

module.exports = {
    CommentRoute : route
}