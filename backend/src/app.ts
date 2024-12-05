import cors from 'cors';
import morgan from 'morgan';
import express, { Response } from 'express';

import playerRouter from './routes/player-routes';
import userRouter from './routes/user-routes';
import authRouter from './routes/auth-routes'
import { authRole } from './middlewares/auth-role';
import { authenticateJWT } from './middlewares/auth-jwt';
import { UserRole } from './enums/user-role.enum';

const app = express();
const url = process.env.APP_BASE_URL;

app.use( cors());
app.use( morgan('dev'));
app.use( express.json());

// implementar rutas, controladores, y modelos
app.use(`${ url }/auth` ,authRouter );
app.use(`${ url }/users`, authenticateJWT, userRouter );
// app.use( `${ url }/players`, authenticateJWT, playerRouter );








export default app;