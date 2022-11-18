import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
// import { useState } from "react";
import "./Campaignlist_Mainlist.css";

export default function Campaignlist_Mainlist({array, setArray, Updatecampaign}) {
  // const [array, setArray] = useState([]);
  // const data = localStorage.getItem();
  
  return (
    <>
      <div className="Campaignlist_Mainlist_Outer">
        <div className="Campaignlist_Mainlist_box"></div>
        <div className="Campaignlist_Mainlist_header">
          <div className="Campaignlist_Mainlist_row1">
            <ul>
              
              <div className="Campaignlist_Header_Main1"><li>Campaign</li></div>
              <div className="Campaignlist_Header_Main2"><li>Parent Campaign</li></div>
              <div className="Campaignlist_Header_Main3"><li>Status</li></div>
              <div className="Campaignlist_Header_Main4"><li>StartDate </li></div>
              <div className="Campaignlist_Header_Main5"><li>End Date</li></div>
              <div className="Campaignlist_Header_Main7"><li>Owner</li></div>
            
              </ul>
          </div>
        </div>
        <div className="Campaignlist_Mainlist_Innerbox">
          <div className="Campaignlist_Mainlist_list">
          {array.map((itm, indx) => {
              return <ListRow itm={itm} array={array} setArray={setArray} Updatecampaign={Updatecampaign}/>;
            })}
            <div>
              <button className="Campaignlist_Mainlist_Button">load more leads</button>
            </div>
          </div>
          </div>
        </div>
    </>
  );
}





function ListRow({itm, array, setArray, Updatecampaign}) {
  const handleClick=(e, itm)=>{
    let temp=[...array];
    for (const iterator of temp) {
      if(itm.CampaignName === iterator.CampaignName){
        iterator.isclicked=!iterator.isclicked;
      }
    }
    setArray(temp)
  }
  const d=new Date(itm.dtcreatedon);
  let day = d.getDate();
  let month = d.getMonth()+1;
  let year = d.getFullYear();

  const d1=new Date(itm.Enddate);
  let day1 = d.getDate();
  let month1 = d.getMonth()+1;
  let year1 = d.getFullYear();
  return (
    <>
      <div className={itm.isclicked?"Campaignlist_Mainlist_list_row_topSelected":"Campaignlist_Mainlist_list_row_top"}  >
        <input className="Campaignlist_Cb" type="checkbox" onClick={e=>handleClick(e, itm)} checked={itm.isclicked? "true": ""}
/>
              <label for="checkbox"></label>
        <div className="Campaignlist_Mainlist_list_row"onClick={Updatecampaign(itm)}>
          <div className="Campaignlist_itmFirstName">{itm.CampaignName}</div>
          <div className="Campaignlist_itmLastName">{itm.ParentCampaignName}</div>
          <div className="Campaignlist_itmStatus">{itm.status}</div>
          <div className="Campaignlist_itmdate">{year}-{month}-{day}</div>
          <div className="Campaignlist_itmEmail">{year1}-{month1}-{day1}</div>
          <div className="Campaignlist_itmOwner">{itm.Owner}</div>
          <div className="Campaignlist_Mainlist_icon">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}
