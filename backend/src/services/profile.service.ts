import { User } from "../models/user.model";
import { DeleteResult, UpdateResult } from "typeorm";



class ProfileService {

    async getAll ( ) : Promise<User[] | null > {
        return await User.find();
    }

    async get ( id : string ) : Promise<User | null> {
        return await User.findOneBy({ id });
    };

    async update ( id : string, user : User ) : Promise<UpdateResult> {
        return await User.update({ id }, user )
    };

    async delete ( id : string ) : Promise< DeleteResult> {
        return await User.delete({ id })
    };
}

export default new ProfileService();