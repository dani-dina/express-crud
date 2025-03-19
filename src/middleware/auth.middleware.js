import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';

const protectRoute = async(req,res,next)=>{
    try{
        const token = req.headers.authorization?.split(' ')[1];

        if(!token){
            return res.status(401).json({ message : "Auth required !"})
        }

        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decode.id).select('-password');

        next();
    }catch(error){
        return res.status(401).json({
            message : "Invalid Token !"
        });
    }
}

export default protectRoute;