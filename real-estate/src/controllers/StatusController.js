import Status from "../models/StatusModel.js";

export const getAllStatus = async(req, res) =>{
  try {
      const response = await Status.findAll();
      
      res.status(200).json({data: response});
  } catch (error) {
    res.status(500).json({error: {message: error.message}})
  }
}