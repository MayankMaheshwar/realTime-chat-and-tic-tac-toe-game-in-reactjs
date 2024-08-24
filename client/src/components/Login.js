import React, {useState} from 'react'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = () => {
        
    }
  return (
    <div className='Login'>
        <label>Log In</label>
        
        <input placeholder='UserName' onChange={(event) => setUsername(event.target.value) } />
        <input type='password' placeholder='Password' onChange={(event) => setPassword(event.target.value) } />
        <button onClick={(login) => console.log(Login)}>Login</button>
    </div>
  )
}

export default Login