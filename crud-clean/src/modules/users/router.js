import express from 'express';
import userRouter from './routes/router.js';

const app = express();

app.use('/users', userRouter);

export default app;
