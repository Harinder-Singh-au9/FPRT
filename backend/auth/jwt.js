const jwt = require('jsonwebtoken')

const createToken = async (user)=>{
    try {
        return await jwt.sign(user,process.env.JWT_SECRET)
    } catch (err) {
        return err.message
    }
}

module.exports = createToken