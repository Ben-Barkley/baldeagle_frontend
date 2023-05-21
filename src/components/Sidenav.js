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
          {/* <div className={openNav ? "open sidebar" : "sidebar"}> */}
          <div className= "sidebar">
    <div className='logo-details'>
      {/* <i className='bx bxl-c-plus-plus icon'></i> */}
      <img src={logo4} alt="" />
        {/* <div className="logo_name">Crater 365</div> */}
        {/* <i className='bx bx-menu' id="btn" ></i> */}
        {/* <i className='bx bx-menu' id='btn' onClick={toggleSideNav}><FontAwesomeIcon icon={faBars} color="white"/> </i> */}
        {/* <i className='bx bx-menu' id='btn' ><FontAwesomeIcon icon={faBars} color="white"/> </i> */}
    </div>
    <div className="profile-details">
           {/* <img src="profile.jpg" alt="profileImg"> */}
           <div className="name_job">
             <div className="name">Ragnar Lothbrok</div>
             <div className="job">Web designer</div>
           </div>
         </div>
    <ul className="nav-list">
     
      <li>
        <a href="#">
        
          
          <span className="links_name"><i className='bx bx-grid-alt'><FontAwesomeIcon icon={faHouseChimney} color="white"/> </i>Dashboard</span>
        </a>
         {/* <span className="tooltip"><i className='bx bx-grid-alt'><FontAwesomeIcon icon={faHouseChimney} color="white"/> </i>Dashboard</span> */}
      </li>
      <li>
       <a href="#">
       
         
         <span className="links_name"><i className='bx bx-user'><FontAwesomeIcon icon={faHandHoldingHand} color="white"/> </i>HR Dashboard</span>
       </a>
       {/* <span className="tooltip"><i className='bx bx-user'><FontAwesomeIcon icon={faHandHoldingHand} color="white"/> </i>HR Dashboard</span> */}
     </li>

     <Link to= "/payment">
        <li>
       <a href="#">
         <span className="links_name"><i className='bx bx-user'><FontAwesomeIcon icon={faReceipt} color="white"/> </i>Finance Dashboard</span>
       </a>
       {/* <span className="tooltip"><i className='bx bx-user'><FontAwesomeIcon icon={faReceipt} color="white"/> </i>Finance Dashboard</span> */}
     </li>
     </Link>
 
     <li>
       <a href="#">
         
         <span className="links_name"><i className='bx bx-chat'><FontAwesomeIcon icon={faCalendarTimes} color="white"/> </i>Time Mgt System</span>
       </a>
       {/* <span className="tooltip"><i className='bx bx-chat'><FontAwesomeIcon icon={faCalendarTimes} color="white"/> </i>Time Mgt System</span> */}
     </li>
  
     <li>
       <a href="#">
        
         <span className="links_name"><i className='bx bx-folder'><FontAwesomeIcon icon={faHandsHelping} color="white"/> </i>Help Desk</span>
       </a>
       {/* <span className="tooltip"> <i className='bx bx-folder'><FontAwesomeIcon icon={faHandsHelping} color="white"/> </i>Help Desk</span> */}
     </li>
   
   
     <li>
       <a href="#">      
         <span className="links_name"><i className='bx bx-cog'><FontAwesomeIcon icon={faCog} color="white"/> </i>Settings</span>
       </a>
       {/* <span className="tooltip"> <i className='bx bx-cog'><FontAwesomeIcon icon={faCog} color="white"/> </i>Setting</span> */}
     </li>
    
     <li className="profile">
        
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