import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const connectDB = async(req,res)=>{
    try{
        const db = mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected with db');

        return db;
    }catch(error)
    {
        return res.status(500).json({ message : "Internal Server Error !"});
    }
}

export default connectDB;