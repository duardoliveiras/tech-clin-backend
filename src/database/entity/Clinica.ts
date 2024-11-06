import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Especialidade } from "./Especialidade";

@Entity("clinica")
export class Clinica {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  cnpj: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  rua: string;

  @Column()
  cep: string;

  @Column()
  lat: number;

  @Column()
  lon: number;

  @ManyToMany(() => Especialidade, (especialidade) => especialidade.clinicas)
  @JoinTable({
    name: "clinica_especialidade",
    joinColumn: {
      name: "id_clinica",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "id_especialidade",
      referencedColumnName: "id",
    },
  })
  especialidades: Especialidade[];
}
