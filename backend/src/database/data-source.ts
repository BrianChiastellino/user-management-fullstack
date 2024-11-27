import { DataSource  } from 'typeorm';
import { Player } from '../models/player-model';
import { User } from '../models/user-model';




export const AppDataSource = new DataSource({

    type:   'mysql',
    host:   process.env.DB_HOST,
    port:   Number(process.env.DB_PORT),
    username:   process.env.DB_USERNAME,
    password:   process.env.DB_PASSWORD,
    database:   process.env.DB_DATABASE,
    synchronize:    true,
    logging:    true,
    entities:   [Player, User],
    subscribers:    [],

});
