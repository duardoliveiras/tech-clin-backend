import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Clinica } from "./Clinica";

@Entity("especialidade")
export class Especialidade {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  descricao: string;

  @ManyToMany(() => Clinica, (clinica) => clinica.especialidades)
  clinicas: Clinica[];
}
