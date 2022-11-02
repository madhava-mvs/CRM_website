import Topbar from '../components/Topbar';
import LeftBar from '../components/LeftBar';
import Filterbar from '../components/Filterbar';
import Mainlist from '../components/Mainlist';
import TitleBar from '../components/Titlebar';

import axios from "axios";
import React from "react";
import { GiBeachBag } from "react-icons/gi";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import './Tasklist.css';

export default function Tasklist() {

    const [show, setShow] = useState(false);
    const titlebar_name = "TaskList"
    const [savebuttonshow , setsavebuttonshow]= useState(true);
    const button_value ="Add Task"


    const handleClick = () => {
        setShow(!show);
    };

    // const navigate = useNavigate();

    return (
        <>
            <div className='TasklistP'>
                <div className='TasklistP_content'>
                    <div className='TasklistP_content_topbar'><Topbar /></div>
                    <div className='TasklistP_contentL'>
                        <div className='TasklistP_content_leftbar'><LeftBar /></div>
                        <div className='TasklistP_contentR'>
                            <div className='TasklistP_content_titlebar'>
                                <TitleBar titlebar_name={titlebar_name} savebuttonshow={savebuttonshow} button_value={button_value} SaveLead={handleClick}/>
                                <div><Addtask show={show} setShow={setShow} /></div>
                            </div>

                            <div className='TasklistP_content_filterbar'><Filterbar /></div>
                            <div className='TasklistP_content_mainlist'><Mainlist /></div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


function Addtask({ show, setShow }) {
    const [errorall, seterrorall] = useState("");
    const [errors, seterrors] = useState("");
    const [errorc, seterrorc] = useState("");
    const [errord, seterrord] = useState("");
    const [errorstatus, seterrorstatus] = useState("");
    const [errora, seterrora] = useState("");
    const [errorl, seterrorl] = useState("");
    const [Subject, setSubject] = useState("");
    const [txtcomments, settxtcomments] = useState("");
    const [dtCreatedOn, setdtCreatedOn] = useState("");
    const [Assignedto, setAssignedto] = useState("");
    const [Status, setStatus] = useState("");
    const [LeadEmail, setLeadEmail] = useState("");
    const [errort, seterrort] = useState("");

    const loginClick = (e) => {
        // alert("added")
        if (Subject == "" || txtcomments == "" || dtCreatedOn == "" || Assignedto == "" || Status == "" || LeadEmail == "") {
            seterrorall(true)
        }
        else if (Subject != "" && txtcomments != "" && dtCreatedOn != "" && Assignedto != "" && Status != "" && LeadEmail != "") {
            seterrors("")
            seterrorc("")
            seterrord("")
            seterrorstatus("")
            seterrora("")
            seterrorl("")
            seterrort("")

           

            // const url = "http://localhost:3000/dev/addtask";
            const url = "https://mib9etxby0.execute-api.us-east-1.amazonaws.com/dev/addtask"
            const data = {
                Subject: Subject,
                txtcomments: txtcomments,
                dtCreatedOn: dtCreatedOn,
                Assignedto: Assignedto,
                Status: Status,
                LeadEmail: LeadEmail
            };
            const header = {}
            axios.post(url, data, { headers: header })
                .then((res) => {
                    console.log("Response==> " + JSON.stringify(res.data))
                    let result = res.data + " "
                    if (result.includes("Subject is empty"))
                        seterrors("Subject is empty")

                    if (result.includes("txtcomments is empty"))
                        seterrorc("txtcomments is empty")

                    if (result.includes("dtCreatedOn is empty"))
                        seterrord("dtCreatedOn is empty")

                    if (result.includes("Assignedto is empty"))
                        seterrora("Assignedto is empty")

                    if (result.includes("LeadEmail is empty"))
                        seterrorl("LeadEmail is empty")

                    if (result.includes("Status is empty"))
                        seterrorstatus("Status is empty")

                    if (result.includes("Task Inserted!"))
                        seterrort("Task Inserted!")
                })
                .catch((err) => {
                    console.log("error==> " + JSON.stringify(err))
                })
            //  }, []);
        }
    }
    return show ? (

        <>

            <div className=" A1">
                <div className="AddtaskPage">
                    <div className="full">
                        <div className="r1">
                            <div className="r1_details">
                                <div className="r1_bagSquare">
                                    <GiBeachBag className="r1_bagIcon" />
                                </div>
                                <div className="addtaskbold">
                                    <label>ADD TASK</label></div>
                                <div className=" log">
                                    <label>Log a call</label></div>
                                <div className="email">
                                    <label>Email</label></div>
                                <div className="r1_plus">
                                    <BsFillPlusCircleFill className="r1_plusIcon" />

                                    <button onClick={(e) => {
                                        loginClick(e);
                                    }} >SAVE</button>
                                </div>
                            </div>
                            <div className="whitebg">
                                <div className="rowitems">

                                    <label className="errort">{errort}</label>
                                   

                                    <div className="r2">
                                        <label>Task list details</label>
                                    </div>

                                    <div className="r3">

                                        <div className="r3_in" >

                                            <label>Subject</label><br></br>
                                            <input type="text" className="S" value={Subject} onChange={(e) => { setSubject(e.target.value) }} />

                                            <label className="errors">{errors}</label>
                                            {errorall && Subject == "" ? <label className="errors">Subject is empty</label> : ""}
                                        </div>
                                        <div className="r3_in">

                                            <label>Comments</label><br></br>
                                            <input type="text" className="S" value={txtcomments} onChange={(e) => { settxtcomments(e.target.value) }} />

                                            <label className="errorc">{errorc}</label>
                                            {errorall && txtcomments == "" ? <label className="errorc">txtcomments is empty</label> : ""}
                                        </div>
                                        <div className="r3_in">

                                            <label>created on</label><br></br>
                                            <input type="text" className="S" value={dtCreatedOn} onChange={(e) => { setdtCreatedOn(e.target.value) }} />

                                            <label className="errord">{errord}</label>
                                            {errorall && dtCreatedOn == "" ? <label className="errord">dtCreatedOn is empty</label> : ""}
                                        </div>
                                    </div>


                                    <div className="r4">
                                        <div className="r4_in">

                                            <label>Assigned to</label><br></br>
                                            <input type="text" className="S" value={Assignedto} onChange={(e) => { setAssignedto(e.target.value) }} />
                                            <label className="errora">{errora}</label>
                                            {errorall && Assignedto == "" ? <label className="errora">Assignedto is empty</label> : ""}
                                        </div>
                                        <div className="r4_in">

                                            <label>Lead email id</label><br></br>
                                            <input type="text" className="S" value={LeadEmail} onChange={(e) => { setLeadEmail(e.target.value) }} />
                                            <label className="errorl">{errorl}</label>
                                            {errorall && LeadEmail == "" ? <label className="errorl">LeadEmail is empty</label> : ""}
                                        </div>
                                        <div className="r4_in">

                                            <label>Status</label><br></br>
                                            <input type="text" className="S" value={Status} onChange={(e) => { setStatus(e.target.value) }} />
                                            <label className="errorstatus">{errorstatus}</label>
                                            {errorall && Status == "" ? <label className="errorstatus">Status is empty</label> : ""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    ) : (
        <></>
    );
}