import React from 'react'
import './Style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAssistiveListeningSystems, faBars, faCalendarTimes, faHandHoldingHand, faHouseChimney, faIdCard, faReceipt} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown} from 'antd';
import logo4 from '../images/logo4.png'


function Navbar() {

    const items = [
      {
        key: '1',
        label: (
          
          <Link to="/payment">
          <a target="_blank" rel="noopener noreferrer" href="blank" style={{fontWeight: '700'}}>
          Payment
         </a>
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          
      
          
          
          <Link to="/invoice">
          <a target="_blank" rel="noopener noreferrer" href="blank" style={{fontWeight: '700'}}>
          Add Invoice
         </a>
          </Link>
      

        ),
        // icon: <SmileOutlined />,
        disabled: false,
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            {/* 3rd menu item  */}
          </a>
        ),
        disabled: false,
      },
     
    ];


  return (
    <div>
      
     
        
        <input type="checkbox" id="check"></input>
        {/* header area start    */}
        <header>
      <label for="check">
        <i id='sidebar_btn'><FontAwesomeIcon icon={faBars} color="white"/> </i>
      </label>
      <div class="left_area">
        
        {/* <h3>Crater <span>365</span></h3> */}
        <img src={logo4} alt="" />
         
      </div>
      <div class="right_area">
        
        <a href="#" className='logout_btn'>Logout</a>
      </div>
    </header>
    {/* header area end */}

    {/* mobile navigation bar start */}
    <div class="mobile_nav">
      <div class="nav_bar">
        {/* <img src="1.png" class="mobile_profile_image" alt=""> */}
            {/* <img src={} alt="" /> */}
        <i class="fa fa-bars nav_btn"></i>
      </div>
      <div class="mobile_nav_items">
      <a href="#"> <i id='sidebar_btn'><FontAwesomeIcon icon={faBars} color="white"/> </i><span>Dashboard</span></a>
       <a href="#"> <i id='sidebar_btn'>  <FontAwesomeIcon icon={faReceipt} color="white"/> </i><span>Finance Dashboard</span></a> 
     
      <a href="#"> <i id='sidebar_btn'><FontAwesomeIcon icon={faHandHoldingHand} color="white"/> </i><span>HR Dashboard</span></a>
      <a href="#"> <i id='sidebar_btn'><FontAwesomeIcon icon={faCalendarTimes} color="white"/> </i><span>Time Mgt System</span></a>
      <a href="#"> <i id='sidebar_btn'><FontAwesomeIcon icon={faIdCard} color="white"/> </i><span>Profile</span></a>
      <a href="#"> <i id='sidebar_btn'><FontAwesomeIcon icon={faAssistiveListeningSystems} color="white"/> </i><span>Settings</span></a>
      </div>
    </div>

    {/* sidebar start */}
    <div class="sidebar">
      <div class="profile_info">
      
      </div>
      <a href="#"> <i id='sidebar_btn'><FontAwesomeIcon icon={faHouseChimney} color="white"/> </i><span>Dashboard</span></a>


      {/* <a href="#">  <i id='sidebar_btn'><FontAwesomeIcon icon={faReceipt} color="white"/> </i><span> Finance Dashboard    </span>
      </a>  */}

        
      <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
    <i id='sidebar_btn'><FontAwesomeIcon icon={faReceipt} color="white"/> </i><span> Finance Dashboard 
        
        </span><DownOutlined />
    </a>
      </Dropdown>

      

      
{/* 
      <Link to='/footer' > <a href="#"> <i id='sidebar_btn'>  <FontAwesomeIcon icon={faReceipt} color="white"/> </i><span>Finance Dashboard</span></a> </Link>  */}
      

      <a href="#"> <i id='sidebar_btn'><FontAwesomeIcon icon={faHandHoldingHand} color="white"/> </i><span>HR Dashboard</span></a>
      <a href="#"> <i id='sidebar_btn'><FontAwesomeIcon icon={faCalendarTimes} color="white"/> </i><span>Time Mgt System</span></a>
      <a href="#"> <i id='sidebar_btn'><FontAwesomeIcon icon={faIdCard} color="white"/> </i><span>Profile</span></a>
      <a href="#"> <i id='sidebar_btn'><FontAwesomeIcon icon={faAssistiveListeningSystems} color="white"/> </i><span>Settings</span></a>
    
    </div>
    {/* sidebar end */}



        {/* payemnt details */}

       


    



  
      
    


    
    </div>
  )
}

export default Navbar