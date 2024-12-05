import cors from 'cors';
import morgan from 'morgan';
import express from 'express';

import playerRouter from './routes/player-routes';
import userRouter from './routes/user-routes';
import authRouter from './routes/auth-routes'
import { authenticateJWT } from './middlewares/auth-jwt';

const app = express();
const BASE_URL = process.env.APP_BASE_URL;

app.use( cors());
app.use( morgan('dev'));
app.use( express.json());

// implementar rutas, controladores, y modelos

app.use(`${ BASE_URL }/auth` ,authRouter );
app.use(`${ BASE_URL }/users`, userRouter );
// app.use( `${ url }/players`, authenticateJWT, playerRouter );








export default app;