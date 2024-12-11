
export abstract class CustomError extends Error {
    constructor ( public message : string  ){
        super ( message );
    };

    public abstract statusCode : number;
    public abstract serialize() : { message : string }
};