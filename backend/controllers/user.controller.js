import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import {errorHandler} from '../utils/error.js';

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) return next(errorHandler(401, 'You do not have permission to update this account'));
  try{
    if(req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    const update_user = await User.findById(req.params.id, {
      setField:{
        username: req.body.username,
        password: req.body.password,
      }    
    },{new: true});

    const {password, ...rest} = update_user._doc;
    res.status(200).json(rest);
  }catch(e){
    next(e)
  }
}