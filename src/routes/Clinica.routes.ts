import { Router } from "express";
import multer from "multer";

import { ClinicaController } from "../controller/Clinica.controller";

const clinicaRoutes = Router();
const clinicaController = new ClinicaController();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

clinicaRoutes.post(
  "/clinica",
  upload.single("file"),
  clinicaController.createClinica
);

export { clinicaRoutes };
