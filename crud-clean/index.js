import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import UserRoute from './src/modules/users/router.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/v1', UserRoute);

app.listen(port, () => console.log(`server running at port: ${port}`));
