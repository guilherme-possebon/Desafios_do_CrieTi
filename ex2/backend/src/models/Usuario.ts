import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Locacao } from "./Locacao";
import { Login } from "./Login";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @OneToMany(() => Login, (login) => login.usuario)
  logins: Login[];

  @OneToMany(() => Locacao, (locacao) => locacao.usuario)
  locacoes: Locacao[];
}
