import React from 'react'
import '../Styles/signup.css'

const Signup = () => {
  return (
    <div>
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Signup
