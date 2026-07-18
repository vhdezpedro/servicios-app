import express from "express";
import {
  createService,
  deleteService,
  getServices,
  getServicesbyId,
  updateService,
} from "../controllers/servicesController.js";

const router = express.Router();

router.get("/", getServices);
router.get("/:id", getServicesbyId);
router.post("/", createService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;
