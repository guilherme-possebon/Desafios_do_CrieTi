import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { Usuario } from "./Usuario";
import { Patinete } from "./Patinete";
import { FormaPagamento } from "./FormaPagamento";

@Entity("locacao")
export class Locacao extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp" })
  data_locacao: Date;

  @Column({ type: "timestamp", nullable: true })
  data_devolucao: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.locacoes, {
    onDelete: "CASCADE",
  })
  usuario: Usuario;

  @ManyToOne(() => Patinete, (patinete) => patinete.locacoes, {
    onDelete: "CASCADE",
  })
  patinete: Patinete;

  @ManyToOne(() => FormaPagamento, (formaPagamento) => formaPagamento.locacoes)
  formaPagamento: FormaPagamento;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  valor_pagamento: number;
}
