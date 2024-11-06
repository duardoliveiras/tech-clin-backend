import { Request, Response } from "express";
import { ClinicaDTO } from "../DTO/ClinicaDto";
import { ClinicaService } from "../service/Clinica.service";

export class ClinicaController {
  private clinicaService: ClinicaService;

  constructor(clinicaService = new ClinicaService()) {
    this.clinicaService = clinicaService;
  }

  createClinica = async (req: Request, res: Response) => {
    try {
      const clinicaDto: ClinicaDTO = req.body;
      const clinica = await this.clinicaService.createUser(clinicaDto);
      return res.status(200).json(clinica);
    } catch (err) {
      return res.status(500).json(err);
    }
  };
}
