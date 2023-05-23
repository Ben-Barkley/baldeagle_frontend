import React from 'react'
import {useParams} from 'react-router-dom';
import data from './Data'
import './Style.css'
import Sidenav from './Sidenav';
import logo5 from '../images/logo5.png'
import { useSelector } from 'react-redux';
import ActionBtn from './actionBtn/ActionBtn';
// comment section
import { Button, Form, Mentions, Space } from 'antd';


const { getMentions } = Mentions;

function Invoice() {
  const params = useParams();
  
  const invoiceItem = useSelector(state => state.invoice.find(item => item.id === parseInt(params.id)))
  const user = useSelector(state => state.user)
  
  const findAction = (status) => {
    switch (status) {
      case "START":
        if(user.email === invoiceItem.authorizer) {
          console.log("review")
          return "Review"
        } else {
          return null
        }
        
      case "REVIEWED":
        if(user.email === invoiceItem.approver) {
          console.log("approve")
          return "Approve"
        } else {
          return null
        }
      case "PAID":
        return null
      default:
        break;
    }
  }

  const action = findAction(invoiceItem.meta.status)

  // comment section

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('Submit:', values);
    } catch (errInfo) {
      console.log('Error:', errInfo);
    }
  };

  const checkMention = async (_: any, value: string) => {
    const mentions = getMentions(value);

    if (mentions.length < 2) {
      throw new Error('More than one must be selected!');
    }
  };

  
  return (
    
        <div className="contentz"  >
  
         <Sidenav />
  
          <div className="card" >
      
        <h2>Invoice</h2>
       
        <div className="tm_container">

        <div className="tm_invoice_wrap">
            <div className="tm_invoice tm_style1 tm_type1" id="tm_download_section"> 
            <div class="tm_invoice_in">  
          <div class="tm_invoice_head tm_top_head tm_mb15 tm_align_center">
            <div class="tm_invoice_left">
            <img src={logo5} alt="" />
            </div>
            <div class="tm_invoice_right tm_text_right tm_mobile_hide">
              <div class="tm_f50 tm_text_uppercase tm_white_color">Invoice</div>
            </div>
            <div class="tm_shape_bg tm_accent_bg tm_mobile_hide"></div>
          </div>
          <div class="tm_invoice_info tm_mb25">
            <div class="tm_card_note tm_mobile_hide"><b class="tm_primary_color">Payment Method: </b>{invoiceItem.paymentMode}</div>
            <div class="tm_invoice_info_list tm_white_color">
              <p class="tm_invoice_number tm_m0">Invoice No: <b>{invoiceItem.voucher_no}</b></p>
              <p class="tm_invoice_date tm_m0">Date: <b>{invoiceItem.meta.initiatedTime.join('-')}</b></p>
            </div>
            <div class="tm_invoice_seperator tm_accent_bg"></div>
            </div>
            <div class="tm_invoice_head tm_mb10">
            <div class="tm_invoice_left">
              <p class="tm_mb2"><b class="tm_primary_color">Department/Address:</b></p>
              
              <p>
              {invoiceItem.department}
              </p> 
            </div>
            <div class="tm_invoice_right tm_text_right">
              <p class="tm_mb2"><b class="tm_primary_color">Pay To:</b></p>
              <p>
              {invoiceItem.name}
              </p> 
              <p>
              {invoiceItem.receipient}
              </p>
            </div>
            </div>
            <div class="tm_table tm_style1">
            <div class="">
              <div class="tm_table_responsive">
                <table>
                  <thead>
                    <tr class="tm_accent_bg">
                      <th class="tm_width_3 tm_semi_bold tm_white_color">Name</th>
                      <th class="tm_width_2 tm_semi_bold tm_white_color">Price</th>
                      <th class="tm_width_1 tm_semi_bold tm_white_color">Qty</th>
                      <th class="tm_width_2 tm_semi_bold tm_white_color tm_text_right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      invoiceItem.particularsList.map(item => {
                        return (<tr>
                        <td class="tm_width_3">{item.name}</td>
                        <td class="tm_width_2">{item.price}</td>
                        <td class="tm_width_1">{item.quantity}</td>
                        <td class="tm_width_2 tm_text_right">{item.price*item.quantity}</td>
                        </tr>)
                      })
                    } 
                  </tbody>
                  </table>
                  </div>
                </div>
                <div class="tm_invoice_footer tm_border_top tm_mb15 tm_m0_md">
                <div class="tm_left_footer">
                <p class="tm_mb2"><b class="tm_primary_color">Payment status: </b></p>
                <p class="tm_m0">{invoiceItem.meta.status}</p>
                </div>
                <div class="tm_right_footer">
                <table class="tm_mb15">
                  <tbody>
                    {/* <tr class="tm_gray_bg ">
                      <td class="tm_width_3 tm_primary_color tm_bold">Subtoal</td>
                      <td class="tm_width_3 tm_primary_color tm_bold tm_text_right">#1650</td>
                    </tr>
                    <tr class="tm_gray_bg">
                      <td class="tm_width_3 tm_primary_color">Tax <span class="tm_ternary_color">(5%)</span></td>
                      <td class="tm_width_3 tm_primary_color tm_text_right">+#82</td>
                    </tr> */}
                    <tr class="tm_accent_bg">
                      <td class="tm_width_3 tm_border_top_0 tm_bold tm_f16 tm_white_color">Grand Total	</td>
                      <td class="tm_width_3 tm_border_top_0 tm_bold tm_f16 tm_white_color tm_text_right">{invoiceItem.totalAmount}</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                </div>
                <div class="tm_invoice_footer tm_type1">
                <div class="tm_left_footer"></div>
                <div class="tm_right_footer">
                <div class="tm_sign tm_text_center">
                  {/* <img src="assets/img/sign.svg" alt="Sign"> */}
                  <p class="tm_m0 tm_ternary_color">{invoiceItem.acctManager}</p>
                  <p class="tm_m0 tm_f16 tm_primary_color">Accounts Manager</p>
                </div>
                </div>
              </div>
              </div> 
              <div class="tm_note tm_text_center tm_font_style_normal">
              <hr class="tm_mb15" />
              {/* comment section */}
              <h3>Comments</h3>
              <Form form={form} layout="horizontal" onFinish={onFinish}>
     
      <Form.Item
        name="Comments"
        label="Comments"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        rules={[{ required: false }]}
      >
        <Mentions
          rows={3}
          placeholder="You can use @ to ref user here"
          options={[
            {
              value: 'James Wayne',
              label: 'James Wayne',
            },
            {
              value: 'Musa Ahmed',
              label: 'Musa Ahmed',
            },
            {
              value: 'Shade Adetoye',
              label: 'Shade Adetoye',
            },
          ]}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
        <Space wrap>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
              {/* end of comment */}
              <hr class="tm_mb15" />
              <p class="tm_mb2"><b class="tm_primary_color">Terms & Conditions:</b></p>
              {/* <p class="tm_m0">All claims relating to quantity or shipping errors shall be waived by Buyer unless made in writing to <br />Seller within thirty (30) days after delivery of goods to the address stated.</p> */}
              </div> 
              </div>

              </div>

              <div class="tm_invoice_btns tm_hide_print">
              <a href="javascript:window.print()" class="tm_invoice_btn tm_color1">
              <span class="tm_btn_icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><rect x="128" y="240" width="256" height="208" rx="24.32" ry="24.32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><circle cx="392" cy="184" r="24" fill='currentColor'/></svg>
              </span>
              <span class="tm_btn_text">Print</span>
              </a>
            <button id="tm_download_btn" class="tm_invoice_btn tm_color2">
            <span class="tm_btn_icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56M192 400.1l64 63.9 64-63.9M256 224v224.03" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
             </span>
            <span class="tm_btn_text">Download</span>
            </button>
          
        </div>
        {action != null ? <ActionBtn action={action} invoice={invoiceItem}/> : null}
        </div>
        </div>
        </div>
        </div>
    
  )
}

export default Invoice