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
import Tasklist_filterbar from "../components/tasklist_filterpopup";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Tasklist() {
  const [selectall_isclicked, setSelectall_isclicked] = useState(true);
  const [array_mainlist, setArray_mainlist] = useState([]);
  const [array_mainlist_duplicate, setArray_mainlist_dplicate] = useState([]);
  const jobrole = useSelector((state) => state.jobrole);
  const userid = useSelector((state) => state.userid);
  const [filterpopup_show, setFilterpopup_show] = useState(false);
  const [array_campaign_filter, setArray_campaign_filter] = useState([]);
  const [array_tasklist_search, setArray_tasklist_search] = useState([]);
  const [campaign_name, setCampaign_name] = useState("");
  const [search_dropdownshow, setSearch_dropdownshow] = useState(false)
  
  const aftersearch_array = [];
  const editshow = true;
  useEffect(() => {
    //const url = "http://localhost:3000/dev/taskfetch";
    const url =
      // "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/gettasklist";
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/gettasklist";

    const data = {};
    const header = {};
    axios
      .post(url, data, { headers: header })
      .then((res) => {
        if (jobrole == "Admin") {
          console.log("Response of admin   ==>" + JSON.stringify(res.data));
          setArray_mainlist(res.data);
          setArray_mainlist_dplicate(res.data);
        } else if (jobrole == "Manager") {
          const url =
          "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/Taskofmanager"
            // "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/gettasklistmanager";
          // "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/gettasklist2";

          const data = {
            id: userid,
          };
          const header = {};
          axios
            .post(url, data, { headers: header })
            .then((res) => {
              console.log("Response   ==>" + JSON.stringify(res.data));
              setArray_mainlist(res.data);
              setArray_mainlist_dplicate(res.data);
            })
            .catch((err) => {
              console.log("Error==>" + err);
            });
        } else if (jobrole == "User") {
          const url =
          "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getsalestasklist9966"
          // "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/Taskofsalesperson1"
            // "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/gettasklist2";
            // "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/Taskofsalesperson"
          const data = {
            id: userid,
          };
          const header = {};
          axios
            .post(url, data, { headers: header })
            .then((res) => {
              console.log("Response   ==>" + JSON.stringify(res.data));
              setArray_mainlist(res.data);
              setArray_mainlist_dplicate(res.data);
            })
            .catch((err) => {
              console.log("Error==>" + err);
            });
        }
      })
      .catch((err) => {
        console.log("Error==>" + err);
      });

    ////////////////////////Api for fetching search list to search

    const url_search_tasklist =
      "https://8mc8vdruyi.execute-api.us-east-1.amazonaws.com/dev/getsearchlist_fortasklist";
    const data_search_tasklist = {
      userid: userid,
      jobrole: jobrole,
    };
    const header_search_tasklist = {};
    axios
      .post(url_search_tasklist, data_search_tasklist, {
        headers: header_search_tasklist,
      })
      .then((res) => {
        console.log("search list")
        console.log(res.data);
        setArray_tasklist_search(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    ///////////////////////Api for fetching campaign list for filter

    const url_campaign_filter =
      "https://8mc8vdruyi.execute-api.us-east-1.amazonaws.com/dev/getfiltercampaign";
    const data_campaign_filter = {
      userid: userid,
      jobrole: jobrole,
    };
    const header_campaign_filter = {};
    axios
      .post(url_campaign_filter, data_campaign_filter, {
        headers: header_campaign_filter,
      })
      .then((res) => {
        console.log(res.data);
        setArray_campaign_filter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //////////////////array for filter by status.

  const options_status = [
    { label: "To Do", value: "1" },
    { label: "In Progress", value: "2" },
    { label: "Completed", value: "3" },
  ];

  const handleClickselectall = (e, itm) => {
    setSelectall_isclicked(!selectall_isclicked);
    let temp = [...array_mainlist];
    if (selectall_isclicked === true) {
      for (const iterator of temp) {
        iterator.isclicked = true;
      }
    } else {
      for (const iterator of temp) {
        iterator.isclicked = false;
      }
    }
    setArray_mainlist(temp);
  };

  const [array_campaign, setArray_campaign] = useState([]);
  const [array_campaignbox, setArray_campaignbox] = useState([]);
  const [array_assignedbox, setArray_assignedbox] = useState([]);
  const [array_assignedbox__duplicate, setArray_assignedbox_duplicate] = useState([]);
  const [array_user, setArray_user] = useState([]);
 
  const [array_lead_duplicate, setArray_lead_duplicate] = useState([]);
  const [array_lead, setArray_lead] = useState([]);
  function HandleClick() {
    // useEffect(() => {
    const url_campaign =
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getcampaignt";
    const data_campaign = {
      id:userid
    };
    const header_campaign = {};
    axios
      .post(url_campaign, data_campaign, { headers: header_campaign })
      .then((res) => {
        console.log(res.data);
        setArray_campaign(res.data);
        setArray_assignedbox_duplicate(res.data)
      })
      .catch((err) => {
        console.log(err);
      });








      const url_campaignbox =
      // "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getcampaignbox1";
      // "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getcampaignbox1";
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getcampaignofthebox";
    const data_campaignbox = {
      id:userid
    };
    const header_campaignbox = {};
    axios
      .post(url_campaignbox, data_campaignbox, { headers: header_campaignbox })
      .then((res) => {
        console.log(res.data);
        setArray_campaignbox(res.data);
      })
      .catch((err) => {
        console.log(err);
      });









      const url_assignedbox =
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getassignedto";
    const data_assignedbox = {
     
    };
    const header_assignedbox = {};
    axios
      .post(url_assignedbox, data_assignedbox, { headers: header_assignedbox })
      .then((res) => {
        console.log(res.data);
        setArray_assignedbox(res.data);
        setArray_user(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
      
      const url_lead =
      // "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getlead1";
      // "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getleadfetch"
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/gettinglead_bycampaignid";
    const data_lead = {
  // id:11
    };
    const header_lead = {};
    axios
      .post(url_lead, data_lead, { headers: header_lead })
      .then((res) => {
        console.log("leadsbycampaignid")
        console.log(res.data)
        setArray_lead(res.data);
        setArray_lead_duplicate(res.data);
        console.log("setArray_lead"  + JSON.stringify(array_lead));
       
      })
      .catch((err) => {
        console.log(err);
      });
    
    

    // const url_user =
    //   "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getsalesexecutive";
    // const data_user = {
    //   id:userid
    // };
    // const header_user = {};
    // axios
    //   .post(url_user, data_user, { headers: header_user })
    //   .then((res) => {
    //     console.log("user data array==>" + JSON.stringify(res.data));
    //     console.log("nnnnnnnnnnnnnnnnnnnnnnnnnn"+campaign_name)
    //     setArray_user(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    setShow(!show);
  // }, []);
  }

  const titlebar_name = "Task list";
  const button_value = "Add Task";
  const bulkimportshow = false;
  const savebuttonshow = true;
  const [show, setShow] = useState(false);
  const tasklistsearchshow = true;
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

  const handleclickfilterbar_filter = () => {
    setFilterpopup_show(!filterpopup_show);
  };

  const handleclick_clearfilter = (val) =>{
    setFilterpopup_show(!filterpopup_show);
    setFilterpopup_show(!filterpopup_show);
  }

  const [search_value, setSearch_value] = useState("");

  const onChange = (event) => {
    setSearch_dropdownshow(true)
    setSearch_value(event.target.value);
  };

  const onSearch_updatevalue_from_dropdown = (searchTerm) => {
    setSearch_value(searchTerm);
    setSearch_dropdownshow(false)
  };

  const onSearch = (searchTerm) => {
    console.log("array task list search");
    console.log(array_tasklist_search);
    setSearch_value(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);

    if (searchTerm === "") {
      setArray_mainlist(array_mainlist_duplicate);
    } else if (
      searchTerm === "To Do" ||
      searchTerm === "In Progress" ||
      searchTerm === "Completed"
    ) {
      for (let i of array_mainlist_duplicate) {
        if (i.status === searchTerm) {
          aftersearch_array.push(i);
        }
      }
      setArray_mainlist(aftersearch_array);
    } else {
      for (let i of array_mainlist_duplicate) {
        if (i.campaignname === searchTerm) {
          aftersearch_array.push(i);
        }
      }
      for (let i of array_mainlist_duplicate) {
        if (i.owner === searchTerm) {
          aftersearch_array.push(i);
        }
      }
      setArray_mainlist(aftersearch_array);
    }
  };

  return (
    <>
      <div className="Tasklist2_page">
        {filterpopup_show ? (
          <Tasklist_filterbar
            handleclickfilterbar_filter={handleclickfilterbar_filter}
            array_mainlist_duplicate={array_mainlist_duplicate}
            array_mainlist={array_mainlist}
            setArray_mainlist={setArray_mainlist}
            options_status={options_status}
            array_campaign_filter={array_campaign_filter}
            filterpopup_show={filterpopup_show}
            setFilterpopup_show={setFilterpopup_show}
            handleclick_clearfilter={handleclick_clearfilter}
          />
        ) : (
          <></>
        )}
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
                  array_campaignbox={array_campaignbox}
                  array_assignedbox={array_assignedbox}
                  array_assignedbox_duplicate={array_assignedbox__duplicate}
                  array_lead={array_lead}
                  array_user={array_user}
                  setArray_user={setArray_user}
                  array_lead_duplicate={array_lead_duplicate}
                  setArray_lead={setArray_lead}


                />
              </div>
            </div>
            <div className="Tasklist2_Filterbar">
              <Filterbar
                editshow={editshow}
                handleselectall={handleClickselectall}
                handleclickfilterbar_filter={handleclickfilterbar_filter}
               
                tasklistsearchshow={tasklistsearchshow}
                search_array={array_tasklist_search}
                setSearch_array={setArray_tasklist_search}
                search_value={search_value}
                onChange={onChange}
                onSearch={onSearch}
                onSearch_updatevalue_from_dropdown={
                  onSearch_updatevalue_from_dropdown
                }
                search_dropdownshow={search_dropdownshow}
              />
            </div>
            <div className="Tasklist2_Mainlist">
              <Mainlist array={array_mainlist} setArray={setArray_mainlist} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
  // for (let i of array_lead1) {
  //   // if (i.campaignid=={campaign_name}) {
  //     if (i.campaignid==11) {
  //     new_array.push(i);
  //   }
  // }  const [array_lead_duplicate, setArray_lead_duplicate] = useState([]);
  // const [array_lead, setArray_lead] = useState([]);
  // setArray_lead(new_array);
// function Addtask({ show, setShow, array_campaign, array_lead,setArray_lead, array_user,array_lead1}) {
  function Addtask({ show, setShow, array_campaign,array_campaignbox,array_assignedbox, array_lead, setArray_lead, array_user,array_lead_duplicate,array_assignedbox__duplicate, setArray_user }) {
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
 
  const new_array_lead = [];
  const new_array_mapid = [];
  const new_array_assignedto = [];
  const userid = useSelector((state) => state.userid);
  const [mapidset, setMapidset] = useState("");
  // const [assigned, setAssigned] = useState("");
  const [arraytemp, setArraytemp] = useState("");



  const onchangecampaignid = (e) => {
    console.log("after changing campaign id")
    console.log(e.target.value)
    setCampaign_name(e.target.value)
    for(let i of array_lead_duplicate){
      if(i.campaignid == e.target.value){
        console.log(i)
        new_array_lead.push(i)

      
      }
    }
    setArray_lead(new_array_lead)
    setArraytemp(new_array_lead)

    console.log("setting assignedto")
    for(let i of array_assignedbox){
      if(i.refcampaignid == e.target.value){
        console.log(i)
        new_array_assignedto.push(i)

      
      }
    }
    // setAssigned(new_array_assignedto)
    // array_assignedbox__duplicate(new_array_assignedto)
    setArray_user(new_array_assignedto)


  }


 




  const onchangeleadid = (e) => {
    console.log("after changing lead id")
    console.log(e.target.value)
    setLead_name(e.target.value)
    for(let i of arraytemp){
      if(i.id == e.target.value){
        console.log("coresponding map id")
        console.log(i)
        console.log(i.leadmapid)
        new_array_mapid.push(i.leadmapid)
        // new_array_lead.push(i)
      }
 
    }
    setMapidset(new_array_mapid)
  }














  const Save_Task = async () => {
    console.log(
      title+","+txtcomments+","+campaign_name + "," + lead_name + "," + user_name + "," + activity+","+mapidset
    );
    if (title === "") {
      setEtitle("title is mandatory");
      setEcampaign("campaign is mandatory");
      setElead("lead is mandatory");
      setEuser("user is mandatory to assign");
      setEactivity("activity is mandatory");
    } else if (campaign_name == "") {
      setEtitle("");
      setEcampaign("campaign is mandatory");
      setElead("lead is mandatory");
      setEuser("user is mandatory to assign");
      setEactivity("activity is mandatory");
    } else if (lead_name == "") {
      setEtitle("");
      setEcampaign("");
      setElead("lead is mandatory");
      setEuser("user is mandatory to assign");
      setEactivity("activity is mandatory");
    } else if (user_name == "") {
      setEtitle("");
      setEcampaign("");
      setElead("");
      setEuser("user is mandatory to assign");
      setEactivity("activity is mandatory");
    } else if (activity == "") {
      setEtitle("");
      setEcampaign("");
      setElead("");
      setEuser("");
      setEactivity("activity is mandatory");
    } else {
      const url =
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/Insertinglead"
      // "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/Insertlead99"
        // "https://8mc8vdruyi.execute-api.us-east-1.amazonaws.com/dev/InsertTask1";
        // "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/InsertTask1";
      const data = {
        userid: Number(user_name),
        campaignid: Number(campaign_name),
        leadid: Number(lead_name),
        title: title,
        txtcomments: txtcomments,
        activity: Number(activity),
        mapidset:Number(mapidset)
      };
      const header = {};
      await axios
        .post(url, data, { headers: header })
        .then((res) => {
          console.log(JSON.stringify(res.data));
          if(res.data=="already exist in 2"){
            seterrort("already exist")
          }
          else{
            setShow(!show);
            // window.location.reload();
          }
         
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setTitle("")
    settxtcomments("")
    setCampaign_name("")
    setLead_name("")
    setUser_name("")
    setActivity("")
    

  };
  
  const handleclick7 = (e) => {
    setShow(!show);
    setTitle("")
    settxtcomments("")
    setCampaign_name("")
    setLead_name("")
    setUser_name("")
    setActivity("")
    seterrort("")
  };
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
                  {/* <label className="text_to_changecolor">Log a call</label> */}
                </div>
                <div className="email">
                  {/* <label className="text_to_changecolor">Email</label> */}
                </div>
                <div className="tasklist_r1_plus" onClick={Save_Task}>
                  <div>
                    <BsFillPlusCircleFill className="tasklist_r1_plusIcon" />
                  </div>

                  <div className="tasklist_savetext_button">
                    <label>SAVE</label>
                  </div>
                  <AiFillCloseCircle className="tasklist_cancel" onClick={(e) => { handleclick7(e) }} />
                </div>
              
                
              </div>
              
              <div className="whitebg">
                <div className="rowitems">
                  <label className="errort">{errort}</label>

                  <div className="r2">
                    <label className="text_to_changecolor">
                      Task list details
                    </label>
                  </div>

                  <div className="r3">
                    <div className="r3_in">
                      <label className="text_to_changecolor">Title*</label>
                      <br />
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
                            <label className="errormessage_mandatory">
                              {errortitle}
                            </label>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="r3_in">
                      <label className="text_to_changecolor">Comments</label>
                      <br />
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
                      <label className="text_to_changecolor">
                     Campaign name*{" "}
                      </label>
                      <br />
                      <br />
                      <select
                        value={campaign_name}
                        onChange={(e) => onchangecampaignid(e)}
                      >
                        <option value="">--Select--</option>
                        {array_campaignbox.map((itm, index) => {
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
                            <label className="errormessage_mandatory">
                              {errorcampaign}
                            </label>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <div className="r4">
                    <div className="r4_in">
                      <label className="text_to_changecolor">Lead*</label>
                      <br />
                      <br />
                      <select
                        value={lead_name}
                        onChange={(e) => onchangeleadid(e)}
                        // onChange={(e) => setLead_name(e.target.value)}
                      >
                        <option value="">--Select--</option>


                      
                        {array_lead.map((itm, index) => {
                      
                          return (
                            <>
                              <option value={itm.id}>{itm.firstname}</option>
                     
                            </>
                          );
                        
                          
                        })}
                      </select>

                      {/* <label>Assigned to</label><br></br>
                                            <input type="text" className="S" value={Assignedto} onChange={(e) => { setAssignedto(e.target.value) }} /> */}
                      {lead_name == "" ? (
                        <>
                          <div>
                            <label className="errormessage_mandatory">
                              {errorlead}
                            </label>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="r4_in">
                      <label className="text_to_changecolor">Assigned to*</label>
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
                              <option value={itm.refuserid}>{itm.txtFirstName}</option>
                            </>
                          );
                        })}
                      </select>

                      {/* <label>Lead email id</label><br></br>
                                            <input type="text" className="S" value={LeadEmail} onChange={(e) => { setLeadEmail(e.target.value) }} /> */}
                      {user_name == "" ? (
                        <>
                          <div>
                            <label className="errormessage_mandatory">
                              {erroruser}
                            </label>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="r4_in">
                      <label className="text_to_changecolor">Activity*</label>
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
                            <label className="errormessage_mandatory">
                              {erroractivity}
                            </label>
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
