import { Request, Response } from "express";
import { Player } from "../models/player-model";



class PlayerController {

    constructor () {}

    async getAll (req: Request, res : Response ) {
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
            const { id } = req.params;

            const data = await Player.findOneBy({ id });

            if ( !data )
                throw new Error(`Player con id ${ id } no se encuntra en sistema`);

            res.status(200).json( data );

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

            const { id } = req.params;

            const data = await Player.findOneBy({ id });

            if ( !data )
                throw new Error(`Player con id ${ id } no se encuntra en sistema`);

            const newData = await Player.update({ id }, req.body );

            if ( !newData )
                throw new Error(`Error al actualizar a player`);

            res.status(200).json( newData );

        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        }
    };

    async delete ( req : Request, res : Response ) {
        try {
            const { id } = req.params;

            const data = await Player.findOneBy({ id });

            if ( !data )
                throw new Error(`Player con id ${ id } no se encuntra en sistema`);

            const newData = await Player.delete({ id });

            if ( !newData )
                throw new Error(`Error al eliminar a player`);

            res.status(200).json({ msg : `Player eliminado!`});

        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        };
    };


}

export default new PlayerController();