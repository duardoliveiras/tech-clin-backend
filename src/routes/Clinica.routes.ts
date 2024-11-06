import { Router } from "express";

import { ClinicaController } from "../controller/Clinica.controller";

const clinicaRoutes = Router();
const clinicaController = new ClinicaController();

clinicaRoutes.post("/clinica", clinicaController.createClinica);

export { clinicaRoutes };
