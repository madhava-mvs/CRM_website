import "./Mainlist.css";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
export default function Mainlist({array, setArray}) {
  
  return (
    <>
      <div className="Mainlist_Outer">
        <div className="Mainlist_box"></div>
        <div className="TaskList_Mainlist_header">
              <div className="Tasklist_header1">Subject</div>
              <div className="Tasklist_header2">Status</div>
              <div className="Tasklist_header3">dtCreatedon</div>
              <div className="Tasklist_header4">LeadEmail</div>
              <div className="Tasklist_header5">Owner</div>
        </div>
        <div className="Tasklist_Mainlist_Innerbox">
          <div className="Tasklist_Mainlist_list">
            {array.map((itm, indx) => {
              return <ListRow itm={itm} array={array} setArray={setArray} />;
            })}
            <div>
              <button className="Tasklist_Mainlist_Button">
                load more tasks
              </button>
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
      if (itm.leademail === iterator.leademail) {
        iterator.isclicked = !iterator.isclicked;
      }
    }
    setArray(temp);
  };
  const d = new Date(itm.dtcreatedon);
  let day = d.getDate();
  let month = d.getMonth()+1;
  let year = d.getFullYear();
  return (
    <>
      <div
        className={
          itm.isclicked
            ? "Tasklist_Mainlist_list_row_topSelected"
            : "Tasklist_Mainlist_list_row_top"
        }
      >
        <input
          className="Tasklist_Cb"
          type="checkbox"
          onChange={(e) => {
            handleClick(e, itm)
          }}
          checked={itm.isclicked? "true": ""}
        />
        <div className="Tasklist_Mainlist_list_row">
          {/* <div className="itmSubject">{itm.Subject}</div>

          <div className="itmStatus">{itm.Status}</div>

          <div className="itmdate">{year}-{month}-{day}</div>


          <div className="itmLeadEmail">{itm.LeadEmail}</div>


          <div className="itmowner">{itm.owner}</div> */}

          <div className="task_itmSubject">{itm.subject}</div>

          <div className="task_itmStatus">{itm.status}</div>

          <div className="task_itmdate">
            {year}-{month}-{day}
          </div>

          <div className="task_itmLeadEmail">{itm.leademail}</div>

          <div className="task_itmowner">{itm.owner}</div>
          <div className="Tasklist_Mainlist_icon">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <AiOutlineArrowRight /> */
}
