import readManyUserService from '../services/read-many.service.js';

const readMany = async (req, res) => {
  try {
    const result = await readManyUserService();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export default readMany;
