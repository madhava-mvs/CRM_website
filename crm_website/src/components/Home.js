import React from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Home(){
    const token =localStorage.getItem("tokenvariable");

useEffect(()=>{


    const url = "http://localhost:3000/dev/getsingleprofile";
    const data = {};
    const headers = {token:token};

    axios.post(url, data, {headers:headers,})
        .then((res) => {
            console.log("rersponse" + JSON.stringify(res.data))})
        .catch((err) => {
            console.log("error" + err)
        })
    },[])
    return <>
      <div>Token : {token}</div>
    </>
}