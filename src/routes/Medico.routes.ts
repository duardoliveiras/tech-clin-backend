import { Router } from "express";

import { MedicoController } from "../controller/Medico.controller";

const medicoRoutes = Router();
const medicoController = new MedicoController();

medicoRoutes.post("/medico", medicoController.createMedico);

export { medicoRoutes };
