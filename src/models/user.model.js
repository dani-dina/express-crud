import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password : {type : String, required : true},
    age: { type: Number, required: false },
    department: { type: String, required: true }
});

userSchema.pre('save',async function (next) {
    if(!this.isModified('password')) return next();

    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
        next();
    }catch(error){
        next(error);
    }
});

userSchema.pre('findOneAndUpdate',async function(next){
    const update = this.getUpdate('password');
    if(!update.password) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        update.password = await bcrypt.hash(update.password,salt);
        this.setUpdate(update);
        next();
    }catch(error){
        next(error);
    }
});

const User = mongoose.model('User', userSchema);
export default User;
