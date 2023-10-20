import express from "express";
const router = express.Router();
import * as authController from '../controllers/auth'


router.post('/register', authController.signUp)
router.post('/login', authController.signIn)

export default router;
