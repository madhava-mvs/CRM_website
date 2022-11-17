import axios from "axios";
import { useState } from "react";
import "./LeadlistPage.css";
import Topbar from "../components/Topbar";
import LeftBar from "../components/LeftBar";
import TitleBar from "../components/Titlebar";
import Filterbar from "../components/Filterbar";
import Mainlist from "../components/Leadlist_Mainlist";
import CheckList from "../components/Checklist1";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LeadListPage() {
  const navigate = useNavigate();
  function AddLead() {
    navigate("/AddLead");
  }
  const titlebar_name = "Lead List";
  const button_value = "Add Lead";
  const bulkimportshow = true;
  const savebuttonshow = true;
  const [show, setShow] = useState();
  const [array, setArray] = useState([]);
  const [array1, setArray1] = useState([]);
  const editshow = (false);
  const [array2, setArray2] = useState([]);
  const [selectall_isclicked, setSelectall_isclicked] = useState(true);


  const Campaign_id = useSelector((state) => state.update_campaign_id);
  const userid = useSelector((state) => state.userid);
  const update_lead_id = useSelector((state) => state.update_lead_id);

  useEffect(() => {
    const url1 =
      "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/Leadlist";
    // const url = "http://localhost:3000/dev/Leadlist";

    const data1 = {};
    const Headers = {};
    axios
      .post(url1, data1, Headers)
      .then((res) => {
        console.log("Response==>" + JSON.stringify(res.data));
        for (const temp of res.data) {
          temp.isclicked = false;
        }
        console.log(res.data);
        setArray(res.data);
      })

      .catch((err) => {
        console.log("Error==>" + err);
      });
    // }, []);

    // const data = localStorage.getItem();
    // useEffect(() => {
    const url =
      "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/GetSingleLead";
    const data = { id: update_lead_id };
    const headers = {};
    axios
      .post(url, data, { headers: headers })
      .then((res) => {
        console.log(JSON.stringify(res.data));
        setArray1(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const DeleteLead = () => {
    console.log("delete array==>" + JSON.stringify(array));

    let leadid;
    for (const k of array) {
      if (k.isclicked === true) {
        leadid = k.id;
      }
    }

    const url =
      "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/DeleteSingleLead";
    // const url = "http://localhost:3000/dev/DeleteSingleLead"
    const data = { id: leadid };
    const header = {};
    axios
      .post(url, data, { headers: header })
      .then((res) => {
        console.log("Response ==> " + JSON.stringify(res.data));
        window.location.reload();
      })
      .catch((err) => {
        console.log("Error ==> " + err);
      });
  };
  const handleclick1 = (e) => {
    setShow(!show);
    const url = "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/getCampaign";
    const data = { id: userid  };
    const headers = {};
    axios.post(url, data, { headers: headers })
        .then((res) => {
            console.log("Response of array==>" + JSON.stringify(res.data));
            for (const temp of res.data) {
              temp.isclicked = false;
            }
            setArray2(res.data)
            console.log("Array== " + JSON.stringify(array2))
        })
        .catch((err) => {
            console.log("Error==>" + err);
        });
   
  };
  const handleclick3 = (e) => {
    setShow(!show);
  };
  const handleclick2 =(e) => {
    console.log("addlead array==>" + JSON.stringify(array));
    console.log("addcamp array==>" + JSON.stringify(array2));


    let leadid;
    for (const k of array) {
      if (k.isclicked === true) {
        leadid = k.id;
      }
    }
    let campaignid;
    for (const i of array2) {
      if (i.isclicked === true) {
        campaignid = i.campaignid;
      }
    }
    const url =
      "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/adddleadtocamp";
    // const url = "http://localhost:3000/dev/DeleteSingleLead"
    const data = { LeadId: leadid ,CampaignId:campaignid, id: userid};
    const header = {};
    axios
      .post(url, data, { headers: header })
      .then((res) => {
        console.log("Response ==> " + JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log("Error ==> " + err);
      });
  }
  const handleselectall = (e, itm) => {
    setSelectall_isclicked(!selectall_isclicked);
    let temp1 = [...array];
    if (selectall_isclicked === true) {
      for (const iterator of temp1) {
        iterator.isclicked = true;
      }
    }
    else{
      for (const iterator of temp1) {
        iterator.isclicked = false;
      }
    }
    setArray(temp1);
  };


  return (
    <>
      <div className="Leadlist_page">
        <div className="div1">
          <Topbar />
        </div>
        <div className="div2">
          <div className="div2_left">
            <LeftBar />
          </div>
          <div className="div2_right">
            <div className="Leadlist_TitleBar">
              <TitleBar
                SaveLead={AddLead}
                titlebar_name={titlebar_name}
                button_value={button_value}
                bulkimportshow={bulkimportshow}
                savebuttonshow={savebuttonshow}
              />
            </div>
            <div className="Leadlist_Filterbar">
              <Filterbar DeleteFunc={DeleteLead} editshow={editshow} handleclick1={handleclick1} handleselectall={handleselectall}/>
            </div>
            <div className="Mainlist">
              <Mainlist array={array} setArray={setArray} />
              {show ? (
                <>
                  <div className="leadlistpage_Checklist_popup_blur"></div>
                  <div className="leadlistpage_Checklist_popup">
                    <CheckList handleclick2={handleclick2} setArray2={setArray2}  handleclick3={handleclick3} array2={array2}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
