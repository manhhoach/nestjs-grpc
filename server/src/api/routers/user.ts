import express from "express";
const router = express.Router();
import * as userController from './../controllers/user'


router.post('/register', userController.signUp)

export default router;
