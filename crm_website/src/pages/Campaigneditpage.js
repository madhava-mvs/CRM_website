import Form from "../components/Campaignedit_Form";
import Horizontalbar from "../components/Horizontalbar";
import LeftBar from "../components/LeftBar";
import Normallist from "../components/Normallist";
// import Normallist1 from "../components/Normallist1";
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
    const [showsale, setShowsale] = useState(false);


    const [ediv_value1, setediv_value1] = useState("");
    const [ediv_value2, setediv_value2] = useState("");
    const [ediv_value3, setediv_value3] = useState("");
    const [ediv_value4, setediv_value4] = useState("");
    // const [ediv_value0, setediv_value0] = useState("");
    const [ediv_value10, setediv_value10] = useState("");
    const [ediv_value11, setediv_value11] = useState("");


    const [orangebar, setOrangebar] = useState("");
    const [greenbar, setGreenbar] = useState([]);
    const [bluebar, setBluebar] = useState([]);
    // const [show2, setShow2] = useState(false);
    const [addleadshow, setaddleadshow] = useState(false);

    const titlebar_name = "Campaign One";
    const [savebuttonshow, setsavebuttonshow] = useState(true);
    const button_value = "SAVE";

    const [leadsfunnel_popup_show, setleadsfunnel_popup_show] = useState(false)

    const div_head1 = "Name";
    const div_head2 = "ParentCampaign";
    const div_head3 = "Status";
    const div_head4 = "StartDate";
    const div_head5 = "EndDate";
    const div_head6 = "Owner";
    const Normallist_name = "Leads";
    const Hello = "SalesPerson";

    const [Error, setError] = useState("")
    const [arrayData, setArrayData] = useState([]);
    const [arrayData1, setArrayData1] = useState([]);
    const [arrayData22, setArrayData22] = useState([]);
    const [arrayData2, setArrayData2] = useState([]);
    const [arraylist, setarraylist] = useState([]);
    const [arrayData8, setArrayData8] = useState([]);
    const [ArrayData8_duplicate, setArrayData8_duplicate] = useState([]);
    const [ArrayData_duplicate, setArrayData_duplicate] = useState([]);

    // const [arraylist1, setarraylist1] = useState([]);
    const [show1, setShow1] = useState(false)
    const [show11, setShow11] = useState(false)
    const [show2, setshow2] = useState(false)
    const Campaign_id = useSelector((state) => state.update_campaign_id);
    const userid = useSelector((state) => state.userid);
    const date1show = (true);
    const date2show = (true);
    const checkshow = (true);
    const checkshow1 = (true);
    // const update_campaign_id = useSelector((state) => state.update_lead_id);

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
        const url = "https://2jcasgj6sf.execute-api.us-east-1.amazonaws.com/dev/getsinglelead";
        const data = { updateid: Campaign_id };
        const headers = {};
        axios.post(url, data, { headers: headers })
            .then((res) => {
                console.log("Response of array==>" + JSON.stringify(res.data));
                for (const a of res.data) {
                    a.isclicked = false
                }
                setArrayData(res.data)
                setArrayData_duplicate(res.data)
                console.log("Array== " + JSON.stringify(arrayData))
            })
            .catch((err) => {
                console.log("Error==>" + err);
            });

        // let arraydata_change = []
        // for (let i of ArrayData_duplicate) {
        //     let c = 0
        //     for (let j of arrayData1) {
        //         if (i.txtFirstName === j.txtFirstName) {
        //             c += 1
        //         }
        //     }
        //     if (c === 0) {
        //         arraydata_change.push(i)
        //     }
        // }
        // console.log("array data change123")
        // console.log(arraydata_change)
        // setArrayData8(arraydata_change)

        // let arraydatalead = []
        // for (let i of arrayData) {
        //     let a = 0
        //     for (let j of arraydatalead) {
        //         if (i == j) {
        //             a += 1
        //         }
        //     }
        //     if (a == 0) {
        //         arraydatalead.push(i)
        //     }
        // }
        // setArrayData(arraydatalead)


    };
    const handleclick3 = (e) => {
        setShow(!show)
    }
    const handleclick4 = (e) => {
        setShowsale(!showsale)
    }


    const handleclick2 = (e) => {
        const url = "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/Addleadtocampaign";
        const data = { userid: userid, arrayData: arrayData, CampaignId: Campaign_id };
        const Headers = {}
        axios.post(url, data, { headers: Headers })
            .then((res) => {
                console.log("Response of Checklist of lead==>" + JSON.stringify(res.data));
                setarraylist(res.data)
                console.log("Array of lead==>" + JSON.stringify(arraylist))
                window.location.reload();
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
        // const url = "http://localhost:3000/dev/updateCampaign";
        const url = "https://2jcasgj6sf.execute-api.us-east-1.amazonaws.com/dev/updateCampaign";
        const data = { CampaignName: div_value1, Startdate: div_value4, Enddate: div_value5, Status: div_value3, Owner: div_value6, ParentCampaign: div_value2, updateid: Campaign_id }
        const header = {};
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
                    setUpdate_text("Succesfully updated!")
                }

            })
            .catch((err) => {
                console.log("Error==> " + err)
            })
    }

    const handleclick22 = (e) => {
        const url = "https://2jcasgj6sf.execute-api.us-east-1.amazonaws.com/dev/Addsalestocampaign";
        // const url ="http://localhost:3000/dev/Addsalestocampaign"
        const data = { arrayDataSales: arrayData8, CampaignId: Campaign_id };
        const Headers = {}
        axios.post(url, data, { headers: Headers })
            .then((res) => {
                console.log("Response of Checklist of sales==>" + JSON.stringify(res.data));
                setarraylist(res.data)
                console.log("Array of sales==>" + JSON.stringify(arraylist))
                window.location.reload();
            })
            .catch((err) => {
                console.log("Error==>" + err);
            });

    };

    useEffect(() => {
        // const url = "http://localhost:3000/dev/getsinglelead";
        const url = "https://2jcasgj6sf.execute-api.us-east-1.amazonaws.com/dev/getsinglesales";
        const data = { CampaignId: Campaign_id, userid: userid };
        const headers = {};
        axios.post(url, data, { headers: headers })
            .then((res) => {
                console.log("Response of array==>" + JSON.stringify(res.data))
                for (const a of res.data) {
                    a.isclicked = false
                }
                setArrayData8(res.data)
                setArrayData8_duplicate(res.data)

                console.log("Array of sales== " + JSON.stringify(arrayData8))
            })
            .catch((err) => {
                console.log("Error==>" + err);
            });


    }, [])


    const handleclick12 = (e) => {
        setShowsale(!showsale)
        let arraydata8_change = []
        for (let i of ArrayData8_duplicate) {
            let c = 0
            for (let j of arrayData22) {
                if (i.txtFirstName === j.txtFirstName) {
                    c += 1
                }
            }
            if (c === 0) {
                arraydata8_change.push(i)
            }
        }
        console.log("array data change")
        console.log(arraydata8_change)
        setArrayData8(arraydata8_change)
    }

    useEffect(() => {
        console.log("Campaign ID==>", Campaign_id)

        // const url = "http://localhost:3000/dev/leadfunnel";
        const url = "https://2jcasgj6sf.execute-api.us-east-1.amazonaws.com/dev/leadfunnel";
        const data = { id: Campaign_id };
        const headers = {};
        axios.post(url, data, { headers: headers })
            .then((res) => {
                // console.log("Response => " + (JSON.stringify(res.data[0].count)) + (JSON.stringify(res.data[1].count)) + (JSON.stringify(res.data[2].count)))
                //console.log("Response => " + (JSON.stringify(res.data[0].count)) + (JSON.stringify(res.data[1].count)) + (JSON.stringify(res.data[2].count)))
                // setOrangebar(res.data[0].count)
                // console.log("count==>>"+(res.data[0].count)+(res.data[1].count)+(res.data[2].count))
                console.log("final count==>" + JSON.stringify(res.data))
                // // // console.log("leadscount==>" + JSON.stringify(res.data[0].leadscount))
                // setGreenbar(res.data[1].count)
                // setBluebar(res.data[2].count)
                // console.log("count->" )
                console.log("Response => " + JSON.stringify(res.data[0]) + (JSON.stringify(res.data[1])) + (JSON.stringify(res.data[2])))
                setOrangebar(res.data[0].counts)
                setBluebar(res.data[1].counts)
                setGreenbar(res.data[2].counts)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
        // }, [])

        // useEffect(() => {

        // const url = "http://localhost:3000/dev/getsingleCampaign";
        const url1 = "https://2jcasgj6sf.execute-api.us-east-1.amazonaws.com/dev/getsingleCampaign";
        const data1 = {
            id: Campaign_id,
        };
        const header1 = {};
        axios.post(url1, data1, { headers: header1 })
            .then((res) => {
                console.log("Response==>" + JSON.stringify(res.data))

                console.log(res.data[0])
                if (res.data.length > 0) {
                    var d = res.data[0].dtStartdate;
                    var db = new window.Date(d).toISOString().split(".")[0];
                    var c = res.data[0].dtEnddate;
                    var cb = new window.Date(c).toISOString().split(".")[0];
                    setDiv_value1(res.data[0].txtCampaignName)
                    setDiv_value4(db.substring(0, 10))
                    // setDiv_value4(res.data[0].dtStartdate)

                    // setDiv_value5(res.data[0].dtEnddate)
                    // console.log("date==>"+ setDiv_value4({year1}-{month1}-{day1}))
                    setDiv_value5(cb.substring(0, 10))
                    setDiv_value3(res.data[0].Status1)
                    setDiv_value6(res.data[0].txtFirstName)
                    setDiv_value2(res.data[0].ParentCampaignName)


                }

            })
            .catch((err) => {
                console.log("Response==> " + JSON.stringify(err))
            })
        // }, [])


        // useEffect(() => {
        // const url = "http://localhost:3000/dev/leadfetch";
        const url2 = "https://2jcasgj6sf.execute-api.us-east-1.amazonaws.com/dev/leadfetch";
        const data2 = { updateid: Campaign_id };
        const header2 = {};
        axios.post(url2, data2, { headers: header2 })
            .then((res) => {
                console.log("Response of lead==>" + JSON.stringify(res.data))
                setArrayData1(res.data)
                console.log("Array of lead== " + JSON.stringify(arrayData1))
            })
            .catch((err) => {
                console.log("Error==>" + err);
            });
        let arrayData11 = []
        for (let i of arrayData1) {
            let c = 0
            for (let j of arrayData11) {
                if (i === j) {
                    c += 1
                }
            }
            if (c == 0) {
                arrayData11.push(i)
            }
        }
        setArrayData1(arrayData11)


        const url3 = "https://2jcasgj6sf.execute-api.us-east-1.amazonaws.com/dev/Salesfetch";
        const data3 = { id: Campaign_id };
        const header3 = {};
        axios.post(url3, data3, { headers: header3 })
            .then((res) => {
                console.log("Response of sales==>" + JSON.stringify(res.data))
                setArrayData22(res.data)
                console.log("Array of sales== " + JSON.stringify(arrayData22))
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
                                <Normallist arrayData1={arrayData1} setArrayData1={setArrayData1} handleclick1={handleclick1} Normallist_name={Normallist_name} date1show={date1show} />

                                {
                                    show ? (<><div className="Campaigneditpage_Checklist_popup_blur"></div><div className="Campaigneditpage_Checklist_popup">
                                        <CheckList arraylist={arrayData} setArrayData={setArrayData} handleclick2={handleclick2} handleclick3={handleclick3} checkshow={checkshow} />
                                    </div></>
                                    ) : (
                                        <></>
                                    )}
                            </div>
                            <div className="Campaigneditpage_topbar2_right_2_right">
                                <Horizontalbar orangebar={orangebar} setOrangebar={setOrangebar} greenbar={greenbar} setGreenbar={setGreenbar} bluebar={bluebar} setBluebar={setBluebar} show2={show2} leadsfunnel_popup_show={leadsfunnel_popup_show} />
                            </div>
                        </div>
                        <div className="Campaigneditpage_topbar2_right_3">
                            <div className="Campaigneditpage_topbar2_right_3_left">
                                <Normallist arrayData1={arrayData22} setArrayData1={setArrayData22} handleclick1={handleclick12} Normallist_name={Hello} date2show={date2show} />

                                {
                                    showsale ? (<><div className="Campaigneditpage_Checklist_popup_blur"></div>
                                        <div className="Campaigneditpage_Checklist_popup_sales">
                                            <CheckList arraylist={arrayData8} setArrayData8={setArrayData8} handleclick2={handleclick22} handleclick3={handleclick4} checkshow1={checkshow1} />
                                        </div></>
                                    ) : (
                                        <></>
                                    )}
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

