import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Player } from './player-model';

import { v4 as uuidv4 } from 'uuid';


@Entity('user')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id:   string;

    @Column({ type: 'varchar', unique: true, nullable: false })
    username:   string;

    @Column({ type: 'varchar', unique: true, nullable: false})
    email:  string;

    @Column({ type: 'varchar', nullable: false })
    password: string;

    @Column({ type: 'varchar', unique: true, nullable: false })
    document: string;

    @Column({ default: true })
    active_account: boolean;

    @Column({ default: false })
    admin: boolean;

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updateAt : Date;

    @BeforeInsert()
    generateUuid () {
        this.id = uuidv4();
    };

    @OneToOne( () => Player, player => player.user_id )
    player: Player;

}