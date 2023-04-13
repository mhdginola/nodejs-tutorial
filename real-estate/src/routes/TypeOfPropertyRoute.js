import express from "express";
import { getAllTypeOfProperty } from "../controllers/TypeOfPropertyController.js";

const router = express.Router();

router.get('/type_of_properties/', getAllTypeOfProperty);

export default router;