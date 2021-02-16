const Router = require('express').Router()
const {Users} = require('../../db/models')
const {genUsername,getUserByID,getUserByUsername} = require('../../controllers/users')
const route = Router;

route.get('/:id',async(req,res)=>{
    let user;
    if(isNaN(parseInt(req.params.id))){
        user = await getUserByUsername(req.params.id);
    }
    else {
        console.log("PaersedInt = ",parseInt(req.params.id));
        user = await getUserByID(parseInt(req.params.id));
    }
    if(user){
        res.status(200).send(user);
    }
    else{
        res.status(404).send({
            error : "No such user id or username"
        })
    }
})
route.post('/',async(req,res)=>{
    const user = await genUsername();
    res.status(201).send(user);
})
module.exports={
    UserRoute : route
}