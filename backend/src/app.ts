import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';

// middlewares
import { authenticateJWT } from './middlewares/auth-jwt.midleware';
import { errorHandler } from './middlewares/error-handler.midleware';
import { authRole } from './middlewares/auth-role.middleware ';

// routes
import authRouter from './routes/auth.routes'
import profileRouter from './routes/profile.routes';
import adminRouter from './routes/admin.routes';

// enums
import { UserRole } from './enums/user-role.enum';


const app = express();
const BASE_URL = process.env.APP_BASE_URL;

app.use( cors({
    origin: 'http://localhost:4200',
    credentials: true,
}));


app.use( morgan('dev') );
app.use( express.json() );
app.use ( cookieParser() );


app.use(`${ BASE_URL }/auth` ,authRouter );
app.use(`${ BASE_URL }/profile` , authenticateJWT,  profileRouter );
app.use(`${ BASE_URL }/admin` , authenticateJWT, authRole( UserRole.ADMIN), adminRouter );



app.use( errorHandler );


export default app;