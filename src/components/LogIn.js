import React, { useState } from 'react'
import './Style.css'
import logo2 from '../images/logo2.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import AuthService from "../services/auth"
import { setToken } from "../services/invoice"
import { useDispatch } from 'react-redux'
import { setUser } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useNavigate } from 'react-router-dom'



function LogIn() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    console.log('login clicked')
    const credentials = {
      email: email,
      password: password
    }
    try {
      const response = await AuthService.login(credentials)
      
      setToken(response.access_token)
      const user = {
        email: email,
        tokens: response
      }
      setEmail('')
      setPassword('')

      window.localStorage.setItem(
        'baldeagleUser', JSON.stringify(user)
      )
      dispatch(setUser(user))
      navigate('/')
    } catch(exception) {
      dispatch(setNotification({message: "email or pasword incorrect", type: 'error'}, 5000))
    }
  }
    return (
<div className='main_body' >      
<div className="container">
    <input type="checkbox" id="flip"/>
    <div className="cover">
    
      <div className="front">
        {/* <!--<img src="images/frontImg.jpg" alt="">--> */}
        <img src={logo2} alt='logo' />
        <div className="text">
          <span className="text-1">Welcome</span>
          <span className="text-2">to</span>
        </div>
      </div>
      <div className="back">
        {/* <img src={logo2} alt='logo' /> */}
        <div className="text">
          {/* <span className="text-1">Complete miles of journey <br/> with one step</span>
          <span className="text-2">Let's get started</span> */}
        </div>
      </div>
    </div>

         {/* <img src={logo5} alt='logo' />
          <p>Welcome back, please login <br />to your account</p> */}
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
          <form onSubmit={login}>
            <div className="input-boxes">
              <div className="input-box">
              <i className='fas'><FontAwesomeIcon icon={faEnvelope} /> </i>
                <input type="text" placeholder="Enter your email" value={email} onChange={({target}) => setEmail(target.value)} required/>
              </div>
              <div className="input-box">
              <i className='fas'><FontAwesomeIcon icon={faLock} /> </i>
                <input type="password" placeholder="Enter your password" value={password} onChange={({target}) => setPassword(target.value)} required/>
              </div>
              <div className="text"><a href="#"></a>  <label htmlFor="flip">Forgot password?</label></div>
            <div className="button input-box">
              <input type="submit" value="Submit" />
            </div>

            </div>
        </form>
      </div>
        <div className="signup-form">
          <div className="title">Forgot password?</div>
        <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required />
              </div>
            <div className="button input-box">
              <input type="submit" value="Sumbit" />
            </div>
              <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
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