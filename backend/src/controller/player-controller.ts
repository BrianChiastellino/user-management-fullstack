import { Request, Response } from "express";
import { Player } from "../models/player-model";



class PlayerController {

    constructor () {}

    async getAll ( req : Request, res : Response ) {
        try {

            const data = await Player.find();

            if ( !data || data.length === 0) 
                throw new Error(`No existen jugadores en el sistema`);

            res.status(200).json( data );

        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        }
    };

    async getByID ( req : Request, res : Response ) {
        try {

        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        }
    };

    async create ( req : Request, res : Response ){
        try {

            const data = await Player.save( req.body );

            if ( !data )
                throw new Error(`Ocurrio un error al crear player`);

            res.status(201).json( data );

        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        };
    };

    async update ( req : Request, res : Response ) {
        try {

        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        }
    };

    async delete ( req : Request, res : Response ) {
        try {

        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        };
    };


}

export default new PlayerController();