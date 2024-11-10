import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Locacao } from "./Locacao";

@Entity()
export class Patinete {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  funcionando: boolean;

  @Column({ default: false })
  locado: boolean;

  @OneToMany(() => Locacao, (locacao) => locacao.patinete)
  locacoes: Locacao[];
}
