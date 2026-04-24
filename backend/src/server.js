import app from "./app.js";
import { initDB } from "./config/initDB.js";

const start = async () => {
  await initDB();

  app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
  });
};

start();
