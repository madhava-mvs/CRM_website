import Test from '../components/Login.js';
import LOGIN from '../components/Login.js';
import Failed from '../components/Alertfailed.js';
import axios from "axios";
import { useState } from 'react';
import "./Login.css";
export default function LoginPage() {
    const [showfail, setshowfail] = useState(false)
    const [error1, seterror1] = useState(false)
    const [error, setError] = useState("")
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const Login = (e) => {
        seterror1("")
        if (username == "" || password == "") {
            seterror1(true)
        }
        else if (username != "" && password != "") {
            setError("")

            const url = "http://localhost:3000/dev/Login";
            const data = { username: username, password: password };
            const header = {};

            axios.post(url, data, header)
                .then((res) => {
                    console.log("rersponse" + JSON.stringify(res.data))
                    let result = res.data + ""
                    if (result.includes("Email or Password is invalid"))
                        setError("Email or Password is incorrect")


                })
                .catch((err) => {
                    console.log("error " + JSON.stringify(err))
                })
        }
    }
    return <>
        {showfail ?
            <>
                <Failed setshowfail={setshowfail} message={"Failed"} />
            </>
            :
            <>
            </>
        }
        <LOGIN setshowfail={setshowfail} Login={Login} error1={error1} error={error} username={username} password={password} setpassword={setpassword} setusername={setusername}/>
    </>
}
