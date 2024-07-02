import React from 'react'
import '../Styles/login.css'

const Login = () => {
  return (
    <div>
        <div className="form-container sign-in">
            <form>
                <h1>Log In</h1>
                <span>or use your email password</span>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#">Forget Your Password?</a>
                <button>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Login
