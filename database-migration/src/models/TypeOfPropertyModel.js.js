import { Sequelize } from "sequelize";
import db from "../config/connection.js";
import RealEstate from "./RealEstateModel.js";

const {DataTypes} = Sequelize;

const TypeOfProperty = db.define('type_of_property',{
    name: DataTypes.STRING,
    isDefault: DataTypes.INTEGER,
},{
    freezeTableName: true
});

TypeOfProperty.hasMany(RealEstate);
RealEstate.belongsTo(TypeOfProperty);

export default TypeOfProperty;

(async()=>{
    await db.sync();
})();