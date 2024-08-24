import React, { useState } from 'react'

function SignUp() {
    const [user, setUser] = useState(null)
    const signUp = () => {
    }; 
  return (
    <div className='signUp'>
        <label>Sign Up</label>
        <input placeholder='First Name' onChange={(event) => setUser({...user, firstname:event.target.value}) } />
        <input placeholder='Last Name' onChange={(event) => setUser({...user, lastname:event.target.value}) } />
        <input placeholder='UserName' onChange={(event) => setUser({...user, username:event.target.value}) } />
        <input type='password' placeholder='Password' onChange={(event) => setUser({...user, password:event.target.value}) } />
        <button onClick={(signUp) => console.log(user)}>Submit</button>
    </div>
  )
}

export default SignUp