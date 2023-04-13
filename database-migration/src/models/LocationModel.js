import { Sequelize } from "sequelize";
import db from "../config/connection.js";
import RealEstate from "./RealEstateModel.js";

const {DataTypes} = Sequelize;

const Location = db.define('locations',{
    name: DataTypes.STRING,
    isDefault: DataTypes.INTEGER,
},{
    freezeTableName: true
});

Location.hasMany(RealEstate);
RealEstate.belongsTo(Location);

export default Location;

(async()=>{
    await db.sync();
})();