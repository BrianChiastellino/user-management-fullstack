//todo autenticar rol mediante el req 

import { NextFunction, Request, Response } from "express"
import { UserRole } from "../enums/user-role.enum";

export const authRole = ( ...userRoles : UserRole[] ) => {
    return ( req : Request, res : Response, next : NextFunction ) : void => {
        if ( !userRoles.includes( req.jwtPayloadDTO.role )) {
            res.status(403).json({ 
                message : 'Acceso denegado',
                roles   :   ` ${ userRoles.join(", ")} `,
                currentRole : req.jwtPayloadDTO.role
             });
            return;
        }

        next();
    }
};



