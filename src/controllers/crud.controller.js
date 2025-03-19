import HTTP_STATUS from '../constants/index.js';
import User from '../models/user.model.js';


const findUser = async (email) => {
    return await User.findOne({ email }); 
};

// Get all users 
const getAllUsers = async (req, res) => {
    try {
        const getUsers = await User.find();
        return res.status(HTTP_STATUS.OK).json(getUsers);
    } catch (error) {
        console.error("🔥 Get All Users Error:", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

// Get user by ID 
const getUsersById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "User Not Found!" });
        }
        return res.status(HTTP_STATUS.OK).json(user);
    } catch (error) {
        console.error("🔥 Get User By ID Error:", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

// Add a new user
const addNewUser = async (req, res) => {
    try {
        const {name, email,password, age, department } = req.body;

        if (!name || !email || !password || !department) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Missing required fields!" });
        }

        const existingUser = await findUser(email);
        if (existingUser) {
            return res.status(HTTP_STATUS.CONFLICT).json({ message: "User Already Exists" });
        }

        const newUser = new User({ name, email,password, age, department });
        await newUser.save();
        
        return res.status(HTTP_STATUS.CREATED).json({ message: "A new user successfully added!", user: newUser });
    } catch (error) {
        console.error("🔥 Add New User Error:", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error!", error: error.message });
    }
};

// Update user by ID 
const updateUserById = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateUser) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "User Not Found!" });
        }
        return res.status(HTTP_STATUS.OK).json({ message: "Successfully updated!", user: updateUser });
    } catch (error) {
        console.error("🔥 Update User Error:", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if (!deleteUser) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "User Not Found!" });
        }
        return res.status(HTTP_STATUS.OK).json({ message: "Successfully Deleted!" });
    } catch (error) {
        console.error("🔥 Delete User Error:", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error!" });
    }
};


export default {
    getAllUsers,
    getUsersById,
    addNewUser,
    updateUserById,
    deleteUserById
};
