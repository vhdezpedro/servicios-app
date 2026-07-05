import express from "express";
import { getAdmin } from "../controllers/adminsController.js";

const router = express.Router();

router.post("/api/admin", getAdmin);

export default router;
