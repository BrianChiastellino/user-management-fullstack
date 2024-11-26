import { Request, Response } from "express";



class UserController {

    constructor () {}

    async getAll ( req : Request, res : Response ) {
        try {

            // const data = await 
            console.log('getAllUsers');

        } catch ( error ) {
            if ( error instanceof Error ){
                console.error(`getAllUsers: ${ error.message }`);
            };
        };
    };

    async getByID ( req : Request, res : Response ) {
        try {

        } catch ( error ) {
            if ( error instanceof Error ){
                console.error(`getUserById: ${ error.message }`);
            };
        };
    };

    async create ( req : Request, res : Response ){
        try {

        } catch ( error ) {
            if ( error instanceof Error ){
                console.error(`create: ${ error.message }`);
            };
        };
    };

    async update ( req : Request, res : Response ) {
        try {

        } catch ( error ) {
            if ( error instanceof Error ){
                console.error(`update: ${ error.message }`);
            };
        }
    };

    async delete ( req : Request, res : Response ) {
        try {

        } catch ( error ) {
            if ( error instanceof Error ){
                console.error(`getUserById: ${ error.message }`);
            };
        };
    };




}

export default new UserController();