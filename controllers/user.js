const User = require('../models/user');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        if (!fullname) {
            return res.status(400).json({ error: true, msg: "Fullname is required" });
        }

        if (!email) {
            return res.status(400).json({ error: true, msg: "Email is required" });
        }

        if (!password) {
            return res.status(400).json({ error: true, msg: "Password is required" });
        }

        const isUser = await User.findOne({ email });

        if (isUser) {
            return res.json({ error: true, msg: "User already exists" });
        }

        const user = new User({
            fullName: fullname,
            email: email,
            password: password,
        });
        await user.save();

        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1d', // Token expires in 1 day
        });

        return res.json({ error: false, user, accessToken, msg: "Registration Successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, msg: "Internal Server Error" });
    }
};

const loginUser = async (req, res) => {
      const {email, password} = req.body;

      if(!email){
         return res.status(400).json({msg:"Email is required"})
      }

      if(!password){
        return res.status(400).json({msg:"Password is required"})
      }

      const userInfo = await User.findOne({email});

      if(!userInfo){
        return res.status(400).json({msg:"User not found"})
      }

      if(userInfo.email === email && userInfo.password == password){
        const user = {
            user:userInfo
        }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn:"36000m",
        });

        return res.status(200).json({
            error:false, 
            msg:"Login Successfully",
            accessToken
            })

      }else{
        return res.status(400).json({
            error:true,
            msg:"Invalid Credentials",
        });
      }
}

module.exports = {
    createUser,
    loginUser,
};
