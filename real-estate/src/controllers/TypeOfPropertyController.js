import TypeOfProperty from "../models/TypeOfPropertyModel.js";

export const getAllTypeOfProperty = async(req, res) =>{
  try {
      const response = await TypeOfProperty.findAll();
      
      res.status(200).json({data: response});
  } catch (error) {
    res.status(500).json({error: {message: error.message}})
  }
}