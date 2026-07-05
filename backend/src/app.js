import express from "express";
import jsonMiddleware from "./middleware/jsonMiddleware.js";
import servicesRoutes from "./routes/servicesRoutes.js";
import adminsRoutes from "./routes/adminsRoutes.js";
import cors from "cors";

const createApp = () => {
  const app = express();
  app.use(cors());
  app.use(jsonMiddleware);
  app.use("/", servicesRoutes);
  app.use("/", adminsRoutes);

  return app;
};

export default createApp;
