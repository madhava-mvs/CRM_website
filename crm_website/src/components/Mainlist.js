import "./Mainlist.css";


import { AiOutlineArrowRight } from "react-icons/ai";
// import { useState } from "react";
export default function Mainlist({array, setArray}) {
  // const [array, setArray] = useState([]);
  // const data = localStorage.getItem();
  return (
    <>
      <div className="Mainlist_Outer">
        <div className="Mainlist_box"></div>
        <div className="Mainlist_header">
          <div className="Mainlist_row1">
            <ul>
              
              <div className="Header_Main1"><li>FirstName</li></div>
              <div className="Header_Main2"><li>LastName</li></div>
              <div className="Header_Main3"><li>Status</li></div>
              <div className="Header_Main4"><li>Created on </li></div>
              <div className="Header_Main5"><li>Email</li></div>
              <div className="Header_Main6"><li>Responses</li></div>
              <div className="Header_Main7"><li>Owner</li></div>
            
              </ul>
          </div>
        </div>
        <div className="Mainlist_Innerbox">
          <div className="Mainlist_list">
          {array.map((itm, indx) => {
              return <ListRow itm={itm} array={array} setArray={setArray}/>;
            })}
            <div>
              <button className="Mainlist_Button">load more leads</button>
            </div>
          </div>
          </div>
        </div>
    </>
  );
}





function ListRow({itm, array, setArray}) {
  const handleClick=(e, itm)=>{
    let temp=[...array];
    for (const iterator of temp) {
      if(itm.FirstName === iterator.FirstName){
        iterator.isclicked=!iterator.isclicked;
      }
    }
    setArray(temp)
  }
  const d=new Date(itm.CreatedOn);
  let day = d.getDate();
  let month = d.getMonth()+1;
  let year = d.getFullYear();
  return (
    <>
      <div className={itm.isclicked?"Mainlist_list_row_topSelected":"Mainlist_list_row_top"} >
        <input className="Cb" type="checkbox" onClick={e=>handleClick(e, itm)}/>
              <label for="checkbox"></label>
        <div className="Mainlist_list_row">
          <div className="itmFirstName">{itm.FirstName}</div>
          <div className="itmLastName">{itm.LastName}</div>
          <div className="itmStatus">{itm.Status}</div>
          <div className="itmdate">{year}-{month}-{day}</div>
          <div className="itmEmail">{itm.Email}</div>
          <div className="itmResponses">{itm.Responses}</div>
          <div className="itmOwner">{itm.Owner}</div>
          <div className="Mainlist_icon">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}
