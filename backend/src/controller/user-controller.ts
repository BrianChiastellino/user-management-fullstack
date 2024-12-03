import { Request, Response } from "express";
import { User } from "../models/user-model";


class UserController {

    constructor () {}

    async getAll ( req: Request, res : Response ) {
        try {

            const data = await User.find();

            if ( !data || data.length == 0) 
                throw new Error(`No existen usuarios en el sistema`);

            res.status(200).json( data );
            
        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        };
    };

    async getByID ( req : Request, res : Response ) {
        try {
            const { id } = req.params;

            const data = await User.findOneBy({ id });

            if ( !data )
                throw new Error(`Player con id ${ id } no se encuntra en sistema`);

            res.status(200).json( data );

        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        };
    };

    async create ( req : Request, res : Response ){
        try {

            const data = await User.save( req.body );

            if ( !data )
                throw new Error(`Ocurrio un error al crear usuario`);

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

            const data = await User.findOneBy({ id });

            if ( !data )
                throw new Error(`Usuario con id ${ id } no se encuntra en sistema`);

            const newData = await User.update({ id }, req.body );

            if ( !newData )
                throw new Error(`Error al actualizar a usuario`);

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

            const data = await User.findOneBy({ id });

            if ( !data )
                throw new Error(`Usuario con id ${ id } no se encuntra en sistema`);

            const newData = await User.delete({ id });

            if ( !newData )
                throw new Error(`Error al eliminar a usuario`);

            res.status(200).json({ msg : `Usuario eliminado!`});

        } catch ( error ) {
            if ( error instanceof Error ){
                res.status(400).json({ msg : `${ error.message }`});
            };
        };
    };




}

export default new UserController();