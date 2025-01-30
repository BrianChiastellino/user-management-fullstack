import { NextFunction, Request, Response } from "express";

import authService from "../services/auth.service";
import { User } from '../models/user.model';

import jwt from 'jsonwebtoken';
import { JwtPayloadDTO } from "../dto/jwt-paylaod.dto";
import { UnauthorizedError } from '../errors/unauthorized.error';
import { BadRequestError } from "../errors/bad-request.error";
import { UserRole } from "../enums/user-role.enum";



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
                throw new UnauthorizedError('Invalid username or password')
            }

            // Creamos el jwt
            const token : string = this.createToken({
                subjectId: user!.id,
                role: user!.role
            });

            // Mandamos el token a las cookies
            this.sendCookie('token', token, res );

            res.status(200).json( user );

        } catch ( error ) {
            next( error )
        }
    };

    private createToken = ( payload : JwtPayloadDTO ) : string => {
        return jwt.sign( payload , process.env.JWT_SECRET! , { expiresIn: process.env.JWT_EXPIRES_IN });
    }


    public register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userFromBody: User = User.create({
                ...req.body,
                password: authService.encryptPassword(req.body.password),
            });
    
            // Verificar si el usuario ya existe
            if ( await authService.get(userFromBody.username) )
                throw new BadRequestError('User already exists');

            // Comprobar si no hay usuarios en la base de datos
            if ( !await authService.hasAnyUsers() ) 
                userFromBody.role = UserRole.ADMIN;
    
            // Crear el nuevo usuario
            const user: User = await authService.create(userFromBody);
    
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    };
    
    public checkAuth = async ( req : Request, res : Response, next : NextFunction) => {
        try{
            //Verificamos que exista la token para enviar al front 
            if ( !req.cookies.token ) throw new UnauthorizedError('Cookie not exits');

            res.status(200).json({ authenticated : true });
        } catch( error ) {
            next( error );
        }
    };

    public logout = async ( req : Request, res : Response, next : NextFunction ) => {
        try {
           this.clearCookie('token', res );
           res.status(200).json({ message: 'Logout Successful'})
        } catch( error ) {
            next( error );
        };
    };
   
    private sendCookie = ( name : string, value : string, res : Response ) : void => {
        console.log('Entrando kukardas')
        res.cookie( name, value, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
        });
    };

    private clearCookie = ( name : string, res : Response ) : void => {
        res.clearCookie( name, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
        });
    };
 }

export default new AuthController();