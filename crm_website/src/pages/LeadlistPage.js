import axios from "axios";
import { useState } from "react";
import "./LeadlistPage.css";
import Topbar from "../components/Topbar";
import LeftBar from "../components/LeftBar";
import TitleBar from "../components/Titlebar";
import Filterbar from "../components/Filterbar";
import Mainlist from "../components/Leadlist_Mainlist";
import CheckList from "../components/Checklist1";
import Filter from "../components/Leadlist_filterpopup";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LeadListPage() {
  const navigate = useNavigate();
  function AddLead() {
    navigate("/AddLead");
  }

  const [array_lead_search, setArray_lead_search] = useState([]);
  const aftersearch_array = [];
  const titlebar_name = "Lead List";
  const button_value = "Add Lead";
  const bulkimportshow = true;
  const savebuttonshow = true;
  const [show, setShow] = useState();
  const [array, setArray] = useState([]);
  const [array3, setArray3] = useState([]);
  const [array1, setArray1] = useState([]);
  const editshow = false;
  const [array2, setArray2] = useState([]);
  const [selectall_isclicked, setSelectall_isclicked] = useState(true);
  const [filterpopup_show, setFilterpopup_show] = useState(false);
  const [array_mainlist_duplicate, setArray_mainlist_dplicate] = useState([]);

  const Campaign_id = useSelector((state) => state.update_campaign_id);
  const userid = useSelector((state) => state.userid);
  const update_lead_id = useSelector((state) => state.update_lead_id);

  useEffect(() => {
    const url1 =
      "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/Leadlist";
    // const url = "http://localhost:3000/dev/Leadlist";

    const data1 = {};
    const Headers_leadlist = {};
    axios
      .post(url1, data1, { headers: Headers_leadlist })
      .then((res) => {
        console.log("Response==>" + JSON.stringify(res.data));
        for (const temp of res.data) {
          temp.isclicked = false;
        }
        console.log(res.data);
        setArray(res.data);
        setArray3(res.data);
        setArray_mainlist_dplicate(res.data);
      })

      .catch((err) => {
        console.log("Error==>" + err);
      });
    
    const url_singlelead =
      "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/GetSingleLead";
    const data_singlelead = { id: update_lead_id };
    const headers_singlelead = {};
    axios
      .post(url_singlelead, data_singlelead, { headers: headers_singlelead })
      .then((res) => {
        console.log(JSON.stringify(res.data));
        setArray1(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const url_search_lead =
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/searchlead";
    const data_search_lead = {};
    const header_search_lead = {};
    axios
      .post(url_search_lead, data_search_lead, {
        headers: header_search_lead,
      })
      .then((res) => {
        console.log(res.data);
        setArray_lead_search(res.data);
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

    const url =
      "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/getCampaign";
    const data = { id: userid };
    const headers = {};
    axios
      .post(url, data, { headers: headers })
      .then((res) => {
        console.log("Response of array==>" + JSON.stringify(res.data));
        for (const temp of res.data) {
          temp.isclicked = false;
        }
        setArray2(res.data);
        console.log("Array== " + JSON.stringify(array2));
      })
      .catch((err) => {
        console.log("Error==>" + err);
      });
  };
  const handleclick3 = (e) => {
    setShow(!show);
  };

  const handleclick2 = (e) => {
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
    const data = { LeadId: leadid, CampaignId: campaignid, id: userid };
    const header = {};
    axios
      .post(url, data, { headers: header })
      .then((res) => {
        console.log("Response ==> " + JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log("Error ==> " + err);
      });
  };
  const handleselectall = (e, itm) => {
    setSelectall_isclicked(!selectall_isclicked);
    let temp1 = [...array];
    if (selectall_isclicked === true) {
      for (const iterator of temp1) {
        iterator.isclicked = true;
      }
    } else {
      for (const iterator of temp1) {
        iterator.isclicked = false;
      }
    }
    setArray(temp1);
  };
  const handleclickfilterbar_filter = () => {
    setFilterpopup_show(!filterpopup_show);
  };

  const tasklistsearchshow = true;

  const [search_value, setSearch_value] = useState("");

  const onChange = (event) => {
    setSearch_value(event.target.value);
  };

  const onSearch_updatevalue_from_dropdown = (searchTerm) => {
    setSearch_value(searchTerm);
  };

  const onSearch = (searchTerm) => {
    console.log("array lead search");
    console.log(array_lead_search);
    setSearch_value(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);

    if (searchTerm === "") {
      setArray(array_mainlist_duplicate);
    } else {
      for (let i of array_mainlist_duplicate) {
        if (i.FirstName === searchTerm) {
          aftersearch_array.push(i);
        }
      }
      setArray(aftersearch_array);
    }
  };

  return (
    <>
      <div className="Leadlist_page">
        {filterpopup_show ? (
          <Filter
            handleclickfilterbar_filter={handleclickfilterbar_filter}
            array3={array3}
            array={array}
            setArray={setArray}
          />
        ) : (
          <></>
        )}
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
              <Filterbar
                DeleteFunc={DeleteLead}
                editshow={editshow}
                handleclick1={handleclick1}
                handleselectall={handleselectall}
                handleclickfilterbar_filter={handleclickfilterbar_filter}
                tasklistsearchshow={tasklistsearchshow}
                search_array={array_lead_search}
                setSearch_array={setArray_lead_search}
                search_value={search_value}
                onChange={onChange}
                onSearch={onSearch}
                onSearch_updatevalue_from_dropdown={
                  onSearch_updatevalue_from_dropdown
                }
              />
            </div>
            <div className="Mainlist">
              <Mainlist array={array} setArray={setArray} />
              {show ? (
                <>
                  <div className="leadlistpage_Checklist_popup_blur"></div>
                  <div className="leadlistpage_Checklist_popup">
                    <CheckList
                      handleclick2={handleclick2}
                      setArray2={setArray2}
                      handleclick3={handleclick3}
                      array2={array2}
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
