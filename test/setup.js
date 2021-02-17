const {db} = require('../src/db/models');

before(async()=>{
    console.log("Database synced");
    await db.sync();
})