import bcrypt from 'bcryptjs';
import { User } from '../models/user.model';


class AuthService {

 
    

//todo: agregar documento
    public async get ( identifier : string ) : Promise<User | null> {
        return await User.findOne({ where: [ { username : identifier }, { email: identifier}  ]});
    };

    async create ( user : User ) : Promise<User> {
        return await User.save( user );
    };

    async update ( id : string, user : User ) : Promise<any> {
        
    }

    async delete ( id : string ) : Promise<any> {

    }

    public async hasAnyUsers(): Promise<boolean> {
        const userCount = await User.count();
        return userCount > 0;
    }

    public encryptPassword ( password : string ) : string {
        return bcrypt.hashSync( password, 10);
    }

    public compareEncryptPassword ( password : string ,hashPassword : string ) : boolean {
       return bcrypt.compareSync( password, hashPassword );
    };

    





}

export default new AuthService();

