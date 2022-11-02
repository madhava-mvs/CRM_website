// import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
// import {
//     BsThreeDots,
//     BsFillBellFill,
// } from "react-icons/bs";
// import { CgProfile } from "react-icons/cg";
// // import { AiFillPlusCircle } from 'react-icons/ai';
// import { MdArrowForwardIos, MdCancel } from "react-icons/md";
// import { BsFillBookFill } from "react-icons/bs";
// import { FaCarAlt } from "react-icons/fa";
// import React, { useState } from "react";

// import './Topbar.css';
// export default function Topbar() {
//     const [show, setShow] = useState(false)
//     const handleclick = (e) => {
//         setShow(!show)
//     };

//     return (
//         <>
//             <div className="Topbar_header">
//                 <div className="Topbar_col1">
//                     <div className="Topbar_icon_circle">
//                         <AiOutlineMenu />

//                     </div><h3>Company</h3>

//                 </div>
//                 <div className="Topbar_col2" >
//                     <ul>
//                         <li>Dashboard</li>
//                         <li>Account</li>
//                         <div className="Tobar_col2_on" onClick={(e) => { handleclick(e) }}><li>leads</li></div>
//                         <div className="Tobar_col2_on1" onClick={(e) => { handleclick(e) }}><li>campaigns</li></div>
//                         <div className="Tobar_col2_on2" onClick={(e) => { handleclick(e) }}><li>prospect</li></div>
//                         <li>
//                             <BsThreeDots />
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="Topbar_col3">
//                     <AiOutlineSearch className="Topbar_searchIcon" />
//                     <input type={"text"} placeholder="Search Products,Orders and Clients" />
//                     <MdArrowForwardIos className="Topbar_arrowIcon" />
//                 </div>
//                 <div className="Topbar_col4">
//                     <CgProfile className="Topbar_profileIcon" />
//                     <div className="Clayton">
//                         <label>Clayton Santos</label>
//                     </div>
//                 </div>
//                 <div className="Topbar_col5">
//                     <div className="Topbar_Bell_Circle">
//                         <BsFillBellFill className="Topbar_BellIcon" />
//                     </div>
//                     <div className="Topbar_cancel_circle">
//                         <MdCancel className="Topbar_cancelIcon" />
//                     </div>
//                 </div>
//             </div>

//             {
//                 show ? (

//                     <div className="Topbar_content">
//                         <div className="Topbar_content_cola">
//                             <div className="Topbar_content_cola_list">
//                                 <BsFillBookFill className="Topbar_bookicon" />
//                                 <label> Leads</label>
//                             </div>
//                             <div className="Topbar_content_cola_list">
//                                 <BsFillBookFill className="Topbar_bookicon" />
//                                 <label> Campaign</label>
//                             </div>
//                             <div className="Topbar_content_cola_list">
//                                 <BsFillBookFill className="Topbar_bookicon" />
//                                 <div className="Tobar_col2_Tasks" onClick={(e) => { handleclick(e) }}><label>Tasks</label></div>
//                             </div>
//                             <div className="Topbar_content_cola_list">
//                                 <BsFillBookFill className="Topbar_bookicon" />
//                                 <label>Prospects</label>
//                             </div>
//                             <div className="Topbar_content_cola_list1"></div>
//                             <div className="Topbar_content_cola_list1"></div>
//                             <div className="Topbar_content_cola_list1"></div>
//                             <div className="Topbar_content_cola_list1"></div>
//                             <div className="Topbar_content_cola_list1"></div>
//                         </div>

//                         <div className="Topbar_col2_Leadpopup">
//                             <div className="Topbar_content_colb">
//                                 <label className="Topbar_label_head">Leads</label>

//                                 <div className="Topbar_content_colb_list">
//                                     <div className="Topbar_content_colb_list1">
//                                         <FaCarAlt className="Topbar_caricon" />
//                                         <div className="Tobar_col2_listlead" onClick={(e) => { handleclick(e) }}><label>List Leads</label></div>
//                                     </div>
//                                     <div className="Topbar_content_colb_list1">
//                                         <BsFillBookFill className="Topbar_bookicon" />
//                                         <label>Create Lead</label>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>

//                         <div className="Topbar_col2_Campaignpopup">
//                             <div className="Topbar_content_colc">
//                                 <label className="Topbar_label_head">Campaign</label>
//                                 <div className="Topbar_content_colb_list">
//                                     <div className="Topbar_content_colb_list1">
//                                         <BsFillBookFill className="Topbar_bookicon" />
//                                         <div className="Tobar_col2_listcampaign" onClick={(e) => { handleclick(e) }}> <label>List Campaign</label></div>
//                                     </div>
//                                     <div className="Topbar_content_colb_list1">
//                                         <BsFillBookFill className="Topbar_bookicon" />
//                                         <label>Create Campaign</label>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="Topbar_col2_prospectpopup">
//                             <div className="Topbar_content_cold">
//                                 <label className="Topbar_label_head">Prospect</label>
//                                 <div className="Topbar_content_colb_list">
//                                     <div className="Topbar_content_colb_list1">
//                                         <BsFillBookFill className="Topbar_bookicon" />
//                                         <div className="Tobar_col2_listprospect" onClick={(e) => { handleclick(e) }}><label>List Prospect</label></div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <></>
//                 )}
//  </>
//     );

// }

// import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
// import {
//     BsThreeDots,
//     BsFillBellFill,
// } from "react-icons/bs";
// import { CgProfile } from "react-icons/cg";
// // import { AiFillPlusCircle } from 'react-icons/ai';
// import { MdArrowForwardIos, MdCancel } from "react-icons/md";
// import { BsFillBookFill } from "react-icons/bs";
// import { FaCarAlt } from "react-icons/fa";
// import React, { useState } from "react";
// import './Topbar.css';
// export default function Topbar() {
//     const [show, setShow] = useState(false)
//     const handleclick = (e) => {
//         setShow(!show)
//     };

//     return (
//         <>
//             <div className="Topbar_header">
//                 <div className="Topbar_col1">
//                     <div className="Topbar_icon_circle">
//                         <AiOutlineMenu />

//                     </div>
//                     <div className="Topbar_Company">
//                         <h3>Company</h3>
//                     </div>
//                 </div>
//                 <div className="Topbar_col2" >
//                     <ul>
//                         <li>Dashboard</li>
//                         <li>Accounts</li>
//                         <div className="Tobar_col2_on" onClick={(e) => { handleclick(e) }}><li>Campaigns</li></div>
//                         <div className="Tobar_col2_on1" onClick={(e) => { handleclick(e) }}><li>Leads</li></div>
//                         <div className="Tobar_col2_on2" onClick={(e) => { handleclick(e) }}><li>Prospects</li></div>
//                         <li>
//                             <BsThreeDots />
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="Topbar_col3">
//                     <AiOutlineSearch className="Topbar_searchIcon" />
//                     <div className="Topbar_Search_content">
//                         <input type={"text"} placeholder="Search Products,Orders and Clients" />
//                     </div><MdArrowForwardIos className="Topbar_arrowIcon" />
//                 </div>
//                 <div className="Topbar_col4">
//                     <CgProfile className="Topbar_profileIcon" />
//                     <div className="Clayton">
//                         <label>Clayton Santos</label>
//                     </div>
//                 </div>
//                 <div className="Topbar_col5">
//                     <div className="Topbar_Bell_Circle">
//                         <BsFillBellFill className="Topbar_BellIcon" />
//                     </div>
//                     <div className="Topbar_cancel_circle">
//                         <MdCancel className="Topbar_cancelIcon" />
//                     </div>
//                 </div>
//             </div>

//             {
//                 show ? (

//                     <div className="Topbar_content">
//                         <div className="Topbar_content_cola">
//                             <div className="Topbar_content_cola_list">
//                                 <BsFillBookFill className="Topbar_bookicon" />
//                                 <label> Leads</label>
//                             </div>
//                             <div className="Topbar_content_cola_list">
//                                 <BsFillBookFill className="Topbar_bookicon" />
//                                 <label> Campaign</label>
//                             </div>
//                             <div className="Topbar_content_cola_list">
//                                 <BsFillBookFill className="Topbar_bookicon" />
//                                 <div className="Tobar_col2_Tasks" onClick={(e) => { handleclick(e) }}><label>Tasks</label></div>
//                             </div>
//                             <div className="Topbar_content_cola_list">
//                                 <BsFillBookFill className="Topbar_bookicon" />
//                                 <label>Prospects</label>
//                             </div>
//                             <div className="Topbar_content_cola_list1"></div>
//                             <div className="Topbar_content_cola_list1"></div>
//                             <div className="Topbar_content_cola_list1"></div>
//                             <div className="Topbar_content_cola_list1"></div>
//                             <div className="Topbar_content_cola_list1"></div>
//                         </div>

//                         <div className="Topbar_col2_Leadpopup">
//                             <div className="Topbar_content_colb">
//                                 <label className="Topbar_label_head">Leads</label>

//                                 <div className="Topbar_content_colb_list">
//                                     <div className="Topbar_content_colb_list1">
//                                         <FaCarAlt className="Topbar_caricon" />
//                                         <div className="Tobar_col2_listlead" onClick={(e) => { handleclick(e) }}><label>List Leads</label></div>
//                                     </div>
//                                     <div className="Topbar_content_colb_list1">
//                                         <BsFillBookFill className="Topbar_bookicon" />
//                                         <label>Create Lead</label>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>

//                         <div className="Topbar_col2_Campaignpopup">
//                             <div className="Topbar_content_colc">
//                                 <label className="Topbar_label_head">Campaign</label>
//                                 <div className="Topbar_content_colb_list">
//                                     <div className="Topbar_content_colb_list1">
//                                         <BsFillBookFill className="Topbar_bookicon" />
//                                         <div className="Tobar_col2_listcampaign" onClick={(e) => { handleclick(e) }}> <label>List Campaign</label></div>
//                                     </div>
//                                     <div className="Topbar_content_colb_list1">
//                                         <BsFillBookFill className="Topbar_bookicon" />
//                                         <label>Create Campaign</label>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="Topbar_col2_prospectpopup">
//                             <div className="Topbar_content_cold">
//                                 <label className="Topbar_label_head">Prospect</label>
//                                 <div className="Topbar_content_colb_list">
//                                     <div className="Topbar_content_colb_list1">
//                                         <BsFillBookFill className="Topbar_bookicon" />
//                                         <div className="Tobar_col2_listprospect" onClick={(e) => { handleclick(e) }}><label>List Prospect</label></div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <></>
//                 )}

//         </>
//     );

// }
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots, BsFillBellFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
// import { AiFillPlusCircle } from 'react-icons/ai';
import { MdArrowForwardIos, MdCancel } from "react-icons/md";
import { BsFillBookFill } from "react-icons/bs";
import { FaCarAlt } from "react-icons/fa";
import React, { useState } from "react";
import "./Topbar.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Topbar() {
    const username = useSelector((state) => state.username1);
    const token = useSelector((state) => state.token);
    const userid = useSelector((state) => state.userid);
    const dispatch = useDispatch()
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const handleclick = (e) => {
    setShow(!show);
  };
  const [show2, setShow2] = useState(false);
  const Cancleclick = (e) => {
    setShow2(!show2);
  };
  const logOut = (e) => {
    const emptyval = ""
    dispatch({ type: "setToken", payload: emptyval });
    dispatch({ type: "setUserid", payload: emptyval });
    dispatch({ type: "setUsername1", payload: emptyval });
    console.log("username===>"+username+"token===>"+token+"user id=====>"+userid)
    nav("/");
  };
  const username1 = useSelector((state) => state.username1);
  return (
    <>
      <div className="Topbar_header">
        <div className="Topbar_col1">
          <div className="Topbar_icon_circle">
            <AiOutlineMenu />
          </div>
          <div className="Topbar_Company">
            <h3>Company</h3>
          </div>
        </div>
        <div className="Topbar_col2">
          <ul>
            <li>Dashboard</li>
            <li>Accounts</li>
            <div
              className="Tobar_col2_on"
              onClick={(e) => {
                handleclick(e);
              }}
            >
              <li>
                <label>Campaigns</label>
              </li>
            </div>
            <div
              className="Tobar_col2_on1"
              onClick={(e) => {
                handleclick(e);
              }}
            >
              <li>
                <label>Leads</label>
              </li>
            </div>
            <div
              className="Tobar_col2_on2"
              onClick={(e) => {
                handleclick(e);
              }}
            >
              <li>
                <label>Prospects</label>
              </li>
            </div>
            <li>
              <BsThreeDots />
            </li>
          </ul>
        </div>
        <div className="Topbar_col3">
          <AiOutlineSearch className="Topbar_searchIcon" />
          <div className="Topbar_Search_content">
            <input
              type={"text"}
              placeholder="Search Products,Orders and Clients"
            />
          </div>
          <MdArrowForwardIos className="Topbar_arrowIcon" />
        </div>
        <div className="Topbar_col4">
          <CgProfile className="Topbar_profileIcon" />
          <div className="Clayton">
            <label>{username1}</label>
          </div>
        </div>
        <div className="Topbar_col5">
          <div className="Topbar_Bell_Circle">
            <BsFillBellFill className="Topbar_BellIcon" />
          </div>
          <div
            className="Topbar_cancel_circle"
            onClick={(e) => {
              Cancleclick(e);
            }}
          >
            <MdCancel className="Topbar_cancelIcon" />

            {show2 ? (
              <div className="Topbar_cancelIcon_button">
                <label
                  className="topbarlogout"
                  onClick={(e) => {
                    logOut(e);
                  }}
                >
                  LOGOUT
                </label>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {show ? (
        <div className="Topbar_content">
          <div className="Topbar_content_cola">
            <div className="Topbar_content_cola_list">
              <BsFillBookFill className="Topbar_bookicon" />
              <label> Leads</label>
            </div>
            <div className="Topbar_content_cola_list">
              <BsFillBookFill className="Topbar_bookicon" />
              <label> Campaign</label>
            </div>
            <div className="Topbar_content_cola_list">
              <BsFillBookFill className="Topbar_bookicon" />
              <div
                className="Tobar_col2_Tasks"
                onClick={(e) => {
                  nav("/Tasklist")
                }}
              >
                <label>Tasks</label>
              </div>
            </div>
            <div className="Topbar_content_cola_list">
              <BsFillBookFill className="Topbar_bookicon" />
              <label>Prospects</label>
            </div>
            <div className="Topbar_content_cola_list1"></div>
            <div className="Topbar_content_cola_list1"></div>
            <div className="Topbar_content_cola_list1"></div>
            <div className="Topbar_content_cola_list1"></div>
            <div className="Topbar_content_cola_list1"></div>
          </div>

          <div className="Topbar_col2_Leadpopup">
            <div className="Topbar_content_colb">
              <label className="Topbar_label_head">Leads</label>

              <div className="Topbar_content_colb_list">
                <div className="Topbar_content_colb_list1">
                  <FaCarAlt className="Topbar_caricon" />
                  <div
                    className="Tobar_col2_listlead"
                    onClick={(e) => {
                      nav("/Leadlist");
                    }}
                  >
                    <label>List Leads</label>
                  </div>
                </div>
                <div className="Topbar_content_colb_list1">
                  <BsFillBookFill className="Topbar_bookicon" />
                  <label>Create Lead</label>
                </div>
              </div>
            </div>
          </div>

          <div className="Topbar_col2_Campaignpopup">
            <div className="Topbar_content_colc">
              <label className="Topbar_label_head">Campaign</label>
              <div className="Topbar_content_colb_list">
                <div className="Topbar_content_colb_list1">
                  <BsFillBookFill className="Topbar_bookicon" />
                  <div
                    className="Tobar_col2_listcampaign"
                    onClick={(e) => {
                      nav("/Campaignlistpage");
                    }}
                  >
                    {" "}
                    <label>List Campaign</label>
                  </div>
                </div>
                <div className="Topbar_content_colb_list1">
                  <BsFillBookFill className="Topbar_bookicon" />
                  <label>Create Campaign</label>
                </div>
              </div>
            </div>
          </div>

          <div className="Topbar_col2_prospectpopup">
            <div className="Topbar_content_cold">
              <label className="Topbar_label_head">Prospect</label>
              <div className="Topbar_content_colb_list">
                <div className="Topbar_content_colb_list1">
                  <BsFillBookFill className="Topbar_bookicon" />
                  <div
                    className="Tobar_col2_listprospect"
                    onClick={(e) => {
                      nav("/ProspectListpage");
                    }}
                  >
                    <label>List Prospect</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
