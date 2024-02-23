import React from "react";
import './Pricetable.css'
import { Check2 } from 'react-bootstrap-icons';
import {XLg} from 'react-bootstrap-icons'
function Price () {
    return (
        <>
        <div className="parent">
           <div className="child_1">
               <h4>FREE</h4> 
              <span>
                <span className="font-month">$0</span>
                <sub>/month</sub>
                </span>
                <br/>
                <br/>
                <hr/>
                <ul type="none" className="ul">
                <br/>
                    <li>
                        <span className="check_1"><Check2/> </span>
                         <span>Single User</span>
                    </li> <br/>
                    <li>
                       <span className="check_2"><Check2/> </span>
                        5GB Storage
                    </li>  <br/>
                    <li>
                       <span className="check_3"><Check2/> </span>
                        Unlimited Public Projects
                    </li>  <br/>
                    <li>
                    <span className="check_4"><Check2/> </span>
                        Community Access
                    </li>  <br/>
                    <li className="light-font">
                    <span className="check_5"><XLg/> </span>
                        Unlimited Private Projects
                    </li>  <br/>
                    <li className="light-font">
                    <span className="check_6"><XLg/> </span>
                        Dedicated Phone Support
                    </li>  <br/>
                    <li className="light-font">
                    <span className="check_7"><XLg/> </span>
                        Free Subdomain
                    </li>  <br/>
                    <li className="light-font">
                    <span className="check_8"><XLg/> </span>
                        Monthly Status Reports</li>
                </ul><br/>
                <button className="btn">BUTTON</button>
           </div>
           <div className="child_2">
           <h4>PLUS</h4> 
              <span>
                <span className="font-month">$9</span>
                <sub>/month</sub>
                </span>
                <br/>
                <br/>
                <hr/>
                <ul type="none" className="ul">
                <br/>
                    <li>
                        <span className="check_21"><Check2/></span>
                         <span> <b> 5 Users</b></span>
                    </li> <br/>
                    <li>
                       <span className="check_2"><Check2/> </span>
                        50GB Storage
                    </li>  <br/>
                    <li>
                       <span className="check_3"><Check2/> </span>
                        Unlimited Public Projects
                    </li>  <br/>
                    <li>
                    <span className="check_4"><XLg/> </span>
                        Community Access
                    </li>  <br/>
                    <li >
                    <span className="check_5"><XLg/> </span>
                        Unlimited Private Projects
                    </li>  <br/>
                    <li>
                    <span className="check_6"><XLg/> </span>
                        Dedicated Phone Support
                    </li>  <br/>
                    <li>
                    <span className="check_7"><XLg/> </span>
                        Free Subdomain
                    </li>  <br/>
                    <li className="light-font">
                    <span className="check_8"><XLg/> </span>
                        Monthly Status Reports</li>
                </ul><br/>
                <button className="btn">BUTTON</button>
           </div>
           <div className="child_3">
           <h4>PRO</h4> 
              <span>
                <span className="font-month">$49</span>
                <sub>/month</sub>
                </span>
                <br/>
                <br/>
                <hr/>
                <ul type="none" className="ul">
                <br/>
                    <li>
                        <span className="check_31"><Check2/> </span>
                         <span><b>Unlimited Users</b></span>
                    </li> <br/>
                    <li>
                       <span className="check_32"><Check2/> </span>
                        150GB Storage
                    </li>  <br/>
                    <li>
                       <span className="check_33"><Check2/> </span>
                        Unlimited Public Projects
                    </li>  <br/>
                    <li>
                    <span className="check_34"><XLg/> </span>
                        Community Access
                    </li>  <br/>
                    <li>
                    <span className="check_35"><XLg/> </span>
                        Unlimited Private Projects
                    </li>  <br/>
                    <li>
                    <span className="check_36"><XLg/> </span>
                        Dedicated Phone Support
                    </li>  <br/>
                    <li>
                    <span className="check_37"><XLg/> </span>
                       <b>Unlimited</b> Free Subdomain
                    </li>  <br/>
                    <li>
                    <span className="check_38"><XLg/> </span>
                        Monthly Status Reports</li>
                </ul><br/>
                <button className="btn">BUTTON</button>
           </div>
        </div>
        </>
    )
}

export default Price;