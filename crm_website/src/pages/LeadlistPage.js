import axios from "axios";
import { useState} from "react";
import "./LeadlistPage.css";
import Topbar from "./components/Topbar";
import LeftBar from "./components/LeftBar";
import TitleBar from "./components/Titlebar";
import Filterbar from "./components/Filterbar";
import Mainlist from "./components/Mainlist";
import { useEffect } from "react";
export default function LeadListPage() {
  
  const [array, setArray] = useState([]);


    // const url = "https://7z5c6akbv9.execute-api.us-east-1.amazonaws.com/verifyotp-dev-GetSingleLead";
    useEffect(()=>{
    const url = "http://localhost:3000/dev/GetSingleLead"
    // const url = "https://h5mqgjmos4.execute-api.us-east-1.amazonaws.com/dev/GetSingleLead";

    const data = {};
    const Headers = {token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhYUB4eXouY29tIiwicGFzc3dvcmQiOiJhMTIzNDUiLCJpYXQiOjE2NjY2ODI4ODB9.K4Y5_douK9aWWCBriunBp-rX3nTNByY23yyOtEPD2kc"};
    
    axios.post(url, data, { Headers: Headers })
      .then((res) => {
        console.log("Response==>" + JSON.stringify(res.data));
        for(const temp of res.data){
          temp.isclicked = false
        }
        console.log(res.data)
        setArray(res.data)
        
      })

      .catch((err) => {
        console.log("Error==>" + err);
      });
    },[])


  return (
    <>
      <div className="Leadlist_page">
        <div className="div1">
          <Topbar />
        </div>
        <div className="div2">
          <div className="div2_left">
            <LeftBar />
          </div>
          <div className="div2_right">
            <div className="Leadlist_TitleBar">
              <TitleBar />
            </div>
            <div className="Leadlist_Filterbar">
              <Filterbar />
            </div>
            <div className="Mainlist">
              <Mainlist array={array} setArray={setArray} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
