import "dotenv/config";
import createApp from "./src/app.js";
import { testConnection } from "./src/config/db.js";

const app = createApp();
const PORT = process.env.PORT || 3000;

try {
  await testConnection();
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Error al iniciar el servidor: ", error.message);
  process.exit(1);
}
