import Form from "../components/Campaignedit_Form";
import Horizontalbar from "../components/Horizontalbar";
import LeftBar from "../components/LeftBar";
import Normallist from "../components/Normallist";
import TitleBar from "../components/Titlebar";
import Topbar from "../components/Topbar";
import CheckList from "../components/checkList";
import ReactDatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import "./Campaigneditpage.css";
// import "./titlebar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { date } from "check-types";



export default function Campaigneditpage() {
    const [update_text, setUpdate_text] = useState("")
    const [div_value1, setDiv_value1] = useState("");
    const [div_value2, setDiv_value2] = useState("");
    const [div_value3, setDiv_value3] = useState("");
    const [div_value4, setDiv_value4] = useState("");
    const [div_value5, setDiv_value5] = useState("");
    const [div_value6, setDiv_value6] = useState("");
    const [show, setShow] = useState(false);
    const [Error1, setError1] = useState("")
    const [Error2, setError2] = useState("")
    const [Error3, setError3] = useState("")
    const [Error4, setError4] = useState("")
    const [Error5, setError5] = useState("")
    const [Error6, setError6] = useState("")
    const [Error7, setError7] = useState("")

    const [ediv_value1, setediv_value1] = useState("");
    const [ediv_value2, setediv_value2] = useState("");
    const [ediv_value3, setediv_value3] = useState("");
    const [ediv_value4, setediv_value4] = useState("");
    // const [ediv_value0, setediv_value0] = useState("");
    const [ediv_value10, setediv_value10] = useState("");
    const [ediv_value11, setediv_value11] = useState("");


    const [orangebar, setOrangebar] = useState([]);
    const [greenbar, setGreenbar] = useState([]);
    const [bluebar, setBluebar] = useState([]);
    // const [show2, setShow2] = useState(false);
    const [addleadshow, setaddleadshow] = useState(false);

    const titlebar_name = "Campaign One";
    const [savebuttonshow, setsavebuttonshow] = useState(true);
    const button_value = "SAVE";

    const div_head1 = "Name";
    const div_head2 = "Parent Campaign";
    const div_head3 = "Status";
    const div_head4 = "Start Date";
    const div_head5 = "End Date";
    const div_head6 = "Owner";

    const [Error, setError] = useState("")
    const [arrayData, setArrayData] = useState([]);
    const [arrayData1, setArrayData1] = useState([]);
    const [arraylist, setarraylist] = useState([]);
    const [show1, setShow1] = useState(false)
    const [show2, setshow2] = useState(false)
    const updateid = useSelector((state) => state.update_campaign_id);
    const userid = useSelector((state) => state.userid);

    const [leadid, setLeadid] = useState("")

    const handleclick = (e) => {
        setShow1(!show1)
    };
    // const handleClick11 = (e, item) => {
    //     let temp = [...arrayData];
    //     for (const iterator of temp) {
    //         if (item.id === iterator.id) {
    //             iterator.isclicked = !iterator.isclicked;
    //         }
    //     }
    //     setArrayData(temp)
    // }
    const handleclick1 = (e) => {
        setShow(!show)
        // const url = "http://localhost:3000/dev/getsinglelead";
        const url = "https://n1ejwbrvfc.execute-api.us-east-1.amazonaws.com/dev/getsinglelead";
        const data = { id: updateid };
        const Headers = {};
        axios.post(url, data, { headers: Headers })
            .then((res) => {
                console.log("Response of array==>" + JSON.stringify(res.data));
                for (const a of res.data) {
                    a.isclicked = false
                }
                setArrayData(res.data)
                console.log("Array== " + JSON.stringify(arrayData))
            })
            .catch((err) => {
                console.log("Error==>" + err);
            });
    };
    // const [error, setError] = useState("");
    const handleclick2 =  (e)=> {
        for (let a of arrayData) {
            if (a.isclicked === true) {
                setLeadid(Number(a.id))
            }
        }
        console.log(leadid)
        setShow(!show)
        const url = "https://n1ejwbrvfc.execute-api.us-east-1.amazonaws.com/dev/checklist";
        const data = { userid: userid, LeadId: leadid, CampaignId: updateid };
        const Headers = {}
        axios.post(url, data, { headers: Headers })
            .then((res) => {
                console.log("Response of Checklist==>" + JSON.stringify(res.data));
                setarraylist(res.data)
                console.log("Array==>" + JSON.stringify(arraylist))
            })
            .catch((err) => {
                console.log("Error==>" + err);
            });

    };
    const Saveclick = (e) => {
        setediv_value1("")
        setediv_value2("")
        setediv_value3("")
        setediv_value4("")
        setediv_value10("")
        setediv_value11("")
        // setediv_value0("")

        // setError3("")
        // setError4("")
        // setError5("")

        // setError6("")
        // setError7("")
        // const url = "http://localhost:3000/dev/updateCampaign";
        const url = "https://n1ejwbrvfc.execute-api.us-east-1.amazonaws.com/dev/updateCampaign";
        const data = { CampaignName: div_value1, Startdate: div_value4, Enddate: div_value5, Status: div_value3, Owner: div_value6, ParentCampaign: div_value2 }
        const header = { id:updateid};
        axios.post(url, data, header)
            .then((res) => {
                console.log("Response12==> " + JSON.stringify(res.data))
                let result = res.data + ""
                if (result.includes("CampaignName is mandatory"))
                    setediv_value1("CampaignName is mandatory!!!")

                if (result.includes("ParentCampaign is mandatory")) {
                    setediv_value2("ParentCampaign  is mandatory!!!")
                }

                if (result.includes("Startdate is mandatory")) {
                    setediv_value3("Startdate is mandatory!!!")
                }
                if (result.includes("Enddate is mandatory")) {
                    setediv_value11("Enddate  is mandatory!!!")
                }
                if (result.includes("Status is mandatory")) {
                    setediv_value10("Status  is mandatory!!!")
                }
                if (result.includes("Owner is mandatory")) {
                    setediv_value4("Owner  is mandatory!!!")
                }

                if (result.includes("updated")) {
                    // setediv_value0("Updated!!!")
                    setUpdate_text("succesfully updated!")
                }

            })
            .catch((err) => {
                console.log("Error==> " + err)
            })
    }

    useEffect(() => {
        // const url = "http://localhost:3000/dev/leadfunnel";
        const url = "https://n1ejwbrvfc.execute-api.us-east-1.amazonaws.com/dev/leadfunnel";
        const data = {};
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                // console.log("Response => " + (JSON.stringify(res.data[0].count)) + (JSON.stringify(res.data[1].count)) + (JSON.stringify(res.data[2].count)))
                //console.log("Response => " + (JSON.stringify(res.data[0].count)) + (JSON.stringify(res.data[1].count)) + (JSON.stringify(res.data[2].count)))
                // setOrangebar(res.data[0].count)
                // // // console.log("leadscount==>" + JSON.stringify(res.data[0].leadscount))
                // setGreenbar(res.data[1].count)
                // setBluebar(res.data[2].count)
                console.log("Response => " + (JSON.stringify(res.data[0].count)) + (JSON.stringify(res.data[1].count)) + (JSON.stringify(res.data[2].count)))
                setOrangebar(res.data[0].count)
                setGreenbar(res.data[1].count)
                setBluebar(res.data[2].count)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    }, [])

    useEffect(() => {

        // const url = "http://localhost:3000/dev/getsingleCampaign";
        const url = "https://n1ejwbrvfc.execute-api.us-east-1.amazonaws.com/dev/getsingleCampaign";
        const data = {
            id: updateid,
        };
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("Response==>" + JSON.stringify(res.data))
                // let date3 = new Date(res.data[0].dtStartdate).toLocaleDateString()
                // console.log(date3)
                // const A = new Date(res.data[0].dtStartdate);
                // let day1 = A.getDate();
                // let month1 = A.getMonth();
                // let year1 = A.getFullYear();
                // console.log("year===>" + JSON.stringify({ year1 } - { month1 } - { day1 }))

                // const [startDate, setStartDate] = useState(res.data[0].dtStartdate);
                // // const startDate = res.data[0].dtStartdate;
                // console.log("123==>" + JSON.stringify(startDate))
                // return (
                //     <DatePicker
                //         dateFormat="yyyy-MM-dd"
                //         selected={startDate}
                //         onChange={(date) => setStartDate(date)}
                //     />
                // );

                console.log(res.data[0])
                if (res.data.length > 0) {
                    setDiv_value1(res.data[0].txtCampaignName)
                    setDiv_value4(res.data[0].dtStartdate)
                    // console.log("date==>"+ setDiv_value4({year1}-{month1}-{day1}))
                    setDiv_value5(res.data[0].dtEnddate)
                    setDiv_value3(res.data[0].Status1)
                    setDiv_value6(res.data[0].txtOwner)
                    setDiv_value2(res.data[0].ParentCampaignName)


                }

            })
            .catch((err) => {
                console.log("Response==> " + JSON.stringify(err))
            })
    }, [])


    useEffect(() => {
        // const url = "http://localhost:3000/dev/leadfetch";
        const url = "https://n1ejwbrvfc.execute-api.us-east-1.amazonaws.com/dev/leadfetch";
        const data = { updateid: updateid };
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("Response==>" + JSON.stringify(res.data))
                setArrayData1(res.data)
                console.log("Array== " + JSON.stringify(arrayData1))
            })
            .catch((err) => {
                console.log("Error==>" + err);
            });
    }, [])

    // useEffect(() => {
    //     const url = "http://localhost:3000/dev/";
    //     const data = {};
    //     const header = {};
    //     axios.post(url, data, { headers: header })
    //         .then((res) => {
    //             console.log("Response => " + (JSON.stringify(res.data[0].leadscount)) + (JSON.stringify(res.data[1].leadscount)) + (JSON.stringify(res.data[2].leadscount)))
    //             setOrangebar(res.data[0].leadscount)
    //             console.log("orange==>" + JSON.stringify(res.data[0].leadscount))
    //             setGreenbar(res.data[1].leadscount)
    //             setBluebar(res.data[2].leadscount)
    //         })
    //         .catch((err) => {
    //             console.log("Error => " + err)
    //         })
    // }, [])

    return (
        <>
            <div className="Campaigneditpage_topbar">
                <div className="Campaigneditpage_topbar_1">
                    <Topbar />
                </div>

                <div className="Campaigneditpage_topbar2">
                    <div className="Campaigneditpage_topbar2_left">
                        <LeftBar />
                    </div>
                    <div className="Campaigneditpage_topbar2_right">
                        <div className="Campaigneditpage_topbar2_right_1">
                            <div className="Campaigneditpage_topbar2_right_1_11">
                                <TitleBar titlebar_name={titlebar_name} SaveLead={Saveclick} savebuttonshow={savebuttonshow} button_value={button_value} />
                            </div>
                            <div className="Campaigneditpage_topbar2_right_1_2">
                                <label className="form_successfullyupdate_text">{update_text}</label>
                                <Form addleadshow={addleadshow} div_head1={div_head1} div_head2={div_head2} div_head3={div_head3} div_head4={div_head4} div_head5={div_head5} div_head6={div_head6} setDiv_value1={setDiv_value1} setDiv_value2={setDiv_value2} setDiv_value3={setDiv_value3} setDiv_value4={setDiv_value4} setDiv_value5={setDiv_value5} setDiv_value6={setDiv_value6} div_value1={div_value1} div_value2={div_value2} div_value3={div_value3} div_value4={div_value4} div_value5={div_value5} div_value6={div_value6} setediv_value1={setediv_value1} ediv_value1={ediv_value1} setediv_value2={setediv_value2} ediv_value2={ediv_value2} setediv_value3={setediv_value3} ediv_value3={ediv_value3} setediv_value4={setediv_value4} ediv_value4={ediv_value4} ediv_value10={ediv_value10} setediv_value10={setediv_value10} ediv_value11={ediv_value11} setediv_value11={setediv_value11} />
                            </div>
                        </div>
                        <div className="Campaigneditpage_topbar2_right_2">
                            <div className="Campaigneditpage_topbar2_right_2_left">
                                <Normallist arrayData1={arrayData1} setArrayData1={setArrayData1} handleclick1={handleclick1} />

                                {
                                    show ? (<><div className="Campaigneditpage_Checklist_popup_blur"></div><div className="Campaigneditpage_Checklist_popup">
                                        <CheckList arraylist={arrayData} setArrayData={setArrayData} handleclick2={handleclick2} />
                                    </div></>
                                    ) : (
                                        <></>
                                    )}
                            </div>
                            <div className="Campaigneditpage_topbar2_right_2_right">
                                <Horizontalbar orangebar={orangebar} greenbar={greenbar} bluebar={bluebar} show2={show2} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )

}

const Date = () => {
    // const A =res.data[0].dtStartdate
    const [startDate, setStartDate] = useState(new Date());
    return (
        <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    )
}

