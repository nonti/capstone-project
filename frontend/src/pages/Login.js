import React, {useState} from 'react';
import './Login.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
const Login = (props) => {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
      e.preventDefault()
      // Code to handle login goes here
      props.toggle()
  }
  return (
    <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                      <EmailOutlinedIcon className='icons'/>
                    </label>
                    <label>
                        <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
          <PasswordOutlinedIcon className='icons'/>  
                    </label>
                    <div className='buttons'>
                    <button type="submit">Login</button>
                    <button type="submit" onClick={props.toggle}>Register</button>
                    </div>
                </form>
                
            </div>
        </div>
  )
}

export default Login