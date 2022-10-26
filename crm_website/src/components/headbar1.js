import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {
    BsThreeDots,
    BsFillBellFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
// import { AiFillPlusCircle } from 'react-icons/ai';
import { MdArrowForwardIos, MdCancel } from "react-icons/md";
import { BsFillBookFill } from "react-icons/bs";
import { FaCarAlt } from "react-icons/fa";
import React, { useState } from "react";
import './headbar1.css';
export default function Topbar() {
    const [show, setShow] = useState(false)
    const handleclick = (e) => {
        setShow(!show)
    };

    return (
        <>
            <div className="headbar_Topbar_header">
                <div className="headbar_Topbar_col1">
                    <div className="headbar_Topbar_icon_circle">
                        <AiOutlineMenu />

                    </div>
                    <label>Company</label>

                </div>
                <div className="headbar_Topbar_col2" >
                    <ul>
                        <li><label>Dashboard</label></li>
                        <li><label>Accounts</label></li>
                        <div className="headbar_Tobar_col2_on" onClick={(e) => { handleclick(e) }}><li><label>Campaigns</label></li></div>
                        <div className="headbar_Tobar_col2_on1" onClick={(e) => { handleclick(e) }}><li><label>Leads</label></li></div>
                        <div className="headbar_Tobar_col2_on2" onClick={(e) => { handleclick(e) }}><li><label>Prospects</label></li></div>
                        <li className="headbar_threeDots_icon">
                            <BsThreeDots />
                        </li>
                    </ul>
                </div>
                <div className="headbar_Topbar_col3">
                    <AiOutlineSearch className="headbar_Topbar_searchIcon" />
                    <input type={"text"} placeholder="Search Products,Orders and Clients" />
                    <MdArrowForwardIos className="headbar_Topbar_arrowIcon" />
                </div>
                <div className="headbar_Topbar_col4">
                    <CgProfile className="headbar_Topbar_profileIcon" />
                    <label>Clayton Santos</label>
                </div>
                <div className="headbar_Topbar_col5">
                    <div className="headbar_Topbar_Bell_Circle">
                        <BsFillBellFill className="headbar_Topbar_BellIcon" />
                    </div>
                    <div className="headbar_Topbar_cancel_circle">
                        <MdCancel className="headbar_Topbar_cancelIcon" />
                    </div>
                </div>
            </div>

            {
                show ? (

                    <div className="headbar_Topbar_content">
                        <div className="headbar_Topbar_content_cola">
                            <div className="headbar_Topbar_content_cola_list">
                                {/* <BsFillBookFill className="headbar_Topbar_bookicon" /> */}
                                <BsFillBookFill className="headbar_headbar1_bookicon"/>
                                <label> Leads</label>
                            </div>
                            <div className="headbar_Topbar_content_cola_list">
                                <BsFillBookFill className="headbar_headbar1_bookicon" />
                                <label> Campaign</label>
                            </div>
                            <div className="headbar_Topbar_content_cola_list">
                                <BsFillBookFill className="headbar_headbar1_bookicon" />
                                <div className="headbar_Tobar_col2_Tasks" onClick={(e) => { handleclick(e) }}><label>Tasks</label></div>
                            </div>
                            <div className="headbar_Topbar_content_cola_list">
                                <BsFillBookFill className="headbar_headbar1_bookicon" />
                                <label>Prospects</label>
                            </div>
                            <div className="headbar_Topbar_content_cola_list1"></div>
                            <div className="headbar_Topbar_content_cola_list1"></div>
                            <div className="headbar_Topbar_content_cola_list1"></div>
                            <div className="headbar_Topbar_content_cola_list1"></div>
                            <div className="headbar_Topbar_content_cola_list1"></div>
                        </div>


                        <div className="headbar_Topbar_col2_Leadpopup">
                            <div className="headbar_Topbar_content_colb">
                                <label className="headbar_Topbar_label_head">Leads</label>
                                <div className="headbar_Topbar_content_colb_list">
                                    <div className="headbar_Topbar_content_colb_list1">
                                        <FaCarAlt className="headbar_Topbar_caricon" />
                                        <div className="headbar_Tobar_col2_listlead" onClick={(e) => { handleclick(e) }}><label>List Leads</label></div>
                                    </div>
                                    <div className="headbar_Topbar_content_colb_list1">
                                        <BsFillBookFill className="headbar_headbar1_bookicon" />
                                        <label>Create Lead</label>
                                    </div>
                                </div>

                            </div>
                        </div>






                        <div className="headbar_Topbar_col2_Campaignpopup">
                            <div className="headbar_Topbar_content_colc">
                                <label className="headbar_Topbar_label_head">Campaign</label>
                                <div className="headbar_Topbar_content_colb_list">
                                    <div className="headbar_Topbar_content_colb_list1">
                                        <BsFillBookFill className="headbar_headbar1_bookicon" />
                                        <div className="headbar_Tobar_col2_listcampaign" onClick={(e) => { handleclick(e) }}> <label>List Campaign</label></div>
                                    </div>
                                    <div className="headbar_Topbar_content_colb_list1">
                                        <BsFillBookFill className="headbar_headbar1_bookicon" />
                                        <label>Create Campaign</label>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="headbar_Topbar_col2_prospectpopup">
                            <div className="headbar_Topbar_content_cold">
                                <label className="headbar_Topbar_label_head">Prospect</label>
                                <div className="headbar_Topbar_content_colb_list">
                                    <div className="headbar_Topbar_content_colb_list1">
                                        <BsFillBookFill className="headbar_headbar1_bookicon" />
                                        <div className="headbar_Tobar_col2_listprospect" onClick={(e) => { handleclick(e) }}><label>List Prospect</label></div>
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