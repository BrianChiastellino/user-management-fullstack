import app from './app';
import { AppDataSource } from './database/data-source';

async function main() {
    try {
        const PORT = process.env.APP_PORT ?? 8081;

        //todo: esperar la conexion con db;
        await AppDataSource.initialize();
        console.info(`Database is running on port ${ process.env.DB_PORT }`);

        app.listen( PORT, () => {
            console.log(`App is running on port ${ PORT }`);
        });

    } catch (error) {
        if ( error instanceof Error ) {
            console.error(`Something happend: ${ error.message }`);
        };
    }
}

main();

