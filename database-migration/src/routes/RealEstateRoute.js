import express from "express";
import { getRealEstate } from "../controllers/RealEstateController.js";

const router = express.Router();

router.get('/real_estate/', getRealEstate);

export default router;