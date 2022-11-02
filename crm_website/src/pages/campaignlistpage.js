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
export default function CampaignListPage() {
  const updateid = useSelector((state) => state.update_campaign_id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function Addcampaign(){
    return "add campaign page"
  }
  const Updatecampaign = itm =>() => {
    // for (let k of array) {
      // if (k.isclicked === true) {
        // console.log("arraydata===>" + JSON.stringify(k.isclicked));
        dispatch({ type: "setUpdate_campaign_id", payload: itm.id  });
        console.log("updated id==>"+updateid);
      
    
    navigate("/Campaigneditpage");
  }

  const [array, setArray] = useState([]);
  const savebuttonshow = true;
  const titlebar_name = <h3>Campaignlist</h3>;
  const button_value = "Add Campaign";

  // const url = "https://7z5c6akbv9.execute-api.us-east-1.amazonaws.com/verifyotp-dev-GetSingleLead";
  useEffect(() => {
    const url =
      "https://m6vozv93ri.execute-api.us-east-1.amazonaws.com/dev/GetSingleCampaign";
    // const url = "http://localhost:3000/dev/GetSingleCampaign";
    const data = {};
    const Headers = {};

    axios
      .post(url, data, { Headers: Headers })
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
  }, []);

  return (
    <>
      <div className="Campaignlist_page">
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
                SaveLead={Addcampaign}
                savebuttonshow={savebuttonshow}
                titlebar_name={titlebar_name}
                button_value={button_value}
              />
            </div>
            <div className="Campaignlist_Filterbar">
              <Filterbar />
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
