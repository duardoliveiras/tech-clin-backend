import { Repository } from "typeorm";
import { dataSource } from "../database/DataSource";
import { Especialidade } from "../database/entity/Especialidade";

export class EspecialidadeService {
  private especialidadeRepository: Repository<Especialidade>;

  constructor(
    especialidadeRepository = dataSource.getRepository(Especialidade)
  ) {
    this.especialidadeRepository = especialidadeRepository;
  }

  async getAllEspecialidades() {
    try {
      const especialidades = this.especialidadeRepository.find();
      return especialidades;
    } catch (err) {
      throw `${err}`;
    }
  }
}
