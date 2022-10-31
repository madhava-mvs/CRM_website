import "./ManagerDash.css";
import Topbar from '../components/Topbar';
import LeftBar from '../components/LeftBar';
import Horizontalbar from '../components/Horizontalbar';
import Progressbar from '../components/Progressbar';
import Bargraph from '../components/Bargraph';
import Summary from '../components/Summary';
import SummaryCount from "../components/SummaryC";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ManagerDash() {
    const [pcount, setPcount] = useState("");
    const [show1, setShow1] = useState(true);

    const [orangebar, setOrangebar] = useState([]);
    const [greenbar, setGreenbar] = useState([]);
    const [bluebar, setBluebar] = useState([]);
    const show = (true);

    const [leads, setLeads] = useState([]);
    const [pros, setPros] = useState([]);

    const [bluecamp, setBlueCamp] = useState([]);
    const [blueheight, setBlueHeight] = useState(0);
    const [greenheight, setGreenHeight] = useState("");
    const [orangeheight, setOrangeHeight] = useState("");

    const title = ("SalesPerson Wise Prospect Count");
    const [salesman1, setSalesMan1] = useState(0);
    const [salesman2, setSalesMan2] = useState(0);
    const [salesman3, setSalesMan3] = useState(0);
    const [salesman4, setSalesMan4] = useState(0);
    const [salesname1, setSalesName1] = useState("SalesPerson One");
    const [salesname2, setSalesName2] = useState("SalesPerson Two");
    const [salesname3, setSalesName3] = useState("SalesPerson Three");
    const [salesname4, setSalesName4] = useState("SalesPerson Four");

    //ProspectGrowth Axios

    useEffect(() => {
        const url = "https://yrxkax15th.execute-api.us-east-1.amazonaws.com/dev/prospectGrowth";
        const data = {};
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                setPcount(JSON.stringify(res.data[0].count))
                console.log("Response ==> " + JSON.stringify(res.data[0].count))
            })
            .catch((err) => {
                console.log("Error ==> " + err)
            })
    })

    //LeadsFunnel Axios

    useEffect(() => {
        const url = "https://yrxkax15th.execute-api.us-east-1.amazonaws.com/dev/leadsfunnel";
        const data = {};
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("Response => " + (JSON.stringify(res.data[0].leadscount)) + (JSON.stringify(res.data[1].leadscount)) + (JSON.stringify(res.data[2].leadscount)))
                setOrangebar(res.data[0].leadscount)
                setGreenbar(res.data[1].leadscount)
                setBluebar(res.data[2].leadscount)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    })

    //ProspectProgress Axios

    useEffect(() => {
        const url = "https://yrxkax15th.execute-api.us-east-1.amazonaws.com/dev/prospectprogress";
        const header = {};
        axios.post(url, { headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data[0].Leads) + JSON.stringify(res.data[1].Leads))
                setLeads(res.data[0].Leads)
                setPros(res.data[1].Leads)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    })

    //SalesPersonWiseProspectCount Axios

    useEffect(() => {
        const url = "https://yrxkax15th.execute-api.us-east-1.amazonaws.com/dev/SaleswisePropectcount";
        const data = {};
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data[0].count))
                setSalesMan1(res.data[0].count)
                setSalesName1(res.data[0].txtFirstName)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    })

    //CampaignWiseProspectCount Axios

    useEffect(() => {
        const url = "https://yrxkax15th.execute-api.us-east-1.amazonaws.com/dev/campaignwiseprospectcount";
        const data = {};
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data[0].count))
                setBlueHeight(res.data[0].count)
                setBlueCamp(res.data[0].txtCampaignName)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    })

    return <>
        <div className="ManagerDash_page">
            <div className="ManagerDash_page_topbar">
                <Topbar />
            </div>
            <div className="ManagerDash_page_content">
                <div className="ManagerDash_page_content_leftbar">
                    <LeftBar />
                </div>
                <div className="ManagerDash_page_content_area">
                    <div className="ManagerDash_page_content_area_row1">
                        <Bargraph orangeh={orangeheight} greenh={greenheight} blueh={blueheight} bluec={bluecamp} />
                        <div className="ManagerDash_page_content_area_horizontal">
                            <Horizontalbar orangebar={orangebar} greenbar={greenbar} bluebar={bluebar} show={show} />
                        </div>
                    </div>
                    <div className="ManagerDash_page_content_area_row2">
                        <div className="ManagerDash_page_content_area_row2_summary">
                            <Summary title={title} user1={salesman1} user2={salesman2} user3={salesman3} user4={salesman4} name1={salesname1} name2={salesname2} name3={salesname3} name4={salesname4} />
                        </div>
                        <div className="ManagerDash_page_content_area_row2_bars">
                            <SummaryCount pcount={pcount} show={show1} />
                            <Progressbar leadsc={leads} prosc={pros} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}