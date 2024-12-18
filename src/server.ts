import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { clinicaRoutes } from "./routes/Clinica.routes";
import { especialidadeRoutes } from "./routes/Especialidade.routes";
import { medicoRoutes } from "./routes/Medico.routes";
import { userRoutes } from "./routes/User.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(Number(process.env.PORT), "0.0.0.0", () => {
  console.log(`[server]: running on port ${process.env.PORT}`);
});

app.use(userRoutes);
app.use(clinicaRoutes);
app.use(especialidadeRoutes);
app.use(medicoRoutes);

app.get("/test", (req, res) => {
  return res.send("Application running!");
});
