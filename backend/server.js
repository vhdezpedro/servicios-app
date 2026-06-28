import "dotenv/config";
import express from "express";
import cors from "cors";
import servicesRoutes from "./routes/servicesRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Servidor funcionando...");
});

app.use("/api/servicios", servicesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
