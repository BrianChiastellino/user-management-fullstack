import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Player } from './player-model';


@Entity('user')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:   number;

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

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updateAt : Date;

    @OneToOne( () => Player )
    @JoinColumn()
    player: Player;

}