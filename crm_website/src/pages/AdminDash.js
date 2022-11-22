import "./AdminDash.css";
import Topbar from '../components/Topbar';
import LeftBar from '../components/LeftBar';
import Horizontalbar from '../components/Horizontalbar';
import List from '../components/List';
import Progressbar from '../components/Progressbar';
import Bargraph from '../components/Bargraph';
import Summary from '../components/Summary';
import SummaryCount from "../components/SummaryCount";
import Pending from "../components/Pending";
import axios from "axios";
import { useEffect, useState } from "react";


export default function AdminDash() {

    const [bargraph_status, setBargraph_status] = useState("");
    const campaignwiseprospect_popup_show = (true)
    const [count_value, setCountvalue] = useState("");
    const [pcount, setPcount] = useState("");

    const [orangebar, setOrangebar] = useState([]);
    const [greenbar, setGreenbar] = useState([]);
    const [bluebar, setBluebar] = useState([]);
    const [orangebar1, setOrangebar1] = useState([]);
    const [greenbar1, setGreenbar1] = useState([]);
    const [bluebar1, setBluebar1] = useState([]);
    const show = (false);

    const [leads, setLeads] = useState([]);
    const [pros, setPros] = useState([]);

    const [bar, setBar] = useState([]);
    const [bar1, setBar1] = useState([]);

    const title = ("Managerwise Prospect Count");
    const [array1, setArray1] = useState([]);
    const summary_show = (true);

    const [user, setUser] = useState([]);

    const [pending_show, setPending_show] = useState(false);
    const [approval_mail, setApproval_mail] = useState("");

    const leadsfunnel_popup_show = (true);

    const [campaign_array, setCampaign_Array] = useState([]);
    const [manager_array, setManager_Array] = useState([]);

    const [manager_filter, setManager_Filter] = useState("");

    const [campid, setCampid] = useState("");

    //ProspectGrowth Axios

    useEffect(() => {

        const data = {};
        const header = {};

        const url1 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/prospectGrowth";
        axios.post(url1, data, { headers: header })
            .then((res) => {
                setPcount(JSON.stringify(res.data[0].count))
                console.log("ProspectGrowth Response ==>  Prospects :" + JSON.stringify(res.data[0].count))
            })
            .catch((err) => {
                console.log("ProspectGrowth Error ==> " + err)
            })

        //LeadsFunnel Axios

        const url2 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/leadsfunnel";
        axios.post(url2, data, { headers: header })
            .then((res) => {
                console.log("LeadsFunnel Response ==>  Leads : " + (JSON.stringify(res.data[0].Leads)) + " Nurtring : " + (JSON.stringify(res.data[1].Leads)) + " Prospects : " + (JSON.stringify(res.data[2].Leads)))
                setOrangebar(res.data[0].Leads)
                setGreenbar(res.data[1].Leads)
                setBluebar(res.data[2].Leads)
                setOrangebar1(res.data[0].Leads)
                setGreenbar1(res.data[1].Leads)
                setBluebar1(res.data[2].Leads)
            })
            .catch((err) => {
                console.log("LeadsFunnel Error ==> " + err)
            })

        //ProspectProgress Axios

        const url3 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/prospectprogress";
        axios.post(url3, { headers: header })
            .then((res) => {
                console.log("ProspectProgress Response ==>  Leads : " + JSON.stringify(res.data[0].Leads) + " Prospects : " + JSON.stringify(res.data[1].Leads))
                setLeads(res.data[0].Leads)
                setPros(res.data[1].Leads)
            })
            .catch((err) => {
                console.log("ProspectProgress Error ==> " + err)
            })

        //ManagerWiseProspectCount Axios

        const url4 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/ManagerwiseProspectCount";
        axios.post(url4, data, { headers: header })
            .then((res) => {
                console.log("ManagerWiseProspectCount Response ==> " + JSON.stringify(res.data))
                setArray1(res.data)
            })
            .catch((err) => {
                console.log("ManagerWiseProspectCount Error ==> " + err)
            })

        //CampaignWiseProspectCount Axios

        const url5 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/campaignwiseprospectcount";
        axios.post(url5, data, { headers: header })
            .then((res) => {
                console.log("CampaignWiseProspectCount Response ==> " + JSON.stringify(res.data))
                setBar(res.data)
                setBar1(res.data)
            })
            .catch((err) => {
                console.log("CampaignWiseProspectCount Error ==> " + err)
            })

        //UserList Axios

        const url6 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/getuserlist";
        axios.post(url6, data, { headers: header })
            .then((res) => {
                setUser((res.data))
                console.log("UserList Response ==> " + JSON.stringify(res.data))
            })
            .catch((err) => {
                console.log("UserList Error ==> " + err)
            })

        //AdminDashLeadsFunnelFilterGetCampaign Axios

        const url_camp = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/AdminDashLeadsFunnelGetCampaign";
        axios.post(url_camp, data, { headers: header })
            .then((res) => {
                console.log("AdminDashLeadsFunnelFilterGetCampaign Response ==> " + JSON.stringify(res.data));
                setCampaign_Array(res.data);
            })
            .catch((err) => {
                console.log("AdminDashLeadsFunnelFilterGetCampaign Error ==> " + err);
            });

        //AdminDashLeadsFunnelFilterGetManager Axios

        const url_getmanager = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/AdminDashLeadsFunnelGetManager";
        axios.post(url_getmanager, data, { headers: header })
            .then((res) => {
                console.log("AdminDashLeadsFunnelFilterGetManager Response ==> " + JSON.stringify(res.data));
                setManager_Array(res.data);
            })
            .catch((err) => {
                console.log("AdminDashLeadsFunnelFilterGetManager Error ==> " + err);
            });

    }, [])

    const approval_Func = () => {
        const url = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/updateuserliststatus"
        const data = { approval_mail: approval_mail };
        const header = {}
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("updated")
                setPending_show(!pending_show)
                window.location.reload();

            })
            .catch((err) => {
                console.log("error ==>" + err)
            })
    }

    const campaignstatus = (e) => {
        console.log("Bargraph direct: " + e.target.value)
        setBargraph_status(e.target.value)
        console.log("bargraph status:" + bargraph_status)
        if (e.target.value === "empty") {
            setBar(bar1)
        }
        else {
            const url = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/campaignwiseprospectcountstatusfilter";
            const data = { value: e.target.value };
            const header = {}
            axios.post(url, data, { headers: header })
                .then((res) => {
                    console.log("Response new val ==> " + JSON.stringify(res.data))
                    setBar(res.data)
                })
                .catch((err) => {
                    console.log("Error => " + err)
                })
        }
    };

    const filtercount = (e) => {
        console.log("Bargraph default: " + e.target.value)
        setCountvalue(e.target.value)
        console.log("bargraph filter:" + count_value)
        if (e.target.value === "empty") {
            setBar(bar1)
        }
        else {
            const url = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/campaignwiseprospectcountcountfilter";
            const data = { value: e.target.value };
            const header = {}
            axios.post(url, data, { headers: header })
                .then((res) => {
                    console.log("Response new val ==> " + JSON.stringify(res.data))
                    setBar(res.data)
                })
                .catch((err) => {
                    console.log("Error => " + err)
                })
        }
    }


    const managerclick = (e) => {
        console.log("Leads Funnel default: " + e.target.value)
        setManager_Filter(e.target.value)
        console.log("Leads Funnel Manager filter:" + manager_filter)
        if (e.target.value === "empty") {
            setOrangebar(orangebar1);
            setGreenbar(greenbar1);
            setBluebar(bluebar1);
        }
        else {
            const url_manager = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/AdminDashleadsfunnelManagerFilter";
            const data_manager = { userid: Number(e.target.value) };
            const header = {}
            axios.post(url_manager, data_manager, { headers: header })
                .then((res) => {
                    console.log("Leads Funnel Manager Filter Response ==>  Leads : " + (JSON.stringify(res.data[0].Leads)) + " Nurturing : " + (JSON.stringify(res.data[1].Leads)) + " Prospects : " + (JSON.stringify(res.data[2].Leads)))
                    setOrangebar(res.data[0].Leads)
                    setGreenbar(res.data[1].Leads)
                    setBluebar(res.data[2].Leads)
                })
                .catch((err) => {
                    console.log("Error => " + err)
                })
        }
    }


    const campaignclick = (e) => {
        console.log("Campaign Filter default : " + e.target.value)
        setCampid(e.target.value)
        console.log("Campaign Filter Selected :" + campid)
        if (e.target.value === "empty") {
            setOrangebar(orangebar1);
            setGreenbar(greenbar1);
            setBluebar(bluebar1);
        }
        else {
            const url = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/AdminDashleadsfunnelCampaignFilter";
            const data = { campaignid: e.target.value };
            const header = {}
            axios.post(url, data, { headers: header })
                .then((res) => {
                    console.log("Leads Funnel Campaign Filter Response ==>  Leads : " + (JSON.stringify(res.data[0].Leads)) + " Nurturing : " + (JSON.stringify(res.data[1].Leads)) + " Prospects : " + (JSON.stringify(res.data[2].Leads)))
                    setOrangebar(res.data[0].Leads)
                    setGreenbar(res.data[1].Leads)
                    setBluebar(res.data[2].Leads)
                })
                .catch((err) => {
                    console.log("Error => " + err)
                })
        }
    }





    return <>
        {pending_show ?
            (<div className="Admin_page_pending"> <Pending pending_show={pending_show} setPending_show={setPending_show} approval_Func={approval_Func} /></div>) : <></>
        }
        <div className='Admin_page'>
            <div className="Admin_page_topbar">
                <div className='Admin_page_column1'>
                    <Topbar />
                </div>
            </div>
            <div className='Admin_page_contentpart'>
                <div className='Admin_page_contentpart_leftbar'>
                    <LeftBar />
                </div>
                <div className='Admin_page_contentpart_main'>
                    <div className='Admin_page_contentpart_main_row1'>
                        <Bargraph bar={bar} campaignstatus={campaignstatus} bargraph_status={bargraph_status} setBargraph_status={setBargraph_status} filtercount={filtercount} count_value={count_value} setCountvalue={setCountvalue} campaignwiseprospect_popup_show={campaignwiseprospect_popup_show} />
                        <div className="Admin_page_contentpart_main_horizontal">
                            <Horizontalbar show={show} orangebar={orangebar} greenbar={greenbar} bluebar={bluebar} leadsfunnel_popup_show={leadsfunnel_popup_show} campaign_array={campaign_array} manager_array={manager_array} managerclick={managerclick} manager_filter={manager_filter} setManager_Array={setManager_Array} campaignclick={campaignclick} campid={campid} setCampid={setCampid} />
                        </div>
                    </div>
                    <div className='Admin_page_contentpart_main_row2'>
                        <div className="Admin_page_contentpart_main_row2_innerrow1">
                            <Summary array1={array1} title={title} summary_show={summary_show} />
                            {/* <Summary title={title} user1={genman} user2={areaman} user3={assisman} user4={salesman} name1={Man1} name2={Man2} name3={Man3} name4={Man4} /> */}
                        </div>
                        <div className="Admin_page_contentpart_main_row2_innerrow2">
                            <div className="Admin_page_contentpart_main_row2_innerrow2_summary">
                                <SummaryCount pcount={pcount} />
                            </div>
                            <div className="Admin_page_contentpart_main_row2_innerrow2_progress">
                                <Progressbar leadsc={leads} prosc={pros} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Admin_page_contentpart_list'>
                    <List user={user} pending_show={pending_show} setPending_show={setPending_show} setApproval_mail={setApproval_mail} />
                </div>
            </div>
        </div >
    </>
}



