import express from 'express';
import cors from 'cors';
import StatusRoute from './src/routes/StatusRoute.js';
import LocationRoute from './src/routes/LocationRoute.js';
import TypeOfPropertyRoute from './src/routes/TypeOfPropertyRoute.js';
import RealEstateRoute from './src/routes/RealEstateRoute.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use('/v1', StatusRoute);
app.use('/v1', LocationRoute);
app.use('/v1', TypeOfPropertyRoute);
app.use('/v1', RealEstateRoute);

app.listen(PORT, (error) =>{
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);