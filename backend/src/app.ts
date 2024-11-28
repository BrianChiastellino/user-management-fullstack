import cors from 'cors';
import morgan from 'morgan';
import express, { Response } from 'express';

import playerRouter from './routes/player-routes';
import userRouter from './routes/user-routes';
import authRouter from './routes/auth-routes'

const app = express();

app.use( cors());
app.use( morgan('dev'));
app.use( express.json());

// implementar rutas, controladores, y modelos
app.use( '/players', playerRouter );
app.use( '/users', userRouter );
app.use('/auth', authRouter );


export default app;