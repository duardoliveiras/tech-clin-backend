import crypto from "crypto";
import { In, Repository } from "typeorm";
import { ClinicaDTO } from "../DTO/ClinicaDto";
import { dataSource } from "../database/DataSource";
import { Clinica } from "../database/entity/Clinica";
import { Especialidade } from "../database/entity/Especialidade";
import MinioService from "./Minio.service";

function generateHash(originalname: string) {
  const current_date =
    Date.now().toString() + Math.random().toString(36).substring(2);
  console.log(current_date);
  return crypto
    .createHash("sha1")
    .update(current_date + originalname)
    .digest("hex")
    .toString()
    .concat(".", originalname.split(".").pop().toLowerCase());
}

export class ClinicaService {
  private clinicaRepository: Repository<Clinica>;
  private especialidadeRepository: Repository<Especialidade>;

  constructor(
    clinicaRepository = dataSource.getRepository(Clinica),
    especialidadeRepository = dataSource.getRepository(Especialidade)
  ) {
    this.clinicaRepository = clinicaRepository;
    this.especialidadeRepository = especialidadeRepository;
  }
  async createUser(clinicaDto: ClinicaDTO, file: Express.Multer.File) {
    try {
      const { especialidadeIds, ...clinicaData } = clinicaDto;

      file.originalname = generateHash(file.originalname);
      clinicaData.url = await MinioService.upload(file, "clinica");

      const especialidades = await this.especialidadeRepository.findBy({
        id: In(especialidadeIds),
      });

      const clinica = this.clinicaRepository.create({
        ...clinicaData,
        especialidades,
      });

      return await this.clinicaRepository.save(clinica);
    } catch (err) {
      throw `${err}`;
    }
  }
}
