import React from 'react';
import '../styles/Profile.css';
import host_img from '../assets/images/Jane.png';
// import {useSelector} from 'react-redux';

const Profile = () => {

  // const {currentUser} = useSelector((state) => state.user);
  return (
    <div className="profile">
      <h1>Profile</h1>
      <form>
      <div className="profile-img">
        <img src={host_img} alt="user_img" className='host-img'/>
        </div>
        <div className="form-group">
          <input type="text" placeholder="username" name="username" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="password" name="password"  />
        </div>
        <div className="form-group">
          <input type="email" placeholder="email" name="email" />
        </div>
        <div className="form-group-btn">
          <button type="submi">Update</button>
        </div>
      </form>
      <span className='delete'>Delete account</span>
    </div>
  )
}

export default Profile
