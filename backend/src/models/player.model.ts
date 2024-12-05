import { Entity, PrimaryGeneratedColumn, Column, OneToOne, BaseEntity, CreateDateColumn, UpdateDateColumn, JoinColumn, BeforeInsert } from "typeorm";
import { User } from "./user.model";

import { v4 as uuidv4 } from 'uuid';
import { PositionPlayer } from "../enums/player-position.enum";
import { FootPlayer } from "../enums/player-foot.enum";

//todo: Agregar calificacion

@Entity('player') 
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: FootPlayer, nullable: true })
  foot: string;

  @Column({ type: 'varchar', nullable: true })
  nationality: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column({ type: 'double', nullable: true })
  height: number;

  @Column({ type: 'double', nullable: true })
  weight: number;

  @Column({ type: 'enum', enum: PositionPlayer })
  position: string;

  @Column({ type: 'int', default: 0, nullable: true })
  matches:  number

  @Column({ type: 'int', default: 0, nullable: true })
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
