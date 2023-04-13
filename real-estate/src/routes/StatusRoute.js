import express from "express";
import { getAllStatus } from "../controllers/StatusController.js";

const router = express.Router();

router.get('/statuses/', getAllStatus);

export default router;