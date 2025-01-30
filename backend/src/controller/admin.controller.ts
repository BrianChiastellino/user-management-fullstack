import { NextFunction, Request, Response } from "express";
import adminService from "../services/admin.service";
import { BadRequestError } from "../errors/bad-request.error";
import { User } from "../models/user.model";


class AdminController {

    async getAll ( req : Request, res : Response, next : NextFunction ){
        try {
            const users : User[] = await adminService.getAll();

            if ( users.length <= 0 ) {
                throw new BadRequestError(`No existen usuarios en el sistema`);
            };

            res.status(200).json( users );
            
        } catch ( error ) {
            next( error );
        }
    }

}


export default new AdminController();