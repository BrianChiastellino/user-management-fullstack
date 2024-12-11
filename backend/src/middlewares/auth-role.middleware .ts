//todo autenticar rol mediante el req 

import { NextFunction, Request, Response } from "express"
import { UserRole } from "../enums/user-role.enum";
import { JwtPayloadDTO } from "../dto/jwt-paylaod.dto";
import { UnauthorizedError } from "../errors/unauthorized.error";


export const authRole = (...userRoles: UserRole[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
  
      //todo: Arreglar request
      const jwtPayloadDTO : JwtPayloadDTO = (req as any).jwtPayloadDTO;
  
      if (!jwtPayloadDTO || !userRoles.includes(jwtPayloadDTO.role)) {
        throw new UnauthorizedError('Acceso denegado');
      };
  
      next();
    };
  };

