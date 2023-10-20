import express from "express";
const router = express.Router();
import * as renderController from './../controllers/render'
import authRouter from './auth'

router.use('/auth', authRouter)
router.use('/render', renderController.renderPdf)
export = router;
