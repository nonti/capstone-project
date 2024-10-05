import React, { useState,  } from 'react';
import '../styles/Profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserStart, updateUserSuccess, updateUserFailure } from '../redux/user/userSlice.js';
// import { BASE_URL } from '../config.js';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    username: currentUser.username || '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUserStart());

    try {
      const res = await fetch(`http://localhost:4000/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          credentials: 'include'
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle errors that are returned from the server
        dispatch(updateUserFailure(data.message || 'Failed to update user'));
        return;
      }

      dispatch(updateUserSuccess(data));
    } catch (err) {
        console.error('Update error:', err);
        dispatch(updateUserFailure(err.message || 'Network error'));
      }
    }
  


  return (
    <div className="profile">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="profile-img">
          {/* Add your profile image here if needed */}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-btn">
          <button type="submit">Update</button>
        </div>
      </form>
      <span className='delete'>Delete account</span>
    </div>
  );
};

export default Profile;
