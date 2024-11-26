import { Request, Response } from "express";



class PlayerController {

    constructor () {}

    async getAll ( req : Request, res : Response ) {
        try {

            // const data = await 

        } catch ( error ) {
            if ( error instanceof Error ){
                console.error(`getAllPlayers: ${ error.message }`);
            };
        }
    };

    async getByID ( req : Request, res : Response ) {
        try {

        } catch ( error ) {
            if ( error instanceof Error ){
                console.error(`getPlayerById: ${ error.message }`);
            };
        }
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

export default new PlayerController();