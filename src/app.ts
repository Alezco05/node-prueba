import express from 'express';
import morgan from 'morgan';

const app = express();

import indexRoutes from './routes/index'

//Settings
app.set('port', process.env.PORT || 3800);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api', indexRoutes);

export default app;