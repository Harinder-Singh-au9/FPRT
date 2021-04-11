const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;
let userSchema = new Schema({
   name:{
      type: String,
      required: true
   },
   email: {
      type: String,
       required: true,
      unique:true
   },
   password: {
      type: String,
      required: true
    },
    forms: {
        type: [Object],
        
   }
},{
   timestamps: true,
})

userSchema.pre('save', async function save(next) {
   if (!this.isModified('password')) return next();
   try {
     const salt = await bcrypt.genSalt(10);
     this.password = await bcrypt.hash(this.password, salt);
     return next();
   } catch (err) {
     return next(err);
   }
});
 
userSchema.methods.verifyPassword = (passwordEntered,userPassword) => {
   return bcrypt.compare(passwordEntered,userPassword)
}

module.exports = mongoose.model('User', userSchema);