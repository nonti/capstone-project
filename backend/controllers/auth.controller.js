import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next) => {
  const {username, password, role}  = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const user = new User({ username, password: hashedPassword, role });
  await user.save();
  res.status(201).json({
    message: "User created successfully",
    user
  });
  }catch(e) {
   next(e);
  }
  
}

export const signin = async (req,res,next) => {
  const {username, password}  = req.body;
  try {
    const valid_user = await User.findOne({ username });
    if(!valid_user) return next(errorHandler(404, 'User not found!'));
    
    const isMatch = bcrypt.compareSync(password, valid_user.password);
    if(!isMatch) return next(errorHandler(401, 'Wrong credentials!'));

   const token = jwt.sign({id:valid_user._id}, process.env.JWT_SECRET_KEY)
   const {password: pass, ...rest}  = valid_user._doc;
    res.cookie('access_token', token, { httpOnly:true }).
    status(200).json(rest);

  }catch(e) {
   next(e);
  }
}