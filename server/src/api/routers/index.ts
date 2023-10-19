import express from "express";
const router = express.Router();
import * as renderController from './../controllers/render'
import userRouter from './user'

router.use('/users', userRouter)
router.use('/render', renderController.renderPdf)
export = router;
