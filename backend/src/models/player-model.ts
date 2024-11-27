import { Entity, PrimaryGeneratedColumn, Column, OneToOne, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user-model";

//todo: Agregar calificacion

@Entity('player') 
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ['izquierdo', 'derecho', 'ambidiestro'] })
  foot: string;

  @Column({ type: 'varchar' })
  nationality: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'double' })
  height: number;

  @Column({ type: 'double' })
  weight: number;

  @Column({ type: 'enum', enum: ['defensor', 'mediocampista', 'delantero', 'arquero'] })
  position: string;

  @Column({ type: 'int', default: 0 })
  matches:  number

  @Column({ type: 'int', default: 0 })
  goals: number;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt : Date;

  @UpdateDateColumn()
  updateAt : Date;

  @OneToOne(() => User, (user) => user.player)
  user: User; // Relación OneToOne con User

};
