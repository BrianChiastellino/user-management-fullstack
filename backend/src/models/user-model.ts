import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Player } from './player-model';


@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id:   number;

    @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
    username:   string;

    @Column({ type: 'varchar', length: 50, unique: true, nullable: false})
    email:  string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    password: string;

    @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
    document: string;

    @Column({ default: true })
    active_account: boolean;

    @OneToOne( () => Player )
    @JoinColumn()
    player: Player;

}