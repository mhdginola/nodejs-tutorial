import Location from "../models/LocationModel.js";
import RealEstate from "../models/RealEstateModel.js";
import Status from "../models/StatusModel.js";
import TypeOfProperty from "../models/TypeOfPropertyModel.js.js";
import Validatorjs from "validatorjs";

export const sum = (a,b) => {
    return a+b;
}

export const getRealEstate = async(req, res) =>{
    const validation = new Validatorjs(req.query, {
        statusId: "required",
        locationId: "required",
        typeOfPropertyId: "required",
    });

    if(validation.fails()){
        res.status(422).json(validation.errors.errors);
    } else { 
        try {
            const response = await RealEstate.findAll({
                where: [{
                    statusId: req.query.statusId,
                    locationId: req.query.locationId,
                    typeOfPropertyId: req.query.typeOfPropertyId,
                }],
                include:[
                    {model: Location, required:true}, 
                    {model: Status, required : true}, 
                    {model: TypeOfProperty, required : true} 
                ],
            });
            
            res.status(200).json({data: response});
        } catch (error) {
            console.log(error.message);
        }
    }
}