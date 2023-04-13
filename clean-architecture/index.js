import express from "express";
import {sequelize} from "./app/config/database.js";
import { get } from "./app/controllers/userControllers.js";

const app = express();

app.use(express.json());
app.use(sequelize);
app.get('/', async(req,res)=>{
    const result = await get();

    res.status(200).json(result);
});

app.listen(8000);