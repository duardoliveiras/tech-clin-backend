import { Request, Response } from "express";
import { EspecialidadeService } from "../service/Especialidade.service";

export class EspecialidadeController {
  private especialidadeService: EspecialidadeService;

  constructor(especialidadeService = new EspecialidadeService()) {
    this.especialidadeService = especialidadeService;
  }

  getAllEspecialidades = async (req: Request, res: Response) => {
    try {
      const especialidades =
        await this.especialidadeService.getAllEspecialidades();
      return res.status(200).json(especialidades);
    } catch (err) {
      return res.status(500).json(err);
    }
  };
}
