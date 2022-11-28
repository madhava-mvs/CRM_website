import axios from "axios";
import { useState } from "react";
import "./campaignlistpage.css";
import Topbar from "../components/Topbar";
import LeftBar from "../components/LeftBar";
import TitleBar from "../components/Titlebar";
import Filterbar from "../components/Filterbar";
import Mainlist from "../components/Campaignlist_Mainlist";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Campaign_filterbar from "../components/Campaignlistpagefilterpop";

export default function CampaignListPage() {
  const updateid = useSelector((state) => state.update_campaign_id);
  const [filterpopup_show, setFilterpopup_show] = useState(false);
  const [array_mainlist_duplicate, setArray_mainlist_dplicate] = useState([]);
  const search_dropdownshow=true;
  const editshow = (true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobrole = useSelector((state) => state.jobrole);
  const userid = useSelector((state) => state.userid);
  const handleclick_Addcampaign = () => {
    navigate("/AddCampaign")
  }







  useEffect(() => {
    //const url = "http://localhost:3000/dev/taskfetch";
    const url =
"https://0gyn2icy6e.execute-api.us-east-1.amazonaws.com/dev/newallcamp_admin";
    const data = {};
    const header = {};
    axios
      .post(url, data, { headers: header })
      .then((res) => {
        if (jobrole == "Admin") {
          console.log("Response of admin   ==>" + JSON.stringify(res.data));
       for (const temp of res.data) {
          temp.isclicked = false;
        }
        console.log(res.data);
        setArray(res.data);
        setArray_mainlist_dplicate(res.data);
        } else if (jobrole == "Manager") {
          const url =
     "https://0gyn2icy6e.execute-api.us-east-1.amazonaws.com/dev/newallcamp_manager";

          const data = {
            id: userid,
          };
          const header = {};
          axios
            .post(url, data, { headers: header })
            .then((res) => {
              console.log("Response   ==>" + JSON.stringify(res.data));
       for (const temp of res.data) {
          temp.isclicked = false;
        }
        console.log(res.data);
        setArray(res.data);
        setArray_mainlist_dplicate(res.data);
            })
            .catch((err) => {
              console.log("Error==>" + err);
            });
        } else if (jobrole == "User") {
          const url =
            "https://0gyn2icy6e.execute-api.us-east-1.amazonaws.com/dev/newallcamp_users";

          const data = {
            id: userid,
          };
          const header = {};
          axios
            .post(url, data, { headers: header })
            .then((res) => {
              console.log("Response   ==>" + JSON.stringify(res.data));
                   for (const temp of res.data) {
          temp.isclicked = false;
        }
        console.log(res.data);
        setArray(res.data);
        setArray_mainlist_dplicate(res.data);
            })
            .catch((err) => {
              console.log("Error==>" + err);
            });
        }
      })
      .catch((err) => {
        console.log("Error==>" + err);
      });

    }, []);
















  const Deletecampaign = () => {
    console.log("delete array==>" + JSON.stringify(array))

    let campid
    for (const k of array) {
      if (k.isclicked === true) {
        campid = Number(k.campaignid)
      }
    }

    // const url = "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/DeleteSingleLead";
    const url = "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/DeleteSingleCampaign"
    const data = { id: campid };
    const header = {};
    axios.post(url, data, { headers: header })
      .then((res) => {
        console.log("Response ==> " + JSON.stringify(res.data))
        window.location.reload();

      })
      .catch((err) => {
        console.log("Error ==> " + err)
      })
  }


  const tasklistsearchshow = true;


  const Updatecampaign = itm =>() => {
    // for (let k of array) {
      // if (k.isclicked === true) {
        // console.log("arraydata===>" + JSON.stringify(k.isclicked));
        dispatch({ type: "setUpdate_campaign_id", payload: itm.campaignid  });
        console.log("updated id==>"+updateid);
      
    
    navigate("/Campaigneditpage");
  }

  const [array, setArray] = useState([]);
  const [selectall_isclicked, setSelectall_isclicked] = useState([]);
  const [array_campaign_search, setArray_campaign_search] = useState([]);
  const aftersearch_array = [];
  const savebuttonshow = true;
  const titlebar_name = "Campaignlist";
  const button_value = "Add Campaign";

  // const url = "https://7z5c6akbv9.execute-api.us-east-1.amazonaws.com/verifyotp-dev-GetSingleLead";
  useEffect(() => {
    // const url =
    //   // "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/Campaignlist";
    //   "https://wi1qfr9f9f.execute-api.us-east-1.amazonaws.com/dev/getcampaignr"
    // // const url = "http://localhost:3000/dev/GetSingleCampaign";
    // const data = {};
    // const Headers = {};

    // axios
    //   .post(url, data, { Headers: Headers })
    //   .then((res) => {
    //     console.log("Response==>" + JSON.stringify(res.data));
    //     for (const temp of res.data) {
    //       temp.isclicked = false;
    //     }
    //     console.log(res.data);
    //     setArray(res.data);
    //     setArray_mainlist_dplicate(res.data);

    //   })

    //   .catch((err) => {
    //     console.log("Error==>" + err);
    //   });
      
      const url_search_campaign =
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/campaignsearch";
    const data_search_campaign = {};
    const header_search_campaign = {};
    axios
      .post(url_search_campaign, data_search_campaign, {
        headers: header_search_campaign,
      })
      .then((res) => {
        console.log(res.data);
        setArray_campaign_search(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const handleselectall = (e, itm) => {
    setSelectall_isclicked(!selectall_isclicked);
    let temp = [...array];
    if (selectall_isclicked === true) {
      for (const iterator of temp) {
        iterator.isclicked = true;
      }
    }
    else{
      for (const iterator of temp) {
        iterator.isclicked = false;
      }
    }
    setArray(temp);
  };


  const handleclickfilterbar_filter = () => {
    setFilterpopup_show(!filterpopup_show);
  };





  const [search_value, setSearch_value] = useState("");

  const onChange = (event) => {
    setSearch_value(event.target.value);
  };

  const onSearch_updatevalue_from_dropdown = (searchTerm) => {
    setSearch_value(searchTerm);
  };

  const onSearch = (searchTerm) => {
    console.log("array campaign search");
    console.log(array_campaign_search);
    setSearch_value(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);

    if (searchTerm === "") {
      setArray(array_mainlist_duplicate);
    }  else {
      for (let i of array_mainlist_duplicate) {
        if (i.CampaignName === searchTerm) {
          aftersearch_array.push(i);
        }
      }
      setArray(aftersearch_array);
    }
  };
















  return (
    <>
      <div className="Campaignlist_page">

      {filterpopup_show ? (
          // <Tasklist_filterbar
          <Campaign_filterbar
            handleclickfilterbar_filter={handleclickfilterbar_filter}
            array_mainlist_duplicate={array_mainlist_duplicate}
            array_mainlist={array}
        
            setArray_mainlist={setArray}
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
            <div className="Campaignlist_TitleBar">
              <TitleBar
                SaveLead={handleclick_Addcampaign}
                savebuttonshow={savebuttonshow}
                titlebar_name={titlebar_name}
                button_value={button_value}
              />
            </div>
            <div className="Campaignlist_Filterbar">
              <Filterbar DeleteFunc={Deletecampaign} editshow={editshow} handleselectall={handleselectall} 
                         handleclickfilterbar_filter={handleclickfilterbar_filter}
                         search_dropdownshow={search_dropdownshow}
                         tasklistsearchshow={tasklistsearchshow}
                         search_array={array_campaign_search}
                         setSearch_array={setArray_campaign_search}
                         search_value={search_value}
                         onChange={onChange}
                         onSearch={onSearch}
                         onSearch_updatevalue_from_dropdown={
                           onSearch_updatevalue_from_dropdown
                         }
            />
            </div>
            <div className="Mainlist">
              <Mainlist array={array} setArray={setArray} Updatecampaign={Updatecampaign} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}