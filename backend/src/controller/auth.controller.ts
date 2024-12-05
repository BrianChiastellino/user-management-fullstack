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
            const userLoginDTO = plainToInstance( UserLoginDTO, req.body );

            console.log({ userLoginDTO });

            if ( !userLoginDTO )
                throw new Error(`Usuario y contraseña requeridos`);

            const user = await authService.get( userLoginDTO.username );
    
            if ( !user  )
                throw new Error(`Usuario no encontrado`);

            const pw = authService.compareEncryptPassword( userLoginDTO.password , user!.password);

            if ( !pw ) 
                throw new Error(`Contraseña incorrecta`);
    
            const token = createToken({
                subjectId : user.id,
                role : user.role,
            });

            res.status(200).json({ message : 'Login Exitoso', token })

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
            const registerDTO = plainToInstance( UserRegisterDTO, req.body );

            const existe = authService.get( registerDTO.username );

            if ( !existe )
                throw new Error(`El usuario ya esta registrado en el sistema`);

            const user : User = User.create({
                ...registerDTO,
                password : authService.encryptPassword( registerDTO.password )
            });
        
            const dbUser = await authService.create( user );

            res.status(201).json( dbUser );

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