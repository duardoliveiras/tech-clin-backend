import { Repository } from "typeorm";
import { dataSource } from "../database/DataSource";
import { Clinica } from "../database/entity/Clinica";
import { Especialidade } from "../database/entity/Especialidade";
import { Medico } from "../database/entity/Medico";
import { User } from "../database/entity/User";
import { MedicoDTO } from "../DTO/MedicoDto";

export class MedicoService {
  private usuarioRepository: Repository<User>;
  private clinicaRepository: Repository<Clinica>;
  private medicoRepository: Repository<Medico>;
  private especialidadeRepository: Repository<Especialidade>;

  constructor(
    usuarioRepository = dataSource.getRepository(User),
    clinicaRepository = dataSource.getRepository(Clinica),
    medicoRepository = dataSource.getRepository(Medico),
    especialidadeRepository = dataSource.getRepository(Especialidade)
  ) {
    this.usuarioRepository = usuarioRepository;
    this.medicoRepository = medicoRepository;
    this.clinicaRepository = clinicaRepository;
    this.especialidadeRepository = especialidadeRepository;
  }

  async createMedico(medicoDto: MedicoDTO) {
    const { email, crm, clinica, especialidade } = medicoDto;

    const user = await this.usuarioRepository.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw `Usuário não encontrado!`;
    }

    const medicoExistente = await this.medicoRepository.findOne({
      where: { usuario: { id: user.id } },
    });

    console.log(medicoExistente);

    if (medicoExistente !== null) {
      throw `Médico já cadastrado`;
    }

    const _clinica = await this.clinicaRepository.findOne({
      where: {
        id: clinica,
      },
    });
    if (!clinica) {
      throw "Clínica não encontrada.";
    }

    const _especialidade = await this.especialidadeRepository.findOne({
      where: {
        id: especialidade,
      },
    });
    if (!especialidade) {
      throw "Especialidade não encontrada.";
    }

    const novoMedico = this.medicoRepository.create({
      crm,
      usuario: user,
      clinica: _clinica,
      especialidade: _especialidade,
    });

    await this.medicoRepository.save(novoMedico);
  }
}
