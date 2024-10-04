import React, {useState} from "react";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);  
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value });
      console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true);
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success === false) {
      setError(data.message);
      setLoading(false);
      return;
    } 
    setLoading(false);
    setError(null);
    navigate("/signin");
    }catch(err){
      setLoading(false);
      setError(err.message);
    }
    
  console.log(formData);
  }
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1 className="signup-heading">Signup</h1>
        <div className="form-group">
          <input type="text" placeholder="username" name="username" value={formData.username} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="password" name="password"  value={formData.password} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <select name="role" id="role" onChange={handleChange} value={formData.role}>
            <option value="">Select Role</option>``
            <option value="user">User</option>
            <option value="host">Host</option>
          </select>
        </div>
        <div className="form-group-btn">
          <button type="submit" disabled = {loading} >{loading ? 'Loading': 'Sign Up'}</button>
        </div>
      </form>
      <Link to="/signin" className="link">Already have an account? Signin</Link>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Signup;
