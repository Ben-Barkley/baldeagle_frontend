import React, { useState} from 'react'
import './Style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faCalendarTimes, faCog, faDoorClosed, faDoorOpen, faHandHoldingHand, faHandsHelping,  faHouseChimney,  faLock,  faPowerOff,  faReceipt, faUser, faWindowClose} from '@fortawesome/free-solid-svg-icons'
import logo4 from '../images/logo4.png'
// dropdown side nav
import { DownOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import { Dropdown} from 'antd';
import { Link } from 'react-router-dom'


function Sidenav() {
    // start side nav
    // const [openNav, setOpenNav] = useState(false)

    // const toggleSideNav = () => {
    // setOpenNav(!openNav)
    // }
    // end side nav

    // dropdown
    // const items = [
    //     {
    //       key: '1',
    //       label: (
            
    //         <Link to="/payment">
    //         <a   style={{fontWeight: '700'}}>
    //         Payment
    //        </a>
    //         </Link>
    //       ),
    //     },
    //     {
    //       key: '2',
    //       label: (
            
    //         <Link to="/invoice">
    //         <a  style={{fontWeight: '700'}}>
    //         Add Invoice
    //        </a>
    //         </Link>
        
  
    //       ),
        
    //       disabled: false,
    //     }
     
       
    //   ];




  return (
    <div>
          {/* <div class={openNav ? "open sidebar" : "sidebar"}> */}
          <div class= "sidebar">
    <div className='logo-details'>
      {/* <i class='bx bxl-c-plus-plus icon'></i> */}
      <img src={logo4} alt="" />
        {/* <div class="logo_name">Crater 365</div> */}
        {/* <i class='bx bx-menu' id="btn" ></i> */}
        {/* <i className='bx bx-menu' id='btn' onClick={toggleSideNav}><FontAwesomeIcon icon={faBars} color="white"/> </i> */}
        {/* <i className='bx bx-menu' id='btn' ><FontAwesomeIcon icon={faBars} color="white"/> </i> */}
    </div>
    <ul class="nav-list">
     
      <li>
        <a href="#">
        
          <i className='bx bx-grid-alt'><FontAwesomeIcon icon={faHouseChimney} color="white"/> </i>
          <span class="links_name">Dashboard</span>
        </a>
         <span class="tooltip">Dashboard</span>
      </li>
      <li>
       <a href="#">
       
         <i className='bx bx-user'><FontAwesomeIcon icon={faHandHoldingHand} color="white"/> </i>
         <span class="links_name">HR Dashboard</span>
       </a>
       <span class="tooltip">HR Dashboard</span>
     </li>

     <Link to= "/payment">
     <li >
       <a>
         <i className='bx bx-user'><FontAwesomeIcon icon={faReceipt} color="white"/> </i>
       
        <span class="links_name">Finance Dashboard</span>  
       </a>
    
       <span class="tooltip">Finance Dashboard</span>
       
     </li>
     </Link>
 
     <li>
       <a href="#">
         <i className='bx bx-chat'><FontAwesomeIcon icon={faCalendarTimes} color="white"/> </i>
         <span class="links_name">Time Mgt System</span>
       </a>
       <span class="tooltip">Time Mgt System</span>
     </li>
  
     <li>
       <a href="#">
         <i className='bx bx-folder'><FontAwesomeIcon icon={faHandsHelping} color="white"/> </i>
         <span class="links_name">Help Desk</span>
       </a>
       <span class="tooltip">Help Desk</span>
     </li>
   
   
     <li>
       <a href="#">
         {/* <i class='bx bx-cog' ></i> */}
         <i className='bx bx-cog'><FontAwesomeIcon icon={faCog} color="white"/> </i>
         <span class="links_name">Setting</span>
       </a>
       <span class="tooltip">Setting</span>
     </li>
    
     <li class="profile">
         <div class="profile-details">
           {/* <img src="profile.jpg" alt="profileImg"> */}
           <div className="name_job">
             <div className="name">User1</div>
             <div className="job">Web designer</div>
           </div>
         </div>
         <Link to='/login'>
         <i className='bx bx-log-out' id='log_out'><FontAwesomeIcon icon={faPowerOff} color="white"/> </i>   
         </Link>
     </li>
 
    </ul>
  </div>
  <section className="home-section">
      {/* <div className="text">Dashboard</div> */}
  </section>

    </div>
  )
}

export default Sidenav