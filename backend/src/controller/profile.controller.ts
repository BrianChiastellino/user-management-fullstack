import { Request, Response } from "express";
import { JwtPayloadDTO } from "../dto/jwt-paylaod.dto";
import { User } from "../models/user.model";
import profileService from "../services/profile.service";

class ProfileController {

    async get  ( req : Request, res : Response ) {
        try{
            const id = req.payload?.subjectId;
            const user = await profileService.get( id! );
    
            if ( !user || !id )
                throw new Error(`Usuario con id ${ id } no encontrado`);

            res.status(200).json({ msg : 'Get', user });
        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        }
    };

    update ( req : Request, res : Response ) {
        try {
            const id = req.payload?.subjectId;
            const updateResult = profileService.update(id! , req.body);

            if ( !id || !updateResult ) 
                return new Error(`Usuario con id ${ id } no existe`);

            res.status(200).json({ msg : 'Update', updateResult });

        } catch ( error ) {
            if ( error instanceof Error ) {
                res.status(400).json({ msg : `${ error.message }`});
            };
        }

    };

    delete ( req : Request, res : Response ) {
        try {
            const id = req.payload?.subjectId;
            const deleteResult = profileService.delete( id! );
    
            if ( !id || !deleteResult )
                return new Error(`Usuario con id ${ id } no existe`);
    
            res.status(200).json({ msg : 'Delete', deleteResult });
            
        } catch ( error ) {
            if ( error instanceof Error ) {
                res.status(400).json({ msg : `${ error.message }`});
            };
        }
    };

}


export default new ProfileController();