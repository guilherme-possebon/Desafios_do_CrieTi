import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Locacao } from "./Locacao";

@Entity()
export class FormaPagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  forma_pagamento: string;

  @OneToMany(() => Locacao, (locacao) => locacao.formaPagamento)
  locacoes: Locacao[];
}
