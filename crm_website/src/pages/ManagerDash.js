import "./ManagerDash.css";
import Topbar from '../components/Topbar';
import LeftBar from '../components/LeftBar';
import Horizontalbar from '../components/Horizontalbar';
import Progressbar from '../components/Progressbar';
import Bargraph from '../components/Bargraph';
import Summary from '../components/Summary';
import SummaryCount from "../components/SummaryCount";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ManagerDash() {

    const [pcount, setPcount] = useState("");


    const [orangebar, setOrangebar] = useState([]);
    const [greenbar, setGreenbar] = useState([]);
    const [bluebar, setBluebar] = useState([]);
    const show = (true);

    const [leads, setLeads] = useState([]);
    const [pros, setPros] = useState([]);

    const [bar, setBar] = useState([]);

    const title = ("SalesPerson Wise Prospect Count");
    const summary_show = (false);
    const [array1, setArray1] = useState([])
    // const userid = useSelector((state) => state.userid);
    const userid = 32;


    //ProspectGrowth Axios

    useEffect(() => {


        const data = { userid: userid };
        const header = {};
        const url1 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/ManagerDashprospectGrowth";
        axios.post(url1, data, { headers: header })
            .then((res) => {
                setPcount(JSON.stringify(res.data[0].count))
                console.log("Response ==> " + JSON.stringify(res.data[0].count))
            })
            .catch((err) => {
                console.log("Error ==> " + err)
            })


        //LeadsFunnel Axios

        const url2 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/ManagerDashleadsfunnel";
        axios.post(url2, data, { headers: header })
            .then((res) => {
                console.log("Response => " + (JSON.stringify(res.data[0].Leads)) + (JSON.stringify(res.data[1].Leads)) + (JSON.stringify(res.data[2].Leads)))
                setOrangebar(res.data[0].Leads)
                setGreenbar(res.data[1].Leads)
                setBluebar(res.data[2].Leads)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })

        //ProspectProgress Axios

        const url3 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/ManagerDashprospectprogress";
        axios.post(url3, data, { headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data[0].Leads) + JSON.stringify(res.data[1].Leads))
                setLeads(res.data[0].Leads)
                setPros(res.data[1].Leads)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })

        //SalesPersonWiseProspectCount Axios

        const url4 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/SaleswisePropectcount";
        axios.post(url4, data, { headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data))
                setArray1(res.data)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })

        //CampaignWiseProspectCount Axios

        const url5 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/ManagerDashcampaignwiseprospectcount";
        axios.post(url5, data, { headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data))
                setBar(res.data)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    }, [])

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
                        <Bargraph bar={bar} />
                        <div className="ManagerDash_page_content_area_horizontal">
                            <Horizontalbar orangebar={orangebar} greenbar={greenbar} bluebar={bluebar} show2={show} />
                        </div>
                    </div>
                    <div className="ManagerDash_page_content_area_row2">
                        <div className="ManagerDash_page_content_area_row2_summary">
                            < Summary title={title} array1={array1} summary_show={summary_show} />
                            {/* <Summary title={title} user1={salesman1} user2={salesman2} user3={salesman3} user4={salesman4} name1={salesname1} name2={salesname2} name3={salesname3} name4={salesname4} /> */}
                        </div>
                        <div className="ManagerDash_page_content_area_row2_bars">
                            <SummaryCount pcount={pcount} show={show} />
                            <Progressbar leadsc={leads} prosc={pros} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}