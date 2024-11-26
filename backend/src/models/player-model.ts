import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./user-model";

//todo: Agregar calificacion

@Entity('player') 
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ['izquierdo', 'derecho', 'ambidiestro'] })
  foot: string;

  @Column({ type: 'varchar', length: 50 })
  nationality: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'double' })
  height: number;

  @Column({ type: 'double' })
  weight: number;

  @Column({ type: 'enum', length: 50, enum: ['defensor', 'mediocampista', 'delantero', 'arquero'] })
  position: string;

  @Column({ type: 'int', default: 0 })
  matches:  number

  @Column({ type: 'int', default: 0 })
  goals: number;

  @Column({ default: true })
  active: boolean;

  @OneToOne(() => User, (user) => user.player)
  user: User; // Relación OneToOne con User

};
