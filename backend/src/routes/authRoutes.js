import express from "express";
import {
  adminRegistration,
  login,
  logout,
  register,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/registro", register);
router.post("/crear-usuario", adminRegistration);
router.post("/login", login);
router.post("/logout", logout);

export default router;
