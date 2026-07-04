import express from "express";
import {
  createService,
  deleteService,
  getServices,
  getServicesbyId,
  updateService,
} from "../controllers/servicesController.js";

const router = express.Router();

router.get("/api/servicios", getServices);
router.get("/api/servicios/:id", getServicesbyId);
router.post("/api/servicios/", createService);
router.put("/api/servicios/:id", updateService);
router.delete("/api/servicios/:id", deleteService);

export default router;
