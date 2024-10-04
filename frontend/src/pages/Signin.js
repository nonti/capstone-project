import React, {useState} from "react";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";


const Signin = () => {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value });
      console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(signInStart());
      const res = await fetch(`${BASE_URL}/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success === false) {
      dispatch(signInFailure(data.message));
      return;
    } 
    dispatch(signInSuccess(data));
    navigate("/");
    }catch(err){
      dispatch(signInFailure(err.message));
    }
    
  console.log(formData);
  }
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1 className="signup-heading">SignIn</h1>
        <div className="form-group">
          <input type="text" placeholder="username" name="username" value={formData.username} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="password" name="password"  value={formData.password} onChange={handleChange}/>
        </div>
       
        <div className="form-group-btn">
          <button type="submit" disabled = {loading} >{loading ? 'Loading': 'Sign in'}</button>
        </div>
      </form>
      <Link to="/signup" className="link">Dont have an account? Signup</Link>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Signin;
