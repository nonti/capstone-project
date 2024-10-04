import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

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