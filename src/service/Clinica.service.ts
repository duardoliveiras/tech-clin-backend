import { In, Repository } from "typeorm";
import { ClinicaDTO } from "../DTO/ClinicaDto";
import { dataSource } from "../database/DataSource";
import { Clinica } from "../database/entity/Clinica";
import { Especialidade } from "../database/entity/Especialidade";

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
  async createUser(clinicaDto: ClinicaDTO) {
    const { especialidadeIds, ...clinicaData } = clinicaDto;

    const especialidades = await this.especialidadeRepository.findBy({
      id: In(especialidadeIds),
    });

    const clinica = this.clinicaRepository.create({
      ...clinicaData,
      especialidades,
    });

    try {
      return await this.clinicaRepository.save(clinica);
    } catch (err) {
      throw `${err}`;
    }
  }
}
