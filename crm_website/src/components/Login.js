

import './login.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import login_logo from "./images/Login_logo.png";
import store from "../Store";


export default function LOGIN({ Login, error1, error, username, password, setpassword, remember, dispatch }) {

    const navigate = useNavigate();

    const [rememberMe, setRememberMe] = useState(false);

    function SignUp() {
        navigate('/SignUpPage')
    }

    function forgotpwd() {
        navigate("/emailvalidation")
    }


    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    useEffect(() => {
        // will become false on initial load, state will have true
        dispatch({ type: "setRememberMe", payload: !(store.getState().rememberMe) });
    }, [rememberMe]);

    useEffect(() => {
        if (document.cookie) {
            const unameInCookie = getCookie('username');
            dispatch({ type: "setEmail", payload: unameInCookie });
            // const passwordInCookie = getCookie('password');
        }
    }, []);

    // on logout execute this line dispatch({ type: "setEmail", payload: '' });

    return <>
        <div className='login'>
            <div className='login_outer_row1'>
                <div className='login_inner_row1'><img src={login_logo} /><label>Logo</label></div>
                <div className='login_inner_row2'>Welcome!</div>
                <div className='login_inner_row3'>Please Sign-in to your Account</div>
                <label className="login_err1">{error}</label>
                <div className='login_inner_row4'><input type='email' placeholder='Email' onChange={(e) => dispatch({ type: "setEmail", payload: e.target.value })} value={store.getState().email} /></div>
                {error1 && username == "" ? <label className="login_Err">Username is mandatory</label> : ""}

                <div className='login_inner_row5'><input type='Password' placeholder='Password' onChange={(e) => (setpassword(e.target.value))} /></div>
                {error1 && password == "" ? <label className="login_Err">Password is mandatory</label> : ""}


                <div className='login_inner_row6'><input type='checkbox' checked= {store.getState().rememberMe} onChange= {() => setRememberMe(!rememberMe)}/><label>Remember Me</label>
                    <span onClick={forgotpwd}>Forgot Password?</span></div>
                <div className='login_inner_row7'>
                    <input type='submit' value="LOGIN" onClick={(e) => { Login(e) }/*{ setshowfail(true) }*/} />
                </div>

            </div>
            <div className='login_outer_row2'>
                <label>New member? </label><span onClick={SignUp}> SignUp</span>
            </div>
        </div>
    </>
}
