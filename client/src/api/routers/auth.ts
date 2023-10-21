import express from "express";
const router = express.Router();
import * as authController from '../controllers/auth'

router.get('/', authController.getAll)
router.post('/register', authController.register)
router.post('/login', authController.login)

export default router;
