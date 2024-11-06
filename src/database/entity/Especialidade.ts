import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clinica } from "./Clinica";
import { Medico } from "./Medico";

@Entity("especialidade")
export class Especialidade {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  descricao: string;

  @ManyToMany(() => Clinica, (clinica) => clinica.especialidades)
  clinicas: Clinica[];

  @OneToMany(() => Medico, (medico) => medico.especialidade)
  medicos: Medico[];
}
