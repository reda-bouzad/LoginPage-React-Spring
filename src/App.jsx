import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="square1"></div>
        <div className="square2">
          <div className="intro">
            <h1>Sign up</h1>
            <p>Welcome to WoodMart <br /> Register as a member to experience. </p>
          </div>
          <div className="myForm">
            <label htmlFor="Email">E-mail</label>
            <input type="text" />
            <label htmlFor="Password">Password</label>
            <input type="password" />
            <div className="checkBox">
            <input className='myCheckBox' type="checkbox" />
            <label htmlFor="">I agree the terms of service</label>
            </div>
            <input className='myBtn' value="Create account" type="submit" />

          </div>
          <div className="footer">
            <p>Already a member? <span> Sign in</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
