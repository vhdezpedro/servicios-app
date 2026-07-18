import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import { fileURLToPath } from "url";
import "./config/env.js";

import { db, connectDB, disconnectDB } from "./config/db.js";

// Import routes
import servicesRoutes from "./routes/servicesRoutes.js";
import adminRoutes from "./routes/adminsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { addAbortListener } from "events";

//! Variables for paths are declared here when type: Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const myPath = path.join(__dirname, "..", path.sep, "..", "public");

console.log(myPath);

connectDB();

const app = express();

// Middlewares
app.use(
  cors({
    origin: ["http://127.0.0.1:5501"],
  }),
);
app.use(express.json());
app.use(express.static(myPath));

// HTML Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(myPath, "index.html"));
});
app.get("/registro", (req, res) => {
  res.sendFile(path.join(myPath, "registro.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(myPath, "login.html"));
});
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(myPath, "dashboard.html"));
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/servicios", servicesRoutes);
app.use("/api/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (error) => {
  console.error("Unhandled promise rejection:", error);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (error) => {
  console.error("Uncaught exception:", error);
  await disconnectDB();
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM signal received. Closing server...");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});
