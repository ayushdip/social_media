const {Users} = require('../db/models');
const {genRandomUsername} = require('../utils/username');

async function genUsername(){
    const random_user = await Users.create({
        username : genRandomUsername()
    })
    return random_user;
}
async function getUserByID(id){
    return await Users.findOne({where:{id}});
}
async function getUserByUsername(username){
    return await Users.findOne({where:{username}});
}
module.exports = {genUsername,getUserByID,getUserByUsername};
//Test code
// async function task(){
//     console.log(await genUsername());
//     console.log(await genUsername());
//     console.log(await genUsername());
//     console.log(await genUsername());
//     console.log(await genUsername());
// }

// task();