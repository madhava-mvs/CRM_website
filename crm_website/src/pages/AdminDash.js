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

    const [pcount, setPcount] = useState("");

    const [orangebar, setOrangebar] = useState([]);
    const [greenbar, setGreenbar] = useState([]);
    const [bluebar, setBluebar] = useState([]);
    const show = (false);

    const [leads, setLeads] = useState([]);
    const [pros, setPros] = useState([]);

    const [bar, setBar] = useState([]);

    const title = ("Managerwise Prospect Count");
    const [array1, setArray1] = useState([]);
    const summary_show = (true);

    // const [genman, setGenMan] = useState(0);
    // const [areaman, setAreaMan] = useState(0);
    // const [assisman, setAssisMan] = useState(0);
    // const [salesman, setSalesMan] = useState(0);
    // const Man1 = ("General Manager");
    // const Man2 = ("Area Manager");
    // const Man3 = ("Assistant Manager");
    // const Man4 = ("Sales Manager");


    const [user, setUser] = useState([]);

    const [pending_show, setPending_show] = useState(false);
    const [approval_mail, setApproval_mail] = useState("")

    //ProspectGrowth Axios

    useEffect(() => {

        const data = {};
        const header = {};

        const url1 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/prospectGrowth";
        axios.post(url1, data, { headers: header })
            .then((res) => {
                setPcount(JSON.stringify(res.data[0].count))
                console.log("Response ==> " + JSON.stringify(res.data[0].count))
            })
            .catch((err) => {
                console.log("Error ==> " + err)
            })

        //LeadsFunnel Axios

        const url2 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/leadsfunnel";
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

        const url3 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/prospectprogress";
        axios.post(url3, { headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data[0].Leads) + JSON.stringify(res.data[1].Leads))
                setLeads(res.data[0].Leads)
                setPros(res.data[1].Leads)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })

        //ManagerWiseProspectCount Axios

        const url4 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/ManagerwiseProspectCount";
        axios.post(url4, data, { headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data))
                setArray1(res.data)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })

        //CampaignWiseProspectCount Axios

        const url5 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/campaignwiseprospectcount";
        axios.post(url5, data, { headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data))
                setBar(res.data)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })

        //UserList Axios

        const url6 = "https://026xhox7g0.execute-api.us-east-1.amazonaws.com/dev/getuserlist";
        axios.post(url6, data, { headers: header })
            .then((res) => {
                setUser((res.data))
                console.log("Response => " + JSON.stringify(res.data))
            })
            .catch((err) => {
                console.log("Error => " + err)
            })

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
                        <Bargraph bar={bar} />
                        <div className="Admin_page_contentpart_main_horizontal">
                            <Horizontalbar show={show} orangebar={orangebar} greenbar={greenbar} bluebar={bluebar} />
                        </div>
                    </div>
                    <div className='Admin_page_contentpart_main_row2'>
                        <div className="Admin_page_contentpart_main_row2_innerrow1">
                            <Summary array1={array1} title={title} summary_show={summary_show} />
                            {/* <Summary title={title} user1={genman} user2={areaman} user3={assisman} user4={salesman} name1={Man1} name2={Man2} name3={Man3} name4={Man4} /> */}
                        </div>
                        <div className="Admin_page_contentpart_main_row2_innerrow2">
                            <SummaryCount pcount={pcount} />
                            <Progressbar leadsc={leads} prosc={pros} />
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

