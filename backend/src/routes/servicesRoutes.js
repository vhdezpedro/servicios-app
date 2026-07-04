import express from "express";
import {
  getServices,
  getServicesbyId,
} from "../controllers/servicesController.js";

const router = express.Router();

router.get("/api/servicios", getServices);
router.get("/api/servicios/:id", getServicesbyId);

export default router;
