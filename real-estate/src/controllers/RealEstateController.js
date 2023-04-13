import Location from "../models/LocationModel.js";
import RealEstate from "../models/RealEstateModel.js";
import Status from "../models/StatusModel.js";
import TypeOfProperty from "../models/TypeOfPropertyModel.js";
import Validatorjs from "validatorjs";

export const getRealEstate = async(req, res) =>{
    const validation = new Validatorjs(req.query, {
        statusId: "required",
        locationId: "required",
        typeOfPropertyId: "required",
    });

    if(validation.fails()){
        res.status(422).json(validation.errors);
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
            res.status(500).json({error: {message: error.message}})
        }
    }
}