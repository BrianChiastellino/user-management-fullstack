import { Entity, PrimaryGeneratedColumn, Column, OneToOne, BaseEntity, CreateDateColumn, UpdateDateColumn, JoinColumn, BeforeInsert } from "typeorm";
import { User } from "./user-model";

import { v4 as uuidv4 } from 'uuid';

//todo: Agregar calificacion

@Entity('player') 
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column({ type: 'float', nullable: true })
  lat : number;

  @Column({ type: 'float', nullable: true })
  long  : number;

  @CreateDateColumn()
  createdAt : Date;

  @UpdateDateColumn()
  updateAt : Date;

  @BeforeInsert()
  generateUuid() {
    this.id = uuidv4();
  }

  @OneToOne(() => User, user => user.player)
  @JoinColumn({ name : 'user_id'})
  user_id: number; 

};
