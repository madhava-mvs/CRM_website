import "./Prospectpagelistmainlist.css";
import { AiOutlineArrowRight } from "react-icons/ai";
// import { dblClick } from "@testing-library/user-event/dist/click";
// import axios from "axios";
import React from "react";
// import { useState } from "react";
export default function Mainlist({array,setArray}) {
  // const [array, setArray] = useState([]);
  // useEffect(()=>{
  //   const url = "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/Getlead";
  //   const data = {};
  //   const Header = {};
  //   axios.post(url, data, { Headers: Header })
  //     .then((res) => {
  //       // setArray1(Json.stringify(res.data));
  //      console.log("Response==>" + JSON.stringify(res.data));
  //      setArray((res.data))
  //     })
  //     .catch((err) => {
  //       console.log("Error==>" + err);
  //     });
  //   },[]);
  return (
    <>
      <div className="prospectlistpage_Mainlist_Outer">
       
      <div className="prospectlistpage_header" >
   
              <div className="prospectlistpage_header1">FirstName</div>
              <div className="prospectlistpage_header2">Campaign</div>
              <div className="prospectlistpage_header3">Created on </div>
              <div className="prospectlistpage_header4">Updated on</div>
              <div className="prospectlistpage_header5">Created by</div>
            

    </div>
      
        <div className="prospectlistpage_Mainlist_Innerbox">
          <div className="prospectlistpage_Mainlist_list">
            {array.map((itm, indx) => {
              return <ListRow itm={itm} array={array} setArray={setArray} />;
            })}

            <div>
              <button className="prospectlistpage_Mainlist_Button">load more leads</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function ListRow({ itm, array, setArray }) {
  const handleClick = (e, itm) => {
    let temp = [...array];
    for (const iterator of temp) {
      if (itm.firstname == iterator.firstname) {
        iterator.isclicked = !iterator.isclicked;
      }
    }
    setArray(temp);
  };
  const d = new Date(itm.createdon);
  let day = d.getDate();
  let month=d.getMonth()+1;
  let year=d.getFullYear();

  const s = new Date(itm.updatedon);
  let sday = s.getDate();
  let smonth=s.getMonth()+1;
  let syear=s.getFullYear();

  return (
    <>
 
      <div className={itm.isclicked?"prospectlistpage_Mainlist_list_row_topSelected":"prospectlistpage_Mainlist_list_row_top"} >
        <input className="prospectlistpage_Cb" type="checkbox" onClick={e=>handleClick(e, itm)}/>
              <label for="checkbox"></label>
        <div className="prospectlistpage_Mainlist_list_row">

          
          <div className="prospectlistpage_itmfirstname">{itm.firstname}</div>
          <div className="prospectlistpage_itmcampaignname">{itm.campaignname}</div>
          <div className="prospectlistpage_itmcreatedon">{year}-{month}-{day}</div> 
          <div className="prospectlistpage_itmupdatedon">{syear}-{smonth}-{sday}</div> 
          <div className="prospectlistpage_itmusername">{itm.username}</div>
       
          <div className="prospectlistpage_Mainlist_icon">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}