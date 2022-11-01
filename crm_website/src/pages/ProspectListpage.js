import React from "react";

import "./ProspectListpage.css";
import Topbar from "../components/Topbar";
import LeftBar from "../components/LeftBar";
import Titlebar from "../components/Titlebar";
import Filterbar from "../components/Filterbar";
import Prospectpagelistmainlist from "../components/Prospectpagelistmainlist";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import Form from "./components/Form";

export default function ProspectListpage() {
  const titlebar_name = "Prospects";
  const titlebar_value1 = "Active";
  const titlebar_value2 = "Draft";
  const titlebar_value3 = "Assembly";
  const middledivshow = true;
  const [array, setArray] = useState([]);
  // const [title, setTitle]=useState("Prospects")
  // const [show, setShow]=useState(true)
  useEffect(() => {
    // const url = "http://localhost:3000/dev/Getlead";
    const url =
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/Getlead";
    const data = {};
    const Headers = {};
    axios
      .post(url, data, { headers: Headers })
      .then((res) => {
        // setArray1(Json.stringify(res.data));
        console.log("Response==>" + JSON.stringify(res.data));
        setArray(res.data);
      })
      .catch((err) => {
        console.log("Error==>" + err);
      });
  }, []);
  return (
    <>
      <div className="ProspectListpage">
        <div className="ProspectListpage_Admindashboard">
          <Topbar />
        </div>

        <div className="ProspectListpage_LeftBar">
          <LeftBar />
        </div>
        <div className="ProspectListpage_container">
          {/* <div className="Productsrow">
    <div className="Productlogo" ><BsFillBagCheckFill/></div>
    <div className="title">Products</div>
    <div className="Active">Products</div>
    <div className="Draft">Products</div>
    <div className="Assembly">Products</div>
    <div className="addlogo"></div>
    
    <button>Add product</button>
  </div> */}
          <div className="ProspectListpage_Filterbar">
            {/* <Titlebar title={title} show={show}/> */}
            {/* <Titlebar/> */}
            <Titlebar
            middledivshow={middledivshow}
              titlebar_name={titlebar_name}
              titlebar_value1={titlebar_value1}
              titlebar_value2={titlebar_value2}
              titlebar_value3={titlebar_value3}
            />
          </div>
          <div className="ProspectListpage_Filterbar">
            <Filterbar />
          </div>
          <div className="ProspectListpage_Mainlist">
            <Prospectpagelistmainlist array={array} setArray={setArray} />
          </div>
        </div>
      </div>
    </>
  );
}
