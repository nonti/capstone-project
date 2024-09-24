import React from 'react'
import './Login.css'
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import { Link } from'react-router-dom';
const Login = () => {
  return (
    <div className='wrapper'>
    <form>
      <h3>Login</h3>
      
       <div className='input-box'>
          <input type='text' placeholder='Username'  autoComplete='off'  />
          <PersonIcon className='icon'/>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' autoComplete='off' id='password'  />
          <PasswordIcon className='icon'/>
      </div>
      <button type="submit" class="btn btn-secondary">Sign In</button>
    </form>
    <div className='signin'>
      <p>Don't have an account ?</p>
      <Link to='' type="submit" className="">Login</Link>
    </div>
    </div>

  )
}

export default Login;