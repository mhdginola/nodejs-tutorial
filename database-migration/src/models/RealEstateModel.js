import { Sequelize } from "sequelize";
import db from "../config/connection.js";

const {DataTypes} = Sequelize;

const RealEstate = db.define('real_estate',{
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
},{
    freezeTableName: true
});

export default RealEstate;

(async()=>{
    await db.sync();
})();