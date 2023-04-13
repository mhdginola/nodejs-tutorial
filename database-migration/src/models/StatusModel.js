import { Sequelize } from "sequelize";
import db from "../config/connection.js";
import RealEstate from "./RealEstateModel.js";

const {DataTypes} = Sequelize;

const Status = db.define('status',{
    name: DataTypes.STRING,
    isDefault: DataTypes.INTEGER,
},{
    freezeTableName: true
});

Status.hasMany(RealEstate);
RealEstate.belongsTo(Status);

export default Status;

(async()=>{
    await db.sync();
})();