import app from './app';

import { AppDataSource } from './database/data-source';

async function main() {
    try {
        const PORT = process.env.APP_PORT ?? 8081;
        const BASE_URL = process.env.APP_BASE_URL ?? 'api/v1';

        await AppDataSource.initialize();
        console.info(`Database is running on port: ${ process.env.DB_PORT }`);

        app.listen( PORT, () => {
            console.log(`App is running on http://localhost:${ PORT + BASE_URL } `);
        });

    } catch (error) {
        if ( error instanceof Error ) {
            console.error(`Something happend: ${ error.message }`);
        };
    }
}

main();
