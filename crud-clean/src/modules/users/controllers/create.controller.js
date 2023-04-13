import Validatorjs from 'validatorjs';
import createUserService from '../services/create.service.js';

const create = async (req, res) => {
  try {
    const validation = new Validatorjs(req.body, {
      email: 'required|email',
      name: 'required',
      age: 'required',
    });

    if (validation.fails()) {
      res.status(422).json(validation.errors.errors);
    }
    const result = await createUserService(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export default create;
