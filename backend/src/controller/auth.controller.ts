import { NextFunction, Request, Response } from "express";

import authService from "../services/auth.service";
import { User } from '../models/user.model';

import jwt from 'jsonwebtoken';
import { JwtPayloadDTO } from "../dto/jwt-paylaod.dto";
import { UnauthorizedError } from "../errors/unauthorized.error";
import { BadRequestError } from "../errors/bad-request.error";



class AuthController {

    constructor () {}

    public login = async ( req : Request, res : Response, next : NextFunction ) => {
        try {
            const userFromBody : User = User.create( req.body );
            // console.log({ userFromBody });

            if ( !userFromBody )
                throw new BadRequestError('Solicitud erronea');

            const user = await authService.get( userFromBody.username );
            // console.log({ user });

            if ( !user || !authService.compareEncryptPassword( userFromBody.password , user!.password) ){
                throw new UnauthorizedError('Credenciales incorrectas')
            }

            // Creamos el jwt
            const token : string = this.createToken({
                subjectId: user!.id,
                role: user!.role
            });

            // Mandamos el token a las cookies
            this.sendCookie('token', token, res );

            res.status(200).json({ message : 'Login Exitoso', token });

        } catch ( error ) {
            next( error )
        }
    };

    private createToken = ( payload : JwtPayloadDTO ) : string => {
        return jwt.sign( payload , process.env.JWT_SECRET! , { expiresIn: process.env.JWT_EXPIRES_IN });
    }


    public register = async  ( req : Request, res : Response, next: NextFunction ) => {
        try {
            const userFromBody : User = User.create({
                ...req.body,
                password: authService.encryptPassword( req.body.password ),
            });
            // console.log({ userFromBody });

            const userExist : User | null = await authService.get( userFromBody.username );
            console.log({ userExist });

            if ( userExist )
                throw new BadRequestError( 'El usuario ya está registrado' );
        
            const user : User = await authService.create( userFromBody );

            res.status(201).json( user );

        } catch ( error ) {
            next( error );
        };
    }

    // private createToken ( payload : JwtPayloadDTO ) : string {
    //     return jwt.sign( payload , process.env.JWT_SECRET! , { expiresIn: process.env.JWT_EXPIRES_IN });
    // }

   
    private sendCookie = ( name : string, value : string, res : Response ) : void => {
        console.log('Entrando kukardas')
        res.cookie( name, value, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
        });
    } 

    // private sendCookie ( name : string, value : string , res : Response ) : void {
    //     res.cookie( name, value, {
    //         httpOnly: true,
    //         secure: false,
    //         sameSite: 'lax'
    //     });
    // };



 }

export default new AuthController();