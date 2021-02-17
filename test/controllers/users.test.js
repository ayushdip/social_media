const {genUsername,getUserByID,getUserByUsername} = require('../../src/controllers/users')
const {expect} = require('chai')

describe('controllers/users',async()=>{
    let createdUser = null;
    it('should create annonymus users',async()=>{
        createdUser  = await genUsername();
        expect(createdUser).to.have.property('username')
        expect(createdUser.id).to.be.a('number')
    })
    it('should get user by userID',async()=>{
        let foundUser = await getUserByID(createdUser.id)
        expect(foundUser.username).to.equal(createdUser.username);
    })
    it('should get user by userID',async()=>{
        let foundUser = await getUserByUsername(createdUser.username)
        expect(foundUser.id).to.equal(createdUser.id);
    })
})