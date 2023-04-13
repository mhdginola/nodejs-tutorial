import User from '../models/user.model.js';

const createUserService = async (doc) => {
  try {
    const response = await User.create(doc);
    return response;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export default createUserService;
