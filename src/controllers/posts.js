const {Posts,Users} = require('../db/models');

async function createNewPost(userId,title,body){
    const post = await Posts.create({
        userId,
        title,
        body
    })
    return post;
}


async function findAllPost(query){
    let whereClause = {}
    if(query.userId){
        whereClause.userId = query.userId
    }
    const post = await Posts.findAll({
        where : whereClause,
        include : [Users]
    });
    return post;
}

// async function task(){
//     console.log(await findAllPost({}))
// }
// async function task(){
//     // console.log(await createNewPost(3,'Sample title1','This is sample post by 3'));
//     // console.log(await createNewPost(4,'Sample title2','This is sample post by 4'));
//     // console.log(await createNewPost(2,'Sample title3','This is sample post by 2'));
//     // console.log(await createNewPost(5,'Sample title4','This is sample post by 5'));
//     // console.log(await createNewPost(1,'Sample title5','This is sample post by 1'));

//     const post = await showAllPost();
//     for(p of post){
//         //console.log(p);
//         console.log(`${p.title}\n${p.body}\nauthor : ${p.user.username}\n ==========\n`)
//     }
// }

//task();

module.exports = {
    createNewPost,
    findAllPost
}