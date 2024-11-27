import { Request, Response } from "express";
import { User } from "../models/user-model";



class UserController {

    constructor () {}

    async getAll ( req : Request, res : Response ) {
        try {

            const data = await User.find();

            if ( !data || data.length == 0) 
                throw new Error(`No existen usuarios en el sistema`);

            res.status(200).json( data );
            
        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400);
                console.error(`getAllUsers: ${ error.message }`);
            };
        };
    };

    async getByID ( req : Request, res : Response ) {
        try {

        } catch ( error ) {
            if ( error instanceof Error ){
                console.error(`getUserById: ${ error.message }`);
            };
        };
    };

    async create ( req : Request, res : Response ){
        try {

            const data = await User.save( req.body );

            if ( !data ) 
                throw new Error(`Error al crear un usuario`);

            res.status(201).json( data );

        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ error : `${ error.message }`});
                console.error(`${ error.message }`);
            };
        };
    };

    async update ( req : Request, res : Response ) {
        try {

        } catch ( error ) {
            if ( error instanceof Error ){
                console.error(`update: ${ error.message }`);
            };
        }
    };

    async delete ( req : Request, res : Response ) {
        try {

        } catch ( error ) {
            if ( error instanceof Error ){
                console.error(`getUserById: ${ error.message }`);
            };
        };
    };




}

export default new UserController();