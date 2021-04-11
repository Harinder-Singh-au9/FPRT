const User = require("../models/userModel");
const createToken = require("../auth/jwt");
const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      res.send({ loginStatus: false, err: "Incorrect Email ID" });
    } else {
      let pwdStatus = await user.verifyPassword(password, user.password);
      if (!pwdStatus) {
        res.send({
          loginStatus: false,
          email: user.email,
          err: "Invalid Password",
        });
      } else {
        res.send({
          loginStatus: true,
          msg: "Login Success",
        });
      }
    }
  } catch (err) {
    res.send(err.message);
  }
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      res.send({ error: "User is Already Registered" });
    } else {
      user = new User({
        name,
        email,
        password,
      });
      let token = await createToken({
        email: user.email,
        password: user.password,
      });
      await user.save();
      res.send({ user: userinfo, token: token });
    }
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = { signin, signup };
