import express from 'express';
import crudController from '../controllers/crud.controller.js';

const { getAllUsers, getUsersById, addNewUser, updateUserById, deleteUserById } = crudController;


const router = express.Router();

router.get('/',getAllUsers);
router.get('/:id',getUsersById);
router.post('/',addNewUser);
router.put('/:id',updateUserById);
router.delete('/:id',deleteUserById);

export default router;