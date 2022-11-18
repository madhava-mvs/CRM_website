import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./horizontalbar.css"
export default function Horizontalbar({ orangebar, greenbar, bluebar, show2, Horizontal_value, Horizontal_percentage, leadsfunnel_popup_show, campaign_array, manager_array, manager_filter, managerclick, campaignclick, campid }) {
    return (
        <>
            <div className="Horizontalbar_main">
                <div className="Horizontalbar_main_row1">
                    <label>Leads Funnel</label>
                    <div className="Horizontalbar_main_row1_icon">
                        <BsThreeDotsVertical className="threedots_icon" />
                        {leadsfunnel_popup_show ?
                            (<div className="leadsfunnel_popup">
                                <div className="leadsfunnel_popup_content">
                                    <label>Manager</label>
                                    <select className="leadsfunnel_popup_rectangle_select" value={manager_filter} onChange={(e) => managerclick(e)} >
                                        <option value="empty">Select</option>
                                        {manager_array.map((item, index) => {
                                            return (
                                                <>
                                                    <option key="{item.id}" value={item.id} onClick={managerclick}>
                                                        {item.txtFirstName}
                                                    </option>
                                                </>
                                            );
                                        })}
                                    </select>
                                    <label>Campaign</label>
                                    <select className="leadsfunnel_popup_rectangle_select" value={campid} onChange={(e) => campaignclick(e)}>
                                        <option value="empty">Select</option>
                                        {campaign_array.map((item, index) => {
                                            return (
                                                <>
                                                    <option key="{item.id}" value={item.id} onClick={campaignclick}>
                                                        {item.txtCampaignName}

                                                    </option>
                                                </>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>) : (<></>)
                        }
                    </div>
                </div>
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