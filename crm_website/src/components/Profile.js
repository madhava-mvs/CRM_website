import React from 'react'
import "./Profile.css";
import pic from "./images/pic.jpg"
import {FiMoreHorizontal} from "react-icons/fi";
import {MdKeyboardArrowDown} from "react-icons/md";
export default function Profile() {
    return (
      <>
      <div className='Profile_outer'>
                    <div className='Profile_outer_column1'>
                               <img src={pic} ></img>
                               <div className='Profile_name' >Nancy Powell  </div>
                               <div className='Profile_id' >c10001</div>
                    </div>
                    <div className='Profile_outer_row1'>
                               <input type="text"  placeholder="Personal Information"></input>
                               <FiMoreHorizontal className='Profile_more1' />
                    </div>
                    <div className='Profileouter_row2'>
                       <div className='Profile_fn' >FirstName</div>
                       <div className='Profile_ln'>Last Name</div>
                       <div className='Profile_email'>Email</div>
                       <div className='Profile_dob'>Date of Birth</div>
                    </div>
                    <div className='Profileouter_row3'>
                    <div className='Profile_a3' ><input   type="text" ></input></div>
                    <div className='Profile_b3' ><input   type="text" ></input></div>
                    <div className='Profile_c3' ><input   type="text" ></input></div>
                    <div className='Profile_d3'> <input   type="text" ></input></div>
                    <MdKeyboardArrowDown className='Profileouter_row3_downarrow'/>
                    </div>
                    <div className='Profileouter_row4'>
                       <div className='Profile_a4' >Address</div>
                       <div className='Profile_b4' >Password</div>
                       <div className='Profile_c4' >Confirm Password</div>
                    </div>
                    <div className='Profileouter_row5'>
                       <div className='Profile_a5'><input  type="text" ></input></div>
                       <div className='Profile_b5'><input  type="text" ></input></div>
                       <div className='Profile_c5'><input  type="text" ></input></div>
                    </div>

      </div>
      </>
  );
}


