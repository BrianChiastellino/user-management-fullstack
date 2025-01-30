import { User } from "../models/user.model";




class AdminService {

    async getAll () : Promise<User[]> {
        return await User.find();
    }

}

export default new AdminService();