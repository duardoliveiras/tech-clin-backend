import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Medico } from "./Medico";

@Entity("users")
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Medico, (medico) => medico.usuario)
  medico: Medico;
}
