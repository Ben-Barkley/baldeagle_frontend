import React, { useRef, useState } from "react";
import "./Style.css";
import Sidenav from "./Sidenav";
import { Link } from "react-router-dom";
import { Space, Table, Tag } from "antd";
import { Card, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AudioOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { InvoiceService } from "../services/invoice";
import { Modal } from "antd";

import { Form, InputNumber, Select } from "antd";
import { addNewInvoice, appendInvoice, initiateInvolvedInvoices } from "../reducers/InvoiceReducer";


function Payment() {

  const [search, setSearch] = useState("");
  
  const dispatch = useDispatch()

  const user = useSelector(state => state.user);

  // dispatch(initiateInvolvedInvoices(user.email))

  
  // function handleDelete(key) {
  //   const newList = dataSource.filter((item) => item.key !== key);
  //   setDataSource(newList);
  //   console.log(newList);
  // }

  const columns = [
    {
      title: "Name",
      dataIndex: "initiator",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: ["meta", "initiatedTime"],
      key: "date",
    },
    {
      title: "Payment Details",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Payment Type",
      dataIndex: "paymentMode",
      key: "paymentMode",
    },
    {
      title: "Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    // {
    //   title: "Status",
    //   key: "status",
    //   dataIndex: "status",
    //   render: (_, { status }) => (
    //     <>
    //       {status.map((stat) => {
    //         let color = stat.length > 5 ? "geekblue" : "green";
    //         if (stat === "failed") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={stat}>
    //             {stat.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.name}</a>  */}

          <Link to={`/invoice/${record.id}`}>
            View
            {/* <a target="_blank" rel="noopener noreferrer" href="blank" style={{fontWeight: '500'}}>
          
         </a> */}
          </Link>

          {/* 
          <a onClick={() => handleDelete(record.key)}>Delete</a>  */}
        </Space>
      ),
    },
  ];

  const [form] = Form.useForm()

  // search box
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value) => console.log(value);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const invoices = useSelector(state => state.invoice);

  const [mode, setMode] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {

    form.submit()
    try {
      setLoading(true);
      let val = await form.validateFields()
      const total = val.particularsList.reduce((total, item) => (total + parseInt(item.price))*parseInt(item.quantity), 0)
      val = {...val, totalAmount: total, initiator: user.email}
      const res = await InvoiceService.createNew(val)
      dispatch(appendInvoice(res))
      console.log(res)
      setLoading(false);
      setIsModalOpen(false);  
    } catch (error) {
      console.log('form invalid', error)
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSelectChange = (value) => {
    setMode(value);
  };

  // Dropdown List for Approval
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  const onSearchz = (value: string) => {
    console.log('search:', value);
  };
  return (
    <div>
      <Sidenav />
      <div className="content">
        <div className="card">
          <div className="payment">
            <div className="text">
              <h2>Payments</h2>
            </div>
            <div className="details">
              <Row>
                <Col >
                {/* xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} */}
                  <div className="btn" style={{marginRight: '30px'}}>
                    <Space wrap>
                      <Button type="primary" onClick={showModal} >
                        <PlusOutlined /> Add Payment
                      </Button>
                   
                        <Modal
                      open={isModalOpen}
                      title="Add payment"
                      onOk={handleOk}
                      onCancel={handleCancel}
                      footer={[
                        <Button key="back" onClick={handleCancel}>
                          Cancel
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                          Submit
                        </Button>,
                      ]}
                    >
                        <Form
                        form={form}
                        name="control-hooks"
                          labelCol={{
                            span: 4,
                          }}
                          wrapperCol={{
                            span: 14,
                          }}
                          layout="horizontal"
                          style={{
                            maxWidth: 600,
                          }}
                          // onFinish={(e) => addParticulars(e)}
                          labelWrap
                        >
                          <Form.Item 
                          
                          label="Authorizer"
                          name="authorizer"
                          rules={[
                            {
                              required: true,
                              message: "Missing authorizer"
                            },
                          ]}
                          >
                            <Input
                            
                            style={{marginLeft: '30px'}}
                              placeholder="Authorizer"
                              // onChange={handleChange}
                              // value={formData.authorizer}
                              name="authorizer"
                            />
                          </Form.Item>
                          <Form.Item
                           label="Approver"
                           name="approver"
                           rules={[
                            {
                              required: true,
                              message: "Missing approver"
                            },
                          ]}
                           >
                           
                           <Select
                           style={{marginLeft: '30px'}}
                            showSearch
                            placeholder="Select Approver"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                              {
                                value: 'jack',
                                label: 'Jack',
                              },
                              {
                                value: 'lucy',
                                label: 'Lucy',
                              },
                              {
                                value: 'tom',
                                label: 'Tom',
                              },
                            ]}
                          />
                          </Form.Item>
                          <Form.Item 
                          label="Department"
                          name="department"
                          rules={[
                            {
                              required: true,
                              message: "Missing department",
                            },
                          ]}
                          >
                            <Input
                            style={{marginLeft: '30px'}}
                              placeholder="Department"
                              // onChange={handleChange}
                              // value={formData.department}
                              name="department"
                            />
                          </Form.Item>

                          <Form.List name="particularsList">
                            {(fields, { add, remove }) => (
                              <>
                                {fields.map(({ key, name, ...restField }) => (
                                  <Space
                                    key={key}
                                    style={{
                                      display: "flex",
                                      marginBottom: 8,
                                      marginLeft: 20,
                                    }}
                                    align="baseline"
                                  >
                                    <Form.Item
                                      {...restField}
                                      name={[name, "name"]}
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing name",
                                        },
                                      ]}
                                    >
                                      <Input placeholder="name of items" />
                                    </Form.Item>
                                    <Form.Item
                                      {...restField}
                                      name={[name, "price"]}
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing price",
                                        },
                                      ]}
                                    >
                                      <InputNumber placeholder="price" />
                                    </Form.Item>
                                    <Form.Item
                                      {...restField}
                                      name={[name, "quantity"]}
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing quantity",
                                        },
                                      ]}
                                    >
                                      <InputNumber placeholder="quantity" />
                                    </Form.Item>

                                    <MinusCircleOutlined
                                      onClick={() => remove(name)}
                                    />
                                  </Space>
                                ))}
                                <Form.Item>
                                  <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                  >
                                    Add field
                                  </Button>
                                </Form.Item>
                              </>
                            )}
                          </Form.List>
                          {/* <Form.Item 
                          label="Amount"
                          name="amount"
                          rules={[
                            {
                              required: true,
                              message: "Missing amount"
                            },
                          ]}
                          >
                            <InputNumber
                              placeholder="Amount"
                              onChange={handleAmountChange}
                              value={formData.amount}
                              name="amount"
                            />
                          </Form.Item> */}
                          <Form.Item 
                          label="Amount In Words"
                          name="amountInWords"
                          rules={[
                            {
                              required: true,
                              message: "Missing amount in words"
                            },
                          ]}
                          >
                            <Input
                            style={{marginLeft: '30px'}}
                              placeholder="Amount"
                              // onChange={handleChange}
                              // value={formData.amountInWords}
                              name="amountInWords"
                            />
                          </Form.Item>
                          <Form.Item 
                          label="Payment To"
                          name="paymentTo"
                          rules={[
                            {
                              required: true,
                              message: "Missing payment to"
                            },
                          ]}
                          >
                            <Input
                              style={{marginLeft: '30px'}}
                              name="paymentTo"
                              placeholder="Payment to"
                              // onChange={handleChange}
                              // value={formData.paymentTo}
                            />
                          </Form.Item>
                          <Form.Item 
                          label="Description"
                          name="description"
                          rules={[
                            {
                              required: true,
                              message: "Missing description"
                            },
                          ]}
                          >
                            <Input
                              style={{marginLeft: '30px'}}
                              placeholder="Description"
                              // onChange={handleChange}
                              // value={formData.description}
                              name="description"
                            />
                          </Form.Item>
                          <Form.Item 
                          label="Payment Mode"
                          name="paymentMode"
                          rules={[
                            {
                              required: true,
                              message: "Missing mode"
                            },
                          ]}
                          >
                            <Select
                            style={{marginLeft: '30px'}}
                              // style={{ width: 120 }}
                              onChange={handleSelectChange}
                              name="paymentMode"
                              options={[
                                { value: "TRANSFER", label: "Transfer" },
                                { value: "CASH", label: "Cash" },
                              ]}
                            />
                          </Form.Item>
                          {mode === "TRANSFER" && (
                            <Form.Item label="Account Number" name="accountNumber">
                              <Input
                              style={{marginLeft: '30px'}}
                                placeholder="Account Number"
                                value={mode}
                                name="accountNumber"
                              />
                            </Form.Item>
                          )}
                        </Form>
                      </Modal>
                    </Space>
                  </div>
                </Col>
                {/* <Col
                  xs={{ span: 11, offset: 1 }}
                  lg={{ span: 6, offset: 2 }}
                ></Col> */}
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Space direction="vertical">
                    <Search
                      style={{marginLeft: '20em', paddingLeft: '14.5em'}}
                      placeholder="search for result"
                      onChange={(e) => setSearch(e.target.value)}
                      onSearch={onSearch}
                      enterButton
                    />
                  </Space>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="card"></div>
        <Card style={{ width: "100%", marginTop: '10px' }}>
          <Table columns={columns} dataSource={invoices}></Table>
        </Card>
      </div>
    </div>
  );
}

export default Payment;
