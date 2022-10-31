import "./Bargraph.css";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Bargraph({ blueh, greenh, orangeh, bluec, greenc, orangec }) {

    return <>
        <div className="bargraph">
            <div className="bargraph_title">
                <div >
                    <label >Campaign wise Prospect Count </label>
                    <BsThreeDotsVertical className="icon" />
                </div>
            </div>
            <div className="bargraph_graph">
                <ul>
                    <li>
                        <label className="bargraph_blue_value">{blueh}</label>
                        <div className="bargraph_bluegraph" style={{ height: `${blueh}vh` }}></div>
                        <label className="bargraph_blue_name">{bluec}</label>
                    </li>
                    <li>
                        <label className="bargraph_green_value">{greenh}</label>
                        <div className="bargraph_greengraph" style={{ height: `${greenh}vh` }} ></div>
                        <label className="bargraph_green_name">{greenc}</label>
                    </li>
                    <li>
                        <label className="bargraph_orange_value">{orangeh}</label>
                        <div className="bargraph_orangegraph" style={{ height: `${orangeh}%` }}></div>
                        <label className="bargraph_orange_name">{orangec}</label>
                    </li>
                </ul>
            </div>
        </div>
    </>
}