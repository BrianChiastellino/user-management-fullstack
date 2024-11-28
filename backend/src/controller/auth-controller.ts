import { Request, Response } from "express";

import bcrypt from 'bcryptjs';



class AuthController {

    constructor () {}

    public async login ( req : Request, res : Response) {

        const { username, password } = req.body;

    
    }

    public register = async  ( req : Request, res : Response ) => {
        try {
            const { password } = req.body;

            console.log({ password });

            //todo Validar que no exista el usuario en db;

            const pw = this.encryptPassword( password );



        } catch ( error ) {
            if ( error instanceof Error ) {
                res.status(400).json({ error : error.message });
            }
        }
    }

    private encryptPassword ( password : string ) : string {
        return bcrypt.hashSync( password, 10);
    }

    private  compareEncryptPassword ( password : string ,hashPassword : string ) : boolean {
       return bcrypt.compareSync( password, hashPassword );
    };

 }

export default new AuthController();