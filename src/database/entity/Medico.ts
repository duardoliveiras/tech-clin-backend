import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clinica } from "./Clinica";
import { Especialidade } from "./Especialidade";
import { User } from "./User";

@Entity("medico")
export class Medico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  crm: string;

  @ManyToOne(() => Especialidade, (especialidade) => especialidade.medicos, {
    nullable: false,
  })
  @JoinColumn({ name: "id_especialidade" })
  especialidade: Especialidade;

  @OneToOne(() => User, (user) => user.medico, { nullable: false })
  @JoinColumn({ name: "id_usuario" })
  usuario: User;

  @ManyToOne(() => Clinica, (clinica) => clinica.medicos, { nullable: false })
  @JoinColumn({ name: "id_clinica" })
  clinica: Clinica;
}
