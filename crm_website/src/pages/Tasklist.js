import axios from "axios";
import { useState } from "react";
import "../pages/Tasklist.css";
import Topbar from "../components/Topbar";
import LeftBar from "../components/LeftBar";
import TitleBar from "../components/Titlebar";
import Filterbar from "../components/Filterbar";
import Mainlist from "../components/Mainlist";
import { useEffect } from "react";
import { GiBeachBag } from "react-icons/gi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { json } from "react-router-dom";

export default function Tasklist() {
  console.log("your in task list");

  const [array_campaign, setArray_campaign] = useState([]);
  const [array_lead, setArray_lead] = useState([]);
  const [array_user, setArray_user] = useState([]);

  function HandleClick() {
    const url_campaign =
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getcampaign";
    const data_campaign = {};
    const header_campaign = {};
    axios
      .post(url_campaign, data_campaign, { headers: header_campaign })
      .then((res) => {
        console.log(res.data);
        setArray_campaign(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const url_lead =
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getlead1";
    const data_lead = {};
    const header_lead = {};
    axios
      .post(url_lead, data_lead, { headers: header_lead })
      .then((res) => {
        console.log(res.data);
        setArray_lead(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const url_user =
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getsalesexecutive";
    const data_user = {};
    const header_user = {};
    axios
      .post(url_user, data_user, { headers: header_user })
      .then((res) => {
        console.log("user data array==>" + JSON.stringify(res.data));
        setArray_user(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setShow(!show);
  }

  const titlebar_name = "Task list";
  const button_value = "Add Task";
  const bulkimportshow = false;
  const savebuttonshow = true;
  const [show, setShow] = useState(false);

  const [array, setArray] = useState([]);

  // const url = "https://7z5c6akbv9.execute-api.us-east-1.amazonaws.com/verifyotp-dev-GetSingleLead";
  useEffect(() => {
    // const url = "http://localhost:3000/dev/Leadlist"

    const url =
      "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/Leadlist";
    const data = {};
    const Headers = {};
    axios
      .post(url, data, Headers)
      .then((res) => {
        console.log("Response==>" + JSON.stringify(res.data));
        for (const temp of res.data) {
          temp.isclicked = false;
        }
        console.log(res.data);
        setArray(res.data);
      })

      .catch((err) => {
        console.log("Error==>" + err);
      });
  }, []);

  return (
    <>
      <div className="Tasklist2_page">
        <div className="Tasklist2_div1">
          <Topbar />
        </div>
        <div className="Tasklist2_div2">
          <div className="Tasklist2_div2_left">
            <LeftBar />
          </div>
          <div className="Tasklist2_div2_right">
            <div className="Tasklist2_TitleBar">
              <TitleBar
                SaveLead={HandleClick}
                titlebar_name={titlebar_name}
                button_value={button_value}
                bulkimportshow={bulkimportshow}
                savebuttonshow={savebuttonshow}
              />
              <div>
                <Addtask
                  show={show}
                  setShow={setShow}
                  array_campaign={array_campaign}
                  array_lead={array_lead}
                  array_user={array_user}
                />
              </div>
            </div>
            <div className="Tasklist2_Filterbar">
              <Filterbar />
            </div>
            <div className="Tasklist2_Mainlist">
              <Mainlist array={array} setArray={setArray} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Addtask({ show, setShow, array_campaign, array_lead, array_user }) {
  const [errorall, seterrorall] = useState("");
  const [errors, seterrors] = useState("");
  const [errorc, seterrorc] = useState("");
  const [errord, seterrord] = useState("");
  const [errorstatus, seterrorstatus] = useState("");
  const [errora, seterrora] = useState("");
  const [errorl, seterrorl] = useState("");
  const [title, setTitle] = useState("");
  const [txtcomments, settxtcomments] = useState("");
  const [campaign_name, setCampaign_name] = useState("");
  const [lead_name, setLead_name] = useState("");
  const [activity, setActivity] = useState("");
  const [user_name, setUser_name] = useState("");
  const [errort, seterrort] = useState("");
  const [mapid, setMapid] = useState("");
  const [errortitle, setEtitle] = useState("");
  const [errorcomments, setEcomments] = useState("");
  const [errorcampaign, setEcampaign] = useState("");
  const [errorlead, setElead] = useState("");
  const [erroruser, setEuser] = useState("");
  const [erroractivity, setEactivity] = useState("");

  const userid = useSelector((state) => state.userid);

  const Save_Task = async () => {
    console.log(
      campaign_name + "," + lead_name + "," + user_name + "," + activity
    );
    if (title === "") {
      setEtitle("title is mandatory");
      setEcampaign("campaign is mandatory");
      setElead("lead is mandatory");
      setEuser("user is mandatory to assign");
      setEactivity("activity is mandatory");
    }
    else if(campaign_name == ""){
      setEtitle("");
      setEcampaign("campaign is mandatory");
      setElead("lead is mandatory");
      setEuser("user is mandatory to assign");
      setEactivity("activity is mandatory");
    }
    else if(lead_name == ""){
      setEtitle("");
      setEcampaign("");
      setElead("lead is mandatory");
      setEuser("user is mandatory to assign");
      setEactivity("activity is mandatory");
    }
    else if(user_name == ""){
      setEtitle("");
      setEcampaign("");
      setElead("");
      setEuser("user is mandatory to assign");
      setEactivity("activity is mandatory");
    }
    else if(activity == ""){
      setEtitle("");
      setEcampaign("");
      setElead("");
      setEuser("");
      setEactivity("activity is mandatory");
    }
    else {
      const url =
        "https://8mc8vdruyi.execute-api.us-east-1.amazonaws.com/dev/InsertTask1";
      const data = {
        userid: Number(user_name),
        campaignid: Number(campaign_name),
        leadid: Number(lead_name),
        title: title,
        txtcomments: txtcomments,
        activity: Number(activity),
      };
      const header = {};
      await axios
        .post(url, data, { headers: header })
        .then((res) => {
          console.log(JSON.stringify(res.data));
          setShow(!show);
        })
        .catch((err) => {
          console.log(err);
        });
    }


    //   function fun(){
    //     return new Promise((resolve)=>{
    //     const url1 =
    //   "https://xegps3cqo7.execute-api.us-east-1.amazonaws.com/dev/InsertTask";
    // const data1 = {
    //   title: title,
    //   txtcomments: txtcomments,
    //   activity: Number(activity),
    //   mapid: Number(mapid),
    // };
    // const header1 = {};
    // axios
    //   .post(url1, data1, { headers: header1 })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // },5000)

    // }
    // fun();
  };
  // const loginClick = (e) => {
  //     // alert("added")
  //     if (title == "" || txtcomments == "" || campaign_name == "" || lead_name == "" || Status == "" || user_name == "") {
  //         seterrorall(true)
  //     }
  //     else if (title != "" && txtcomments != "" && campaign_name != "" && lead_name != "" && Status != "" && user_name != "") {
  //         seterrors("")
  //         seterrorc("")
  //         seterrord("")
  //         seterrorstatus("")
  //         seterrora("")
  //         seterrorl("")
  //         seterrort("")

  //         // const url = "http://localhost:3000/dev/addtask";
  //         const url = "https://mib9etxby0.execute-api.us-east-1.amazonaws.com/dev/addtask"
  //         const data = {
  //             title: title,
  //             txtcomments: txtcomments,
  //             campaign_name: campaign_name,
  //             lead_name: lead_name,
  //             Status: Status,
  //             user_name: user_name
  //         };
  //         const header = {}
  //         axios.post(url, data, { headers: header })
  //             .then((res) => {
  //                 console.log("Response==> " + JSON.stringify(res.data))
  //                 let result = res.data + " "
  //                 if (result.includes("Subject is empty"))
  //                     seterrors("Subject is empty")

  //                 if (result.includes("txtcomments is empty"))
  //                     seterrorc("txtcomments is empty")

  //                 if (result.includes("dtCreatedOn is empty"))
  //                     seterrord("dtCreatedOn is empty")

  //                 if (result.includes("Assignedto is empty"))
  //                     seterrora("Assignedto is empty")

  //                 if (result.includes("LeadEmail is empty"))
  //                     seterrorl("LeadEmail is empty")

  //                 if (result.includes("Status is empty"))
  //                     seterrorstatus("Status is empty")

  //                 if (result.includes("Task Inserted!"))
  //                     seterrort("Task Inserted!")
  //             })
  //             .catch((err) => {
  //                 console.log("error==> " + JSON.stringify(err))
  //             })
  //         //  }, []);
  //     }
  // }
  return show ? (
    <>
      <div className=" A1">
        <div className="AddtaskPage">
          <div className="full">
            <div className="r1">
              <div className="r1_details">
                <div className="r1_bagsquare_addtaskbold">
                  <div className="r1_bagSquare">
                    <GiBeachBag className="r1_bagIcon" />
                  </div>
                  <div className="addtaskbold">
                    <label className="text_to_changecolor">ADD TASK</label>
                  </div>
                </div>
                <div className=" log">
                  <label className="text_to_changecolor">Log a call</label>
                </div>
                <div className="email">
                  <label className="text_to_changecolor">Email</label>
                </div>
                <div className="tasklist_r1_plus" onClick={Save_Task}>
                  <div>
                    <BsFillPlusCircleFill className="tasklist_r1_plusIcon" />
                  </div>

                  <div className="tasklist_savetext_button">
                    <label>SAVE</label>
                  </div>
                </div>
              </div>
              <div className="whitebg">
                <div className="rowitems">
                  <label className="errort">{errort}</label>

                  <div className="r2">
                    <label className="text_to_changecolor">Task list details</label>
                  </div>

                  <div className="r3">
                    <div className="r3_in">
                      <label className="text_to_changecolor">Title</label>
                      <br/>
                      <input
                        type="text"
                        className="S"
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />

                      {title == "" ? (
                        <>
                          <div>
                            <label className="errormessage_mandatory">{errortitle}</label>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="r3_in">
                      <label className="text_to_changecolor">Comments</label>
                      <br/>
                      <input
                        type="text"
                        className="S"
                        value={txtcomments}
                        onChange={(e) => {
                          settxtcomments(e.target.value);
                        }}
                      />
                    </div>
                    <div className="r3_in">
                      <label className="text_to_changecolor">Campaign name: </label>
                      <br/>
                      <br/>
                      <select
                        value={campaign_name}
                        onChange={(e) => setCampaign_name(e.target.value)}
                      >
                        <option value="">--Select--</option>
                        {array_campaign.map((itm, index) => {
                          return (
                            <>
                              <option value={itm.id}>
                                {itm.txtCampaignName}
                              </option>
                            </>
                          );
                        })}

                        {/*                                                 
                                                <option value="">--------------------</option>
                                                <option value="2">Owner</option>
                                                <option value="3">User</option> */}
                      </select>

                      {/* <label>created on</label><br></br>
                                            <input type="text" className="S" value={dtCreatedOn} onChange={(e) => { setdtCreatedOn(e.target.value) }} /> */}

                      {campaign_name == "" ? (
                        <>
                          <div>
                            <label className="errormessage_mandatory">{errorcampaign}</label>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <div className="r4">
                    <div className="r4_in">
                      <label className="text_to_changecolor">Lead :</label>
                      <br />
                      <br />
                      <select
                        value={lead_name}
                        onChange={(e) => setLead_name(e.target.value)}
                      >
                        <option value="">--Select--</option>
                        {array_lead.map((itm, index) => {
                          return (
                            <>
                              <option value={itm.id}>{itm.txtFirstName}</option>
                            </>
                          );
                        })}
                      </select>

                      {/* <label>Assigned to</label><br></br>
                                            <input type="text" className="S" value={Assignedto} onChange={(e) => { setAssignedto(e.target.value) }} /> */}
                      {lead_name == "" ? (
                        <>
                          <div>
                            <label className="errormessage_mandatory">{errorlead}</label>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="r4_in">
                      <label className="text_to_changecolor">Assigned to</label>
                      <br />
                      <br />
                      <select
                        value={user_name}
                        onChange={(e) => setUser_name(e.target.value)}
                      >
                        <option value="">--Select--</option>
                        {array_user.map((itm, index) => {
                          return (
                            <>
                              <option value={itm.id}>{itm.txtFirstName}</option>
                            </>
                          );
                        })}
                      </select>

                      {/* <label>Lead email id</label><br></br>
                                            <input type="text" className="S" value={LeadEmail} onChange={(e) => { setLeadEmail(e.target.value) }} /> */}
                      {user_name == "" ? (
                        <>
                          <div>
                            <label className="errormessage_mandatory">{erroruser}</label>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="r4_in">
                      <label className="text_to_changecolor">Activity :</label>
                      <br />
                      <br />

                      <select
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                      >
                        <option value="">--Select--</option>
                        <option value="1">Call</option>
                        <option value="2">Email</option>
                        <option value="3">SMS</option>
                      </select>
                      {activity == "" ? (
                        <>
                          <div>
                            <label className="errormessage_mandatory">{erroractivity}</label>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    {/* <div className="r4_in">

                                            <label>Status</label><br></br>
                                            <input type="text" className="S" value={Status} onChange={(e) => { setStatus(e.target.value) }} />
                                            <label className="errorstatus">{errorstatus}</label>
                                            {errorall && Status == "" ? <label className="errorstatus">Status is empty</label> : ""}
                                        </div> */}
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
