import LOGIN from "../components/Login.js";
import Failed from "../components/Alertfailed.js";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import store from "../Store.js";

export default function LoginPage() {
  const nav = useNavigate();
  const [showfail, setshowfail] = useState(false);
  const [error1, seterror1] = useState(false);
  const [error, setError] = useState("");
  const username = useSelector((state) => state.email);
  const token = useSelector((state) => state.token);
  const userid = useSelector((state) => state.userid);
  const jobrole = useSelector((state)=>state.jobrole);
  const rememberMe = useSelector((state)=>state.rememberMe);
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  // let userinfo=[username,userid,jobrole,password]
  let userinfo=[jobrole]
  const Login = (e) => {

    console.log(rememberMe);
    seterror1("");
    if (username == "" || password == "") {
      seterror1(true);
    } else if (username != "" && password != "") {
      setError("");
      const url ="https://biw855rg2h.execute-api.us-east-1.amazonaws.com/dev/Login"
        // "https://xegps3cqo7.execute-api.us-east-1.amazonaws.com/dev/login";
      // const url = "https://tkywgev296.execute-api.us-east-1.amazonaws.com/dev/Login";
      // const url = "http://localhost:3000/dev/Login";
      
      const data = { username: username, password: password };
      const headers = {};

      axios
        .post(url, data, { headers: headers })
        .then((res) => {
          // if (username=="" && password==""){
          let result = res.data + "";
          // }
          // else
          if (result.includes("incorrect email or password")) {
            setError("Email or Password is incorrect");
            console.log("Email or Password is incorrect");
          } else if (result.includes("Not approved")) {
            setError("Not approved");
            console.log("Not approved");
          } else {
            console.log(JSON.stringify(res.data));
            dispatch({ type: "setToken", payload: res.data.token });
            dispatch({ type: "setUserid", payload: res.data.userid });
            dispatch({ type: "setUsername1", payload: res.data.username });
            dispatch({ type: "setJobrole", payload: res.data.jobrole });
            console.log("token" + JSON.stringify(token+"testinggggggg============"+userid));


            console.log(localStorage.setItem("userinfo",userinfo));
            // Setcookie for email
            console.log(store.getState().rememberMe)
            store.getState().rememberMe ? setCookie('username', username) : deleteCookie('username');
            if (res.data.jobrole === "Admin") {
              nav("/admindash");
            } else if (res.data.jobrole === "Manager") {
              nav("/managerdash");
            }
            else{
                nav("/salesDashboard")
            }
          }
        })
        .catch((err) => {
          console.log("error " + JSON.stringify(err));
        });
    }
  };
  // useEffect(()=>{
  //   let login = localStorage.getItem("userinfo");
  //   if (jobrole==="Admin"){
  //     nav('/admindash')
  //   }
  //   else if(jobrole==="Manager"){
  //     nav('/managerdash')
  //   }
  //   else{
  //     nav('/salesDashboard')
  //   }
  // })
  useEffect(()=>{
    let login=localStorage.getItem("userinfo")
    if (login=="Admin"){
      nav('/admindash')
    }
    else if(login=="Manager"){
      nav('/managerdash')
    }else if(login =="User"){
      nav('/salesDashboard')
    }
  },[])

  function setCookie(cname, uname) {
    document.cookie = `${cname}=${uname}`;
  }

  function deleteCookie(username) {
    document.cookie = `${username} =; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }

  return (
    <>
      {showfail ? (
        <>
          <Failed setshowfail={setshowfail} message={"Failed"} />
        </>
      ) : (
        <></>
      )}
      <LOGIN
        setshowfail={setshowfail}
        Login={Login}
        error1={error1}
        error={error}
        username={username}
        password={password}
        setpassword={setpassword}
        dispatch={dispatch}
      />
    </>
  );
}


