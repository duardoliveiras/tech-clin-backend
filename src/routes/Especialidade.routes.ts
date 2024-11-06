import { Router } from "express";

import { EspecialidadeController } from "../controller/Especialidade.controller";

const especialidadeRoutes = Router();
const especialidadeController = new EspecialidadeController();

especialidadeRoutes.get(
  "/especialidades",
  especialidadeController.getAllEspecialidades
);

export { especialidadeRoutes };
