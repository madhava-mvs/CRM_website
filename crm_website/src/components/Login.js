import './login.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import login_logo from "./images/Login_logo.png";
export default function LOGIN({Login,error1,error,username,password,setpassword,setusername}) {
    
    
    
   
    const navigate = useNavigate();
    function SignUp() {
        navigate('/SignUpPage')
    }
   
    
    return <>
        <div className='login'>
            <div className='login_outer_row1'>
                <div className='login_inner_row1'><img src={login_logo} /><label>Logo</label></div>
                <div className='login_inner_row2'>Welcome!</div>
                <div className='login_inner_row3'>Please Sign-in to your Account</div>
                <label className="login_err1">{error}</label>
                <div className='login_inner_row4'><input type='email' placeholder='Email' onChange={(e) => (setusername(e.target.value))} /></div>
                {error1 && username == "" ? <label className="login_Err">Username is mandatory</label> : ""}

                <div className='login_inner_row5'><input type='Password' placeholder='Password' onChange={(e) => (setpassword(e.target.value))} /></div>
                {error1 && password == "" ? <label className="login_Err">Password is mandatory</label> : ""}


                <div className='login_inner_row6'><input type='checkbox' /><label>Remember Me</label>
                    <a href='random'>Forgot Password?</a></div>
                <div className='login_inner_row7'><input type='submit' value="LOGIN" onClick={(e) => { Login(e) }/*{ setshowfail(true) }*/} /></div>

            </div>
            <div className='login_outer_row2'>
                <label>New member? </label><span onClick={SignUp}> SignUp</span>
            </div>
        </div>
    </>
}
