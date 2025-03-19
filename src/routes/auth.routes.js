import login from "../auth/login.auth.js";
import express from 'express';

const router = express.Router();

router.post('/',login);

export default router;