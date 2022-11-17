import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./horizontalbar.css"
export default function Horizontalbar({ orangebar, greenbar, bluebar, show2, Horizontal_value, Horizontal_percentage, leadsfunnel_popup_show }) {
    return (
        <>
            <div className="Horizontalbar_main">
                <div className="Horizontalbar_main_row1">
                    <label>Leads Funnel</label>
                    <div className="Horizontalbar_main_row1_icon">
                        <BsThreeDotsVertical className="threedots_icon" />
                    </div>
                </div>
                {leadsfunnel_popup_show ?
                    (<div className="leadsfunnel_popup">
                        <div className="leadsfunnel_popup_content">
                            <label>Manager</label>
                            <select className="leadsfunnel_popup_rectangle_select" >
                                <option value="empty">Select</option>
                                {/* <option value="In Progress" >In Progress</option>
                                <option value="To Do" >To Do</option>
                                <option value="Completed"  >Completed</option> */}
                            </select>
                            <label>Campaign</label>
                            <select className="leadsfunnel_popup_rectangle_select" >
                                <option value="empty">Select</option>
                                {/* <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option> */}
                            </select>
                        </div>
                    </div>) : (<></>)
                }
                {show2 ? <div className="Horizontalbar_main_row2">
                    <div className="Horizontalbar_main_row2_left">
                        <FaDollarSign />
                        <label><b>{Horizontal_value}</b></label>
                    </div>
                    <div className="Horizontalbar_main_row2_right">
                        <label><span><b>{Horizontal_percentage}</b></span></label>
                    </div>
                </div> : <></>}
                <div className="Horizontalbar_graph" >
                    <ul>
                        <li>
                            <label className="Horizontalbar_graph_orange_label">Leads</label>
                            <div className="Horizontalbar_graph_orange" style={{ width: `${orangebar}%` }}></div>
                        </li>
                        <li>
                            <label>Nurturing</label>
                            <div className="Horizontalbar_graph_green" style={{ width: `${greenbar}%` }}></div>
                        </li>
                        <li>
                            <label>Prospects</label>
                            <div className="Horizontalbar_graph_blue" style={{ width: `${bluebar}%` }}></div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}