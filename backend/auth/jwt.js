const jwt = require('jsonwebtoken')

const createToken = async (req,res,next)=>{
    try {
        return await jwt.sign(user,process.env.JWT_SECRET,{expiresIn: 86400})
    } catch (err) {
        return err.message
    }
}
// const verityToken = async () => {
//     try {
//         if (user.token) {
//             return await jwt.verify()
//         }
//         return await jwt.sign(user,process.env.JWT_SECRET)
//     } catch (err) {
//         return err.message
//     }
// }

module.exports = createToken