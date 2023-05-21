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

{/*        
        import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const App: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-circle"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default App; */}



  
      
    


    
    </div>
  )
}

export default Navbar