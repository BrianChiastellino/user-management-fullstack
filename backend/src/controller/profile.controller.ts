import { Request, Response } from "express";
import { User } from "../models/user.model";
import profileService from "../services/profile.service";

class ProfileController {

    async get  ( req : Request, res : Response ) {
        try{
            const id = req.payload?.subjectId;
            const user = await profileService.get( id! );
    
            if ( !user || !id )
                throw new Error(`Usuario con id ${ id } no encontrado`);

            res.status(200).json( user );
        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        }
    };

    async update ( req : Request, res : Response ) {
        try {
            const id = req.payload?.subjectId;
            const updateResult = await profileService.update(id! , req.body);

            if ( !id || !updateResult ) 
                throw new Error(`Usuario con id ${ id } no existe`);

            res.status(200).json( updateResult );

        } catch ( error ) {
            if ( error instanceof Error ) {
                res.status(400).json({ msg : `${ error.message }`});
            };
        }

    };

    async delete ( req : Request, res : Response ) {
        try {
            const id = req.payload?.subjectId;
            const deleteResult = await profileService.delete( id! );
    
            if ( !id || !deleteResult )
                throw new Error(`Usuario con id ${ id } no existe`);
    
            res.status(200).json( deleteResult );
            
        } catch ( error ) {
            if ( error instanceof Error ) {
                res.status(400).json({ msg : `${ error.message }`});
            };
        }
    };

}


export default new ProfileController();