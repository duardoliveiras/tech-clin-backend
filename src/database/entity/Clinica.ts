import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Especialidade } from "./Especialidade";
import { Medico } from "./Medico";

@Entity("clinica")
export class Clinica {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

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

  @Column()
  url: string;

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

  @OneToMany(() => Medico, (medico) => medico.clinica)
  medicos: Medico[];
}
