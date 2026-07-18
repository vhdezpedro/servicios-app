import express from "express";
import { getAdmin } from "../controllers/adminsController.js";

const router = express.Router();

router.post("/", getAdmin);

export default router;
