import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "./Usuario";

@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.logins, {
    onDelete: "CASCADE",
  })
  usuario: Usuario;

  @Column()
  senha: string;

  @Column({ default: false })
  admin: boolean;
}
