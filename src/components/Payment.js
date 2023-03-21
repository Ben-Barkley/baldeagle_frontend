import React, {useState} from 'react'
import './Style.css'
import Sidenav from './Sidenav';
import Invoice from './Invoice';
import { Link } from 'react-router-dom'
import { Space, Table, Tag } from 'antd';
import { Card, Button } from 'antd';
import { PlusOutlined} from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Col, Row } from 'antd';



 
// modal 

import {  Modal } from 'antd';
// modal contents
import {
  Cascader,
  DatePicker,
  Form,
  InputNumber,
  Radio,
  Select,
  Switch, 
  TreeSelect,
  SizeType
} from 'antd';


 




function Payment() {
  // const [paymentData, setPaymentData] = useState([]);

  const [search, setSearch] = useState('')
  console.log(search)

   
  // datasource details
  
    
  const [dataSource, setDataSource] = useState([ 
    {
      key: '1',
      name: 'John Brown',
      date: '27, Feb 2023',
      details: 'Web Development',
      desc: 'Bank Transfer',
      amount: '120,000',
      status: ['paid'],
      paymentType : 'Bank Transfer',
      department : 'IPI Solutions,3rd Floor, Veterinary Council Building, Plot,8 Zambezi Crescent, Maitama,Nigeria.',
      qty: '1',
      total: '120,000',
      acctManager: 'Jhon Donate',
      receipient: 'Laralink Ltd,86-90 Paul Street, Wuse 2,Nigeria.demo@gmail.com',
      item: 'website'
    },
    {
      key: '2',
      name: 'Jim Green',
      date: '13, Feb 2023',
      details: 'Maintenance',
      desc: 'Credit Card',
      amount: '372,000',
      status: ['failed'],
      paymentType : 'Credit Card',
      department : 'IPI Solutions,3rd Floor, Veterinary Council Building, Plot,8 Zambezi Crescent, Maitama,Nigeria.',
      qty: '1',
      total: '372,000',
      acctManager: 'Jhon Donate',
      receipient: 'Laralink Ltd,86-90 Paul Street, Wuse 2,Nigeria.demo@gmail.com'
    },
    {
      key: '3',
      name: 'Joe Black',
      date: '7, Feb 2023',
      details: 'Train Booking',
      desc: 'Cash',
      amount: '500,000',
      status: ['pending'],
      paymentType : 'Credit Card',
      department :   'IPI Solutions,3rd Floor, Veterinary Council Building, Plot,8 Zambezi Crescent, Maitama,Nigeria.',
      qty: '1',
      total: '500,000',
      acctManager: 'Jhon Donate',
      receipient: 'Laralink Ltd,86-90 Paul Street, Wuse 2,Nigeria.demo@gmail.com'
    },
    {
      key: '4',
      name: 'Fatima Bello',
      date: '7, Feb 2023',
      details: 'Leave Allowance',
      desc: 'Cash',
      amount: '231,000',
      status: ['pending'],
      paymentType : 'Credit Card',
      department :   'IPI Solutions,3rd Floor, Veterinary Council Building, Plot,8 Zambezi Crescent, Maitama,Nigeria.',
      qty: '1',
      total: '231,000',
      acctManager: 'Jhon Donate',
      receipient: 'Laralink Ltd,86-90 Paul Street, Wuse 2,Nigeria.demo@gmail.com'
    },
    {
      key: '5',
      name: 'Stephanie Donald',
      date: '18, Jan 2023',
      details: 'Train Booking',
      desc: 'Cash',
      amount: '500,000',
      status: ['pending'],
      paymentType : 'Credit Card',
      department :   'IPI Solutions,3rd Floor, Veterinary Council Building, Plot,8 Zambezi Crescent, Maitama,Nigeria.',
      qty: '1',
      total: '372,000',
      acctManager: 'Jhon Donate',
      receipient: 'Laralink Ltd,86-90 Paul Street, Wuse 2,Nigeria.demo@gmail.com'
    },
    {
      key: '6',
      name: 'Ade Tunde',
      date: '7, Feb 2023',
      details: 'Train Booking',
      desc: 'Cash',
      amount: '500,000',
      status: ['pending'],
      paymentType : 'Credit Card',
      department :   'IPI Solutions,3rd Floor, Veterinary Council Building, Plot,8 Zambezi Crescent, Maitama,Nigeria.',
      qty: '1',
      total: '372,000',
      acctManager: 'Jhon Donate',
      receipient: 'Laralink Ltd,86-90 Paul Street, Wuse 2,Nigeria.demo@gmail.com'
    },
    {
      key: '7',
      name: 'Aisha Muhammad',
      date: '2, Mar 2023',
      details: 'Staff Training',
      desc: 'Credit Card',
      amount: '130,000',
      status: ['pending'],
      paymentType : 'Credit Card',
      department :   'IPI Solutions,3rd Floor, Veterinary Council Building, Plot,8 Zambezi Crescent, Maitama,Nigeria.',
      qty: '1',
      total: '130,000',
      acctManager: 'Jhon Donate',
      receipient: 'Laralink Ltd,86-90 Paul Street, Wuse 2,Nigeria.demo@gmail.com'
    },
    {
      key: '8',
      name: 'Daniel Kingsley',
      date: '7, Feb 2023',
      details: 'Logistics',
      desc: 'Cash',
      amount: '72,000',
      status: ['paid'],
      paymentType : 'Cash',
      department :   'IPI Solutions,3rd Floor, Veterinary Council Building, Plot,8 Zambezi Crescent, Maitama,Nigeria.',
      qty: '1',
      total: '72,000',
      acctManager: 'Jhon Donate',
      receipient: 'Laralink Ltd,86-90 Paul Street, Wuse 2,Nigeria.demo@gmail.com'
    },
  ]);

  function handleDelete (key) {
    const newList = dataSource.filter( (item) => item.key !== key);
    setDataSource(newList)
    console.log(newList)
  }
  


  

  const columns = [
    
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Payment Details',
      dataIndex: 'details',
      key: 'details',
    },
    {
        title: 'Payment Type',
        dataIndex: 'desc',
        key: 'desc',
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'number',
      },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => (
        <>
          {status.map((stat) => {
            let color = stat.length > 5 ? 'geekblue' : 'green';
            if (stat === 'failed') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={stat}>
                {stat.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
        {/* <a>Invite {record.name}</a>  */}
       
          
          <Link to= {`/invoice/${record.key}`}>
          
          <a target="_blank" rel="noopener noreferrer" href="blank" style={{fontWeight: '500'}}>
          View
         </a>
         
          </Link> 
      
    
      

          <a onClick={() => handleDelete(record.key)}>Delete</a> 
          
          
          
        </Space>
        
      ),
    },
  ];
 
  // setPaymentData(dataSource); 
 
 

    
    // search box
    const { Search } = Input;

    const suffix = (
      <AudioOutlined
        style={{
          fontSize: 16,
          color: '#1890ff',
        }}
      />
    );

    const onSearch = (value) => console.log(value);

    // dropdown side nav
    

    
    // modal set up
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
  // modal contents

 
  

  return (
    
    <div>
         <Sidenav />
  
    <div class="content">
      <div class="card">
        <div className="payment">
      


   
        <div className="text">
              <h2>Payments</h2>
            </div>
          <div className="details">
            

            <Row>
    <Col xs={{ span:5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
    <div className="btn" >
              <Space wrap >
                    
                    <Button type="primary" onClick={showModal}>
                    <PlusOutlined /> Add Payment
      </Button>
      <Modal title="Add Payment" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
   


<Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
    >
     
      <Form.Item label="Name">
        <Input placeholder='Enter Name'/>
      </Form.Item>

      <Form.Item label="Details">
        <Input placeholder='Payment Details'/>
      </Form.Item>
    
      <Form.Item label="Type">
        <TreeSelect
          treeData={[
          
            { title: 'Cash', value: 'cash' },

            { title: 'Bank Transfer', value: 'payment'}
          ]}
          placeholder='Enter Payment Type'
        />
      </Form.Item>

      <Form.Item label="Status">
      <TreeSelect
          treeData={[
            { title: 'Paid', value: 'pai' },
            { title: 'Pending', value: 'pen' },
            { title: 'Failed', value: 'fai' },
          ]}
          placeholder='Transaction Status'
        />
      </Form.Item>

      <Form.Item label="Date">
        <DatePicker />
      </Form.Item>

      <Form.Item label="Amount">
        <InputNumber placeholder='Amount'/>
      </Form.Item>
    
    </Form>
      </Modal>
                           
            </Space>
            
    </div>
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Space direction="vertical">
    <Search placeholder="search for result" onChange={(e) => setSearch(e.target.value)} onSearch={onSearch} enterButton />  
    </Space>
    </Col>
  </Row>

          </div>

        
         

        </div>
      
      </div>
      <div class="card">
     
      </div>
      {/* {dataSource.filter((item) => {
        return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
      }).map((item) => */}
          <Card style={{ width: '100%' }}>
          <Table 
                columns={columns }
              
                dataSource={dataSource} >


                </Table>

               
      </Card> 
       {/* )} */}

    </div>

    



  
      
    


    
    </div>
  )
}

export default Payment