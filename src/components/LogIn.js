import React from 'react'
import './Style.css'
import logo2 from '../images/logo2.jpg'
import logo5 from '../images/logo5.png'
import frontImg from '../images/frontImg.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Col, Row } from 'antd';

// import logo1 from '../images/logo1.jpg'




function LogIn() {
    return (
        <div className='main_body' >
 

      
<div class="container">
    <input type="checkbox" id="flip"/>
    <div class="cover">
    
      <div class="front">
        {/* <!--<img src="images/frontImg.jpg" alt="">--> */}
        <img src={logo2} alt='logo' />
        <div class="text">
          <span class="text-1">Welcome</span>
          <span class="text-2">to</span>
        </div>
      </div>
      <div class="back">
        {/* <img src={logo2} alt='logo' /> */}
        <div class="text">
          {/* <span class="text-1">Complete miles of journey <br/> with one step</span>
          <span class="text-2">Let's get started</span> */}
        </div>
      </div>
    </div>

         {/* <img src={logo5} alt='logo' />
          <p>Welcome back, please login <br />to your account</p> */}
    <div class="forms">
   
        <div class="form-content">
       
          <div class="login-form">
       
            <div class="title">Login</div>
          <form action="#">
            <div class="input-boxes">
              <div class="input-box">
              <i className='fas'><FontAwesomeIcon icon={faEnvelope} /> </i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div class="input-box">
              <i className='fas'><FontAwesomeIcon icon={faLock} /> </i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div class="text"><a href="#"></a>  <label for="flip">Forgot password?</label></div>
              <Link to="/payment">
            <div class="button input-box">
          <input type="submit" value="Sumbit" />
            </div>
            </Link>
            
            </div>
        </form>
      </div>
        <div class="signup-form">
          <div class="title">Forgot password?</div>
        <form action="#">
            <div class="input-boxes">
              <div class="input-box">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div class="input-box">
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <Link to="/payment">
            <div class="button input-box">
          <input type="submit" value="Sumbit" />
            </div>
            </Link>
              <div class="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>




 
      
    
        </div>
    )
    }

    export default LogIn