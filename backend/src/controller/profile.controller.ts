import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import profileService from "../services/profile.service";
import { BadRequestError } from "../errors/bad-request.error";

class ProfileController {

    async get  ( req : Request, res : Response, next : NextFunction ) {
        try{
            const { id } = req.params;
            
            const user = await profileService.get( id! );
            console.log({ userToGet : user });
    
            if ( !user || !id )
                throw new BadRequestError(`Usuario con id ${ id } no encontrado`);

            res.status(200).json( user );
        } catch ( error ) {
            next( error )
        }
    };

    async update ( req : Request, res : Response, next : NextFunction ) {
        try {
            const { id } = req.params;

            const user = await profileService.get( id );
            console.log({ userToUpdate : user })

            if( !user ) 
                throw new BadRequestError(`Usuario con id ${ id } no encontrado`);

            const data = await profileService.update( id!, req.body)
            console.log({ dataUpdated : data })

            const updatedUser = await profileService.get( id! );

            res.status(200).json( updatedUser );

        } catch ( error ) {
            next( error )
        }

    };

    async delete ( req : Request, res : Response, next : NextFunction ) {
        try {
            const { id } = req.params;

            const user = await profileService.get( id );
            console.log({ userToDelete : user });

            if( !user ) 
                throw new BadRequestError(`Usuario con id ${ id } no encontrado`);

            await profileService.delete( id! );

            res.status(200).json( true );
            
        } catch ( error ) {
            next( error )
        }
    };
}


export default new ProfileController();