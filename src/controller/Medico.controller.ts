import { Request, Response } from "express";
import { MedicoDTO } from "../DTO/MedicoDto";
import { MedicoService } from "../service/Medico.service";

export class MedicoController {
  private medicoService: MedicoService;
  constructor(medicoService = new MedicoService()) {
    this.medicoService = medicoService;
  }

  createMedico = async (req: Request, res: Response) => {
    try {
      const medicoDto: MedicoDTO = req.body;
      const medico = await this.medicoService.createMedico(medicoDto);
      return res.status(200).json(medico);
    } catch (err) {
      res.status(500).json(err);
    }
  };
}
