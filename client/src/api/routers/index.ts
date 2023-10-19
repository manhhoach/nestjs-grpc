import express from "express";
const router = express.Router();
import * as renderController from './../controllers/render'


router.use('/render', renderController.renderPdf)
export = router;
