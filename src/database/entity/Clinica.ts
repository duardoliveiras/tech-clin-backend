import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

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
}
