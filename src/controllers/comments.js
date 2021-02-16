const {Users,Posts,db,Comments} = require('../db/models');

async function genNeWComment(userId,postId,title,body){
    const comment = await Comments.create({
        userId,
        postId,
        body,
        title
    })
    return comment;
}

async function findAllComments(query){
    const comment = await Comments.findAll({
        include : [Users,Posts]
    });
    return comment;
}


module.exports = {
    genNeWComment,findAllComments
}
//Test code

// async function task(){
//     const userno = parseInt(Math.random()*8 + 1);
//     const postno = parseInt(Math.random()*6 + 1);
//     const comment = await genNeWComment(userno,postno,`Comment on post ${postno}`,
//     `This is a comment by user${userno} at post${postno}`);
//     console.log(comment);
//     const comments = await findAllComments();
//     for(comment of comments){
//         console.log(`${comment.title}\n${comment.body}\n
//         User = ${comment.user.username}\n
//         Post = ${comment.post.id}===========\n`)
//     }
// }
// task();