import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("especialidade")
export class Especialidade {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  descricao: string;
}
