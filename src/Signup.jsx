import { useEffect, useState } from 'react'
import {  useNavigate  } from 'react-router-dom'

function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate=useNavigate()

  useEffect(()=>{
    localStorage.removeItem('userdata')
  },[])
  function submitForm(e) {
    e.preventDefault();
    if (name.trim() === " " || email.trim() === " " || password.trim() === " ") return;
    console.log(name, email, password)
    const userDetails = {
      name,
      email,
      password
    }
    localStorage.setItem('userdata', JSON.stringify(userDetails))
    navigate('/home')
  }




  return (
    <>
      <h1>User registration form</h1>
      <form onSubmit={submitForm}  >
        <div>
          <label>Name</label>
          <input type="text" placeholder='Enter your name' onChange={e => setName(e.target.value)} />
        </div>
        <div>

          <label>Email</label>
          <input type="email" placeholder='Enter your email' onChange={e => setEmail(e.target.value)} />
        </div>
        <div>

          <label>Password</label>
          <input type="password" placeholder='Enter your Password' onChange={e => setPassword(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Signup
