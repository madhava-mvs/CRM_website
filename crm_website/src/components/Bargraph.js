import React from "react";
import "./Bargraph.css";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Bargraph() {
    return <>
        <div className="bargraph">
            <div >
                <label>Campaign wise Prospect Count </label>
                <BsThreeDotsVertical className="icon" />
            </div>
            <div className="bargraph_graph">
                <ul>
                    <li>
                        <label className="bargraph_blue_value">8</label>
                        <div className="bargraph_bluegraph"></div>
                        <label>Cam 1</label>
                    </li>
                    <li>
                        <label className="bargraph_green_value">7</label>
                        <div className="bargraph_greengraph"></div>
                        <label>Cam 1</label>
                    </li>
                    <li>
                        <label className="bargraph_orange_value">10</label>
                        <div className="bargraph_orangegraph"></div>
                        <label>Cam 1</label>
                    </li>
                </ul>
            </div>
        </div>
    </>
}