import User from "../models/user.model.js"
import bcrypt from 'bcrypt';
import generateToken from "../utils/jwt.util.js";

const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({ message : "Invalid credentials "})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(401).json({ message : "Invalid credentials !"});
        }
        const token = generateToken(user._id);

        return res.json({
            token,
            user : {id : user._id, email : user.email}
        });
    }catch(error){
        res.status(500).json({
            message : "Internal Server Error !",
            error : error.message
        });
    }
}

export default login;