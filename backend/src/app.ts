import cors from 'cors';
import morgan from 'morgan';
import express from 'express';

import playerRouter from './routes/player.routes';
import userRouter from './routes/user.routes';
import authRouter from './routes/auth.routes'
import profileRouter from './routes/profile.routes';

import { authenticateJWT } from './middlewares/auth-jwt.midleware';
import { authRole } from './middlewares/auth-role.middleware ';
import { UserRole } from './enums/user-role.enum';

const app = express();
const BASE_URL = process.env.APP_BASE_URL;

app.use( cors());
app.use( morgan('dev'));
app.use( express.json());

// implementar rutas, controladores, y modelos

app.use(`${ BASE_URL }/auth` ,authRouter );
app.use(`${ BASE_URL }/profile` , authenticateJWT,  profileRouter );



// app.use(`${ BASE_URL }/users`, userRouter );
// app.use( `${ BASE_URL }/players`, authenticateJWT, authRole( UserRole.ADMIN ), playerRouter );








export default app;