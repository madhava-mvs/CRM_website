import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Verify from "./Otp";
import Failed from "./Alertfailed";
import Success1 from "./Alertsuccess1";
import { useDispatch, useSelector } from "react-redux";


import "./emailvalidation.css"
export default function Emailvalidation() {
    const [email, setemail] = useState("")
    // const email = useSelector((state) => state.email);
    // const [sh,setsh]=useState(false)
    const [show,setshow]=useState(false);
    const[show1,setshow1]=useState(false);
    const[show2,setshow2]=useState(false)
    const[OTP,setotp]=useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function login() {
        navigate("/")
    }
    const reset=(e)=>{
        dispatch({type:"setemail", payload:email})
        const url ="https://biw855rg2h.execute-api.us-east-1.amazonaws.com/dev/emalvalidation"
        // "http://localhost:3000/dev/emalvalidation"
        const data={email:email};
        const headers={};
        axios
        .post(url,data,{headers:headers})
        .then((res)=>{
            console.log("response===>"+JSON.stringify(res.data))
            let result=res.data+""
            if (result.includes("OTP send to reset"))
            setshow(true)

        })
        .catch((err)=>{
            console.log("Error===>"+JSON.stringify(err))
        })
    }
    return <>
     {/* {sh?(<><Verify setsh={setsh} /></>):(<></>)} */}
     {show?(<><Verify setshow={setshow} setshow1={setshow1} setshow2={setshow2} email={email} OTP={OTP} setotp={setotp} /></>):(<></>)}
    {show1?(<><Failed setshow1={setshow1} message={"Failed"} setotp={setotp}/></>):(<></>)}
    {show2?(<><Success1 setshow2={setshow2}/></>):(<></>)}
        <div className="emailvalidation">
            <div className="outer_emailvalidation">
                <div className="inner_emailvalidation_row1"><label>Forgot Password</label></div>
                <div className="inner_emailvalidation_row2"><label>Enter the email address </label></div>
                {/* <div className="inner_emailvalidation_row3"><label>we will send you OTP to reset your password.</label></div> */}
                <div className="inner_emailvalidation_row4"><label>EMAIL</label></div>
                {/* <div className="inner_emailvalidation_row5"><input type={"text"} placeholder={"example@email.com"} onChange={(e) => { setemail(e.target.value) }} /></div> */}
                <div className="inner_emailvalidation_row5"><input type={"text"} placeholder={"example@email.com"} value={email} onChange={(e)=>{setemail(e.target.value)}} /></div>
                <div className="inner_emailvalidation_row6"><button onClick={(e)=>{reset()}}>Reset Password</button></div>
                <div className="inner_emailvalidation_row7"><label>Back to <span onClick={login}>Login</span></label></div>
            </div>
        </div>

    </>
}