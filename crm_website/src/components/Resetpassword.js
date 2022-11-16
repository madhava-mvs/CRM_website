import { useState } from "react"
import "./resetpassword.css"
import axios from "axios"
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
export default function Resetpassword() {
    const email = useSelector((state) => state.email);
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [Err1, setErr1] = useState("");
    const [Err2, setErr2] = useState("");
    const [Err3, setErr3] = useState("");
    const navigate=useNavigate()
    // const [email, setemail] = useState("")
    const resetpswd = (e) => {
        setErr1("")
        setErr2("")
        setErr3("")
        const url = "https://biw855rg2h.execute-api.us-east-1.amazonaws.com/dev/resetpassword"
        // "http://localhost:3000/dev/resetpassword"
        const data = { password: password, confirmpassword: confirmpassword,email:email };
        const headers = {};
        axios
            .post(url, data, { headers: headers })
            .then((res) => {
                console.log("response===>" + JSON.stringify(res.data))

                let result=res.data+""
                if (result.includes("password is mandatory"))
                    setErr1("Password is mandatory");
                if (result.includes("repassword is mandatory"))
                    setErr2("Repassword is mandatory");
                if (result.includes("repassword not match"))
                    setErr3("Password not match");
                if (result.includes("password reset")) 
                navigate("/")
            })
            .catch((err) => {
                console.log("err" + JSON.stringify(err))
            })
    }
    return <>



        <div className="resetpassword">
            <div className="outer_resetpassword">
                <div className="inner_resetpassword_row1"><label>Reset your Password</label></div>
                <div className="inner_resetpassword_row2"><label>NEW PASSWORD </label></div>
                <div className="inner_resetpassword_row3"><input type={"password"} placeholder={"NEW PASSWORD"} onChange={(e) => { setpassword(e.target.value) }} /></div>
                <label className="resetpassword_err">{Err1}</label>
                <div className="inner_resetpassword_row4"><label>CONFIRM NEW PASSWORD</label></div>
                <div className="inner_resetpassword_row5"><input type={"password"} placeholder={"CONFIRM NEW PASSWORD"} 
                onChange={(e) => { setconfirmpassword(e.target.value) }} /></div>
                <label className="resetpassword_err">{Err2}</label>
                <label className="resetpassword_err">{Err2}</label>
                <div className="inner_resetpassword_row6"><button onClick={(e) => { resetpswd() }}>Change Password</button></div>
            </div>
        </div>
    </>
}