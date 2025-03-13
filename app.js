import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './src/routes/user.routes.js';
import cors from 'cors';
import connectDB from './src/config/db.js';


dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    return res.send('Express Server !');
})

app.use('/api/users', userRoutes);

app.listen(PORT,()=>{
    console.log(`I am running on port ${PORT}`);
})