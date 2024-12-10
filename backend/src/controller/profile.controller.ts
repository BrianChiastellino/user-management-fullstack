import { Request, Response } from "express";
import { JwtPayloadDTO } from "../dto/jwt-paylaod.dto";
import { User } from "../models/user.model";

class ProfileController {

    async get  ( req : Request, res : Response ) {
        try{

            const id = req.payload?.subjectId;
            const user = await User.findOneBy({ id });
    
            if ( !user || !id )
                throw new Error(`Usuario con id ${ id } no encontrado`);
    
            res.status(200).json( user );
        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        }
    };

    update ( req : Request, res : Response ) {
        const { payload } = req;
        res.status(200).json({ payload });
    };

    delete ( req : Request, res : Response ) {
        const { payload } = req;
        res.status(200).json({ payload });
    };

}


export default new ProfileController();