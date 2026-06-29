import express from "express";
import { getServices } from "../controllers/servicesController.js";

const router = express.Router();

router.get("/api/servicios", getServices);

export default router;
