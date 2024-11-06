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
      const clinicaDto: ClinicaDTO = JSON.parse(req.body.data);
      const file: Express.Multer.File = req.file;

      const clinica = await this.clinicaService.createUser(clinicaDto, file);
      return res.status(200).json(clinica);
    } catch (err) {
      return res.status(500).json(err);
    }
  };

  getAllClinicas = async (req: Request, res: Response) => {
    try {
      const clinicas = await this.clinicaService.getAllClinicas();
      res.status(200).json(clinicas);
    } catch (err) {
      res.status(500).json(err);
    }
  };
}
