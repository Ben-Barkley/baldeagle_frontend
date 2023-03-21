import React from 'react'
import {useParams} from 'react-router-dom';
import data from './Data'
import './Style.css'
import Sidenav from './Sidenav';
import logo5 from '../images/logo5.png'




function Invoice() {
  const params = useParams();
  

  const invoiceItem = data.find(item => item.id === params.id)
  console.log(invoiceItem, data, params.id)
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
            <div class="tm_card_note tm_mobile_hide"><b class="tm_primary_color">Payment Method: </b>{invoiceItem.paymentType}</div>
            <div class="tm_invoice_info_list tm_white_color">
              <p class="tm_invoice_number tm_m0">Invoice No: <b>#LL93784</b></p>
              <p class="tm_invoice_date tm_m0">Date: <b>{invoiceItem.date}</b></p>
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
                      <th class="tm_width_3 tm_semi_bold tm_white_color">Item</th>
                      <th class="tm_width_4 tm_semi_bold tm_white_color">Description</th>
                      <th class="tm_width_2 tm_semi_bold tm_white_color">Price</th>
                      <th class="tm_width_1 tm_semi_bold tm_white_color">Qty</th>
                      <th class="tm_width_2 tm_semi_bold tm_white_color tm_text_right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* <td class="tm_width_3">1. Website Design</td> */}
                      <td class="tm_width_3">{invoiceItem.item}</td>
                      <td class="tm_width_4">{invoiceItem.desc}</td>
                      <td class="tm_width_2">{invoiceItem.amount}</td>
                      <td class="tm_width_1">{invoiceItem.qty}</td>
                      <td class="tm_width_2 tm_text_right">{invoiceItem.total}</td>
                    </tr>
                    {/* <tr>
                      <td class="tm_width_3">2. Web Development</td>
                      <td class="tm_width_4">Convert pixel-perfect frontend and make it dynamic</td>
                      <td class="tm_width_2">#600</td>
                      <td class="tm_width_1">1</td>
                      <td class="tm_width_2 tm_text_right">#600</td>
                    </tr>
                    <tr>
                      <td class="tm_width_3">3. App Development</td>
                      <td class="tm_width_4">Android & Ios Application Development</td>
                      <td class="tm_width_2">#200</td>
                      <td class="tm_width_1">2</td>
                      <td class="tm_width_2 tm_text_right">#400</td>
                    </tr>
                    <tr>
                      <td class="tm_width_3">4. Digital Marketing</td>
                      <td class="tm_width_4">Facebook, Youtube and Google Marketing</td>
                      <td class="tm_width_2">#100</td>
                      <td class="tm_width_1">3</td>
                      <td class="tm_width_2 tm_text_right">#300</td>
                    </tr> */}
                  </tbody>
                  </table>
                  </div>
                </div>
                <div class="tm_invoice_footer tm_border_top tm_mb15 tm_m0_md">
                <div class="tm_left_footer">
                <p class="tm_mb2"><b class="tm_primary_color">Payment status:</b></p>
                <p class="tm_m0">{invoiceItem.status}</p>
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
                      <td class="tm_width_3 tm_border_top_0 tm_bold tm_f16 tm_white_color tm_text_right">{invoiceItem.total}</td>
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
        </div>
        </div>
        </div>
        </div>
    
  )
}

export default Invoice