import express from 'express';
import crudController from '../controllers/crud.controller.js';
import protectRoute from '../middleware/auth.middleware.js';

const { getAllUsers, getUsersById, addNewUser, updateUserById, deleteUserById } = crudController;


const router = express.Router();

router.get('/',protectRoute,getAllUsers);
router.get('/:id',protectRoute,getUsersById);
router.post('/',protectRoute,addNewUser);
router.put('/:id',protectRoute,updateUserById);
router.delete('/:id',protectRoute,deleteUserById);

export default router;