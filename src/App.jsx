import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup'
import Details from './Components/LoginSignup/Details';
import Dropdowns from './Components/LoginSignup/ImagesSection';

function App() {


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginSignup />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Dropdowns" element={<Dropdowns />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
