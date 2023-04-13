import Location from "../models/LocationModel.js";

export const getAllLocation = async(req, res) =>{
  try {
      const response = await Location.findAll();
      
      res.status(200).json({data: response});
  } catch (error) {
    res.status(500).json({error: {message: error.message}})
  }
}