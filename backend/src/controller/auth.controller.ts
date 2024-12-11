import { Request, Response } from "express";

import authService from "../services/auth.service";
import { User } from '../models/user.model';
import { plainToInstance } from "class-transformer";
import { UserRegisterDTO } from "../dto/user-register.dto";
import { UserLoginDTO } from "../dto/user-login.dto";
import { createToken } from "../utils/jwt.utils";



class AuthController {

    constructor () {}

    public async login ( req : Request, res : Response) {
        try {
            const userBody : User = User.create( req.body );

            if ( !userBody )
                throw new Error(`Usuario y contraseña requeridos`);

            const user = await authService.get( userBody.username );
            
            if ( !user  )
                throw new Error(`Usuario no encontrado`);


            const password = authService.compareEncryptPassword( userBody.password , user!.password);

            if ( !password ) 
                throw new Error(`Contraseña incorrecta`);

            // Creamos el jwt
            const token = createToken({
                subjectId : user.id,
                role : user.role,
            });

            // Mandamos el jwt mediante cookies
            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
            });

            res.status(200).json({ message : 'Login Exitoso', token });

        } catch ( error ) {
            if ( error instanceof Error ) {
                res.status(400).json({ error : error.message });
            } else {
                res.status(500).json({ error : 'Error de servidor'})
            }
        }
    };

    public register = async  ( req : Request, res : Response ) => {
        try {
            const userFromBody : User = User.create({
                ...req.body,
                password: authService.encryptPassword( req.body.password ),
            });

            const existe = authService.get( userFromBody.username );

            if ( !existe )
                throw new Error(`El usuario ya esta registrado en el sistema`);
        
            const user = await authService.create( userFromBody );

            res.status(201).json( user );

        } catch ( error ) {
            if ( error instanceof Error ) {
                res.status(400).json({ error : error.message });
            } else {
                res.status(500).json({ error : 'Error de servidor'})
            }
        }
    }



 }

export default new AuthController();