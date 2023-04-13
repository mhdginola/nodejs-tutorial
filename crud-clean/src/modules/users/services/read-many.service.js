import User from '../models/user.model.js';

const readManyUserService = async () => {
  try {
    const response = await User.findAll();
    return response;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export default readManyUserService;
