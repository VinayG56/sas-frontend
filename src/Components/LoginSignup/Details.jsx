import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';    
import user_icon from '../Assets/person.png';  
import './details.css';

const Details = () => {
  
  const [values, setValues] = useState({
    name: '',
    branch: '',
    year: '',
    classroom: '',
});

const navigateTo = useNavigate();

const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
};

const handleSubmitbtn = async (e) => {
  e.preventDefault();
  const { name, branch, year, classroom } = values;

  console.log('Name:', name);  // Check

  const details = { name, branch, year, classroom };

  try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No auth token found');
    }

    const response = await fetch('http://127.0.0.1:3000/getImagesfromfirebase', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ details }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Data:', data);
      navigateTo('/ImagesSection');
    } else {
      console.error('Error occurred in backend', response.statusText);
    }
  } catch (error) {
    console.error('Error during submitting form', error);
  }
};

  return (
    <div className="form-box">
      <div className="form-value">
        <form action="">
          <h2>Details of Classroom</h2>
          <div className="input">
              <img src={user_icon} alt="" />
              <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Name of the Professor"
                  required
              />
          </div>
          <div className="input">
              <label htmlFor="branch" className='start'>Branch</label>
              <select
                  name="branch"
                  id="branch"
                  value={values.branch}
                  onChange={handleChange}
                  required
              >
              <option value="">Select your branch</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
            
            </select>
          </div>
          <div className="input">
            <label htmlFor="year">Year</label>
            <select
                name="year"
                id="year"
                value={values.year}
                onChange={handleChange}
                required
            >
              <option value="">Select your year</option>
              <option value="1">2021</option>
              <option value="2">2022</option>
              <option value="3">2023</option>
              <option value="4">2024</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="class">Class</label>
            <select
                name="classroom"
                id="classroom"
                value={values.classes}
                onChange={handleChange}
                required
            >
              <option value="">Select your Class</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
              <option value="C3">C3</option>
            </select>
          </div>
          <button to="/ImagesSection" className='btn' onClick={handleSubmitbtn}>Submit</button>
          <div className="register">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Details;
