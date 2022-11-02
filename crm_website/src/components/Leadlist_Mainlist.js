import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import "./Leadlist_Mainlist.css"
export default function Leadlist_Mainlist({array, setArray}) {
  // const [array, setArray] = useState([]);
  // const data = localStorage.getItem();
  
  return (
    <>
      <div className="Leadlist_Mainlist_Outer">
        <div className="Leadlist_Mainlist_box"></div>
        <div className="Leadlist_Mainlist_header">
          <div className="Leadlist_Mainlist_row1">
            <ul>
              <div className="Leadlist_Header_Main1"><li>FirstName</li></div>
              <div className="Leadlist_Header_Main2"><li>LastName</li></div>
              <div className="Leadlist_Header_Main3"><li>Status</li></div>
              <div className="Leadlist_Header_Main4"><li>Created on </li></div>
              <div className="Leadlist_Header_Main5"><li>Email</li></div>
              <div className="Leadlist_Header_Main6"><li>Responses</li></div>
              <div className="Leadlist_Header_Main7"><li>Owner</li></div>
              </ul>
          </div>
        </div>
        <div className="Leadlist_Mainlist_Innerbox">
          <div className="Leadlist_Mainlist_list">
          {array.map((itm, indx) => {
              return <ListRow itm={itm} array={array} setArray={setArray}/>;
            })}
            <div>
              <button className="Leadlist_Mainlist_Button">load more leads</button>
            </div>
          </div>
          </div>
        </div>
    </>
  );
}





function ListRow({itm, array, setArray}) {
  const dispatch = useDispatch()
  const handleClick=(e, itm)=>{
    let temp=[...array];
    for (const iterator of temp) {
      if(itm.FirstName === iterator.FirstName){
        iterator.isclicked=!iterator.isclicked;
      }
    }
    setArray(temp)
    console.log(array)
  }
  const navigate = useNavigate();
  const fetch = itm=>()=> {
    console.log(itm)
    dispatch({ type: "setUpdate_lead_id", payload: itm.id });
    console.log("id=====>"+JSON.stringify(itm.id))
    navigate("/Leadupdate");
    
  }
 

  const d=new Date(itm.CreatedOn);
  let day = d.getDate();
  let month = d.getMonth()+1;
  let year = d.getFullYear();
  return (
    <>
      <div className={itm.isclicked?"Leadlist_Mainlist_list_row_topSelected":"Leadlist_Mainlist_list_row_top"}  >
        <input className="Leadlist_Cb" type="checkbox" onClick={e=>handleClick(e, itm)}/>
              <label for="checkbox"></label >
        <div className="Leadlist_Mainlist_list_row" onClick={fetch(itm)}>
          <div className="Leadlist_itmFirstName">{itm.FirstName}</div>
          <div className="Leadlist_itmLastName">{itm.LastName}</div>
          <div className="Leadlist_itmStatus">{itm.Status}</div>
          <div className="Leadlist_itmdate">{year}-{month}-{day}</div>
          <div className="Leadlist_itmEmail">{itm.Email}</div>
          <div className="Leadlist_itmResponses">{itm.Responses}</div>
          <div className="Leadlist_itmOwner">{itm.Owner}</div>
          <div className="Leadlist_Mainlist_icon">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}
