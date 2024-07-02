import React, { useEffect, useState } from 'react';
import './loginSignup.css';
import { useNavigate } from "react-router-dom";
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [userDetails, setUserDetails] = useState({
        createdAt: '',
        updatedAt: '',
    });

    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/faculty/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            console.log('Login function executed successfully', values);
            const data = await response.json();
            const { token, faculty } = data;
            const { createdAt, updatedAt } = faculty;
            console.log('Token received:', token);

            localStorage.setItem('authToken', token);
            localStorage.setItem('createdAt', createdAt);
            localStorage.setItem('updatedAt', updatedAt);

            setUserDetails({ createdAt, updatedAt });

            console.log('Email:', values.email);  //to check

            navigate("/Details");
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });

        return () => {
            registerBtn.removeEventListener('click', () => {
                container.classList.add("active");
            });
            loginBtn.removeEventListener('click', () => {
                container.classList.remove("active");
            });
        };
    }, []);

    const change = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const submit = async()=>{
      try{
          if(values.email===''||values.password===''){
              alert("all fields are required")
          }else{
              var em=values.email;
              console.log(em);
              navigate("/Details")
          }
      }catch(error){
          alert("Error occured")
      }
    }; 

    return (
        <div className="container" id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="inputs">
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder="Name" required />
                        </div>
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder="Password" required />
                        </div>
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Log In</h1>
                    <span>or use your email password</span>
                    <div className="inputs">
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" name='email' onChange={change} placeholder="Email" value={values.email} required />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" name='password' onChange={change} placeholder="Password" value={values.password} required />
                        </div>
                    </div>
                    <a href="#">Forget Your Password?</a>
                    <button type="button" className='loginbtn' onClick={submit} >Log In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to login</p>
                        <button className="hidden" id="login">Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="hidden" id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;
