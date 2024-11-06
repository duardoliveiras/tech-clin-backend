import { Repository } from "typeorm";
import { ClinicaDTO } from "../DTO/ClinicaDto";
import { dataSource } from "../database/DataSource";
import { Clinica } from "../database/entity/Clinica";

export class ClinicaService {
  private clinicaRepository: Repository<Clinica>;

  constructor(clinicaRepository = dataSource.getRepository(Clinica)) {
    this.clinicaRepository = clinicaRepository;
  }
  async createUser(clinicaDto: ClinicaDTO) {
    const clinica = this.clinicaRepository.create(clinicaDto);

    try {
      return await this.clinicaRepository.save(clinica);
    } catch (err) {
      throw `${err}`;
    }
  }
}
