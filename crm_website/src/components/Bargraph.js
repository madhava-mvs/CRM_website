import "./Bargraph.css";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { Scrollbars } from 'react-custom-scrollbars';

// export default function Bargraph({ blueh, greenh, orangeh, bluec, greenc, orangec }) {

//     return <>
//         <div className="bargraph">
//             <div className="bargraph_title">
//                 <div >
//                     <label >Campaign wise Prospect Count </label>
//                     <BsThreeDotsVertical className="icon" />
//                 </div>
//             </div>
//             <div className="bargraph_graph">
//                 <ul>
//                     <li>
//                         <label className="bargraph_blue_value">{blueh}</label>
//                         <div className="bargraph_bluegraph" style={{ height: `${blueh}vh` }}></div>
//                         <label className="bargraph_blue_name">{bluec}</label>
//                     </li>
//                     <li>
//                         <label className="bargraph_green_value">{greenh}</label>
//                         <div className="bargraph_greengraph" style={{ height: `${greenh}vh` }} ></div>
//                         <label className="bargraph_green_name">{greenc}</label>
//                     </li>
//                     <li>
//                         <label className="bargraph_orange_value">{orangeh}</label>
//                         <div className="bargraph_orangegraph" style={{ height: `${orangeh}%` }}></div>
//                         <label className="bargraph_orange_name">{orangec}</label>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </>
// }


export default function Bargraph({ bar, campaignstatus, bargraph_status, filtercount, count_value, campaignwiseprospect_popup_show, admincampaign }) {


    return <>
        <div className="bargraph">
            <div className="bargraph_title">
                <div >
                    <div className="bargraph_title_row">
                        <div className="bargraph_title_row_title">
                            <label >Campaign wise Prospect Count </label>
                        </div>
                        <div className="threedot_icon_div">
                            <BsThreeDotsVertical className="bargraph_threedot_icon" />
                            {campaignwiseprospect_popup_show ?
                                (<div className="bargraph_campaignwiseprospect_popup">
                                    <div className="bargraph_campaignwiseprospect_popup_content">
                                        <label>Status</label>
                                        <select className="campaign_rectangle_select" value={bargraph_status} onChange={(e) => campaignstatus(e)} >
                                            <option value="empty">Select</option>
                                            <option value="Active" onClick={campaignstatus}>Active</option>
                                            <option value="Inactive" onClick={campaignstatus}>Inactive</option>
                                        </select>

                                        <label>Limit</label>
                                        <select className="campaign_rectangle_select" value={count_value} onChange={(e) => filtercount(e)} >
                                            <option value="empty">Select</option>
                                            <option value="1" onClick={filtercount}>1</option>
                                            <option value="2" onClick={filtercount}>2</option>
                                            <option value="3" onClick={filtercount}>3</option>
                                            <option value="4" onClick={filtercount}>4</option>
                                            <option value="5" onClick={filtercount}>5</option>
                                            {/* <option value="">--6-</option> */}
                                        </select>
                                    </div>
                                </div>) : (<></>)
                            }
                        </div>
                    </div>

                </div>
            </div>
            {admincampaign ?
                (<div className="bargraph_graph">
                    <ul>
                        {bar.map((item) => {
                            return (
                                <li>
                                    <label className="bargraph_blue_value" > {item.count} </label>
                                    <div className="bargraph_bluegraph" style={{ height: `${item.count}vh` }}></div>
                                    <label className="bargraph_blue_name"> {item.txtCampaignName} </label>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>) : (<div className="manager_bargraph_graph">
                    <ul>
                        {bar.map((item) => {
                            return (
                                <li>
                                    <label className="manager_bargraph_blue_value" > {item.count} </label>
                                    <div className="manager_bargraph_bluegraph" style={{ height: `${item.count}vh` }}></div>
                                    <label className="manager_bargraph_blue_name"> {item.txtCampaignName} </label>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>)
            }
        </div>
    </>
}
