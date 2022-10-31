import LOGIN from './components/Login.js';
import Failed from './components/Alertfailed.js';
import axios from "axios";
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
export default function LoginPage() {
    const [showfail, setshowfail] = useState(false)
    const [error1, seterror1] = useState(false)
    const [error, setError] = useState("")
    const username = useSelector((state) => state.username)
    const token = useSelector((state)=> state.token)
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();
    const Login = (e) => {
        seterror1("")
        if (username == "" || password == "") {
            seterror1(true) 
        }
        else if (username != "" && password != "") {
            setError("")

            const url = "https://tkywgev296.execute-api.us-east-1.amazonaws.com/dev/Login";
            // const url = "http://localhost:3000/dev/Login";
            const data = { username: username, password: password };
            const headers = {};

            axios.post(url, data, {headers: headers})
                .then((res) => {
                    // if (username=="" && password==""){
                        let result = res.data + ""
                    // }
                    // else 
                    if (result.includes("Email or Password is invalid")){
                            setError("Email or Password is incorrect")
                            console.log("Email or Password is incorrect")
                    }else{
                        console.log( JSON.stringify(res.data))
                        dispatch({type:"setToken", payload:res.data})
                        console.log("token"+JSON.stringify(token))
                    }

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
        <LOGIN setshowfail={setshowfail} Login={Login} error1={error1} error={error} username={username} password={password} setpassword={setpassword} dispatch={dispatch} />
    </>
}