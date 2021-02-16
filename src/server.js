const {db} = require('./db/models');
const express = require('express');
const app = express();
const {UserRoute} = require('./routes/users');
const {PostRoute} = require('./routes/posts')
app.use('/api/users',UserRoute);
app.use('/api/posts',PostRoute);
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(__dirname+'/public'));
db.sync({alter:true})
    .then(()=>{
        app.listen(4444,()=>{
            console.log("Server started");
        })
    })
    .catch((err)=>{
        console.error(new Error("Could sync database"));
        console.error(err);
    })