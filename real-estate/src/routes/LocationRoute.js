import express from "express";
import { getAllLocation } from "../controllers/LocationController.js";

const router = express.Router();

router.get('/locations/', getAllLocation);

export default router;