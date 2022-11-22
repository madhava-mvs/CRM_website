import { IoMdContact } from "react-icons/io";
//import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import React, { useState } from "react";

import Pop from "./Pop.js";
import Pop2 from './Pop2';

import "./Task.css";
export default function Task({ item, campaignName, taskid, leadname, txtActivitytype, conversionid, Progresstypeid, owner, phone, email, Address, CreatedOn }) {
  const [status_of_lead, setStatus_of_lead] = useState("");
  const [activity_of_lead, setActivity_of_lead] = useState("");
  const [show1, setShow1] = useState("")
  // const [show2, setShow2] = useState("")
  const [show3, setShow3] = useState("")


  const handleclick = (e) => {
    setShow1(!show1)
  }
  // const handleclick1 = (e) => {
  //   setShow2(!show2)
  // }
  const handleclick2 = (e) => {
    setShow3(!show3)
  }

  return (
    <>
      <div className="task_box_outer">
        <div className="task_box_row1">
          <div className="userid">
            <label>{item.Taskid}</label></div>
          <div className="campaignname">
            <label>{item.txtCampaignName}</label>
          </div>
          <div className="Ldetails">
            <IoMdContact className="contact" onClick={handleclick} />
            {
              show1 ? (
                <>
                  {/* <div className="pop1">
                    <Pop1 leadname={leadname} txtActivitytype={txtActivitytype}conversionid={conversionid}Progresstypeid={Progresstypeid}owner={owner}phone={phone}email={email}Address={Address}CreatedOn={CreatedOn}/>
                  </div> */}
                  <div className="detail_box_outer">
                    <div className="detail_box_row1">
                      <label>{item.leadname}</label>
                    </div>
                    <div className="detail_box_row2"  >
                     
                      <select value={item.activitytypeid} onChange={(e) => setActivity_of_lead(e.target.value)}>
                        <option value="">null</option>
                        <option value="1">Call</option>
                        <option value="2">Email</option>
                        <option value="3">SMS</option>


                      </select>
                    </div>
                    <div className="detail_box_row3">
                      <label>{item.phone}</label>
                    </div>
                    <div className="detail_box_row4">
                      <label>{item.email}</label>
                    </div>
                    <div className="detail_box_row5">
                      <label>{item.Address}</label>
                    </div>
                    <div className="detail_box_row6">
                      <label>{item.CreatedOn}</label>
                    </div>

                  </div>
                </>
              ) : (
                <></>
              )
            }
          </div>
     
        </div>
        <div className="task_box_row2">
          <div className="txtP">
            <input type="text" placeholder=" "></input>
          </div>
        </div>
        <div className="task_box_row3">
          <div><AiOutlineMessage className="message" onClick={handleclick2} />
            {
              show3 ? (
                <>
                  <div className="pop2">
                    <Pop2 comments={item.Comments} />
                  </div>
                </>
              ) : (
                <></>
              )
            }
          </div>
          <div className="owner">
            <label>{item.owner}</label>
          </div>
          <div className="convstatus">
            {/* <input type="status"
              placeholder="status" value={status} onChange={(e) => { setStatus(e.target.value) }} />
            {status === ""} */}
            {/* <label className="text_to_changecolor">status:</label> */}
            <select value={item.conversionid}
              onChange={(e) => setStatus_of_lead(e.target.value)}>
              <option value="">status</option>
              <option value="1">New</option>
              <option value="2">Working</option>
              <option value="3">Nurturing</option>
              <option value="4">Lost</option>
              <option value="5">Prospect</option>

            </select>
          </div>
        </div>
      </div>
    </>)
}