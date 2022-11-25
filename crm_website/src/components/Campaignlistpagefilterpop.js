import axios from "axios";
import React, { useEffect, useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import "./tasklist_filterpopup.css";
export default function Campaign_filterbar({
  handleclickfilterbar_filter,
  array_mainlist_duplicate,
  array_mainlist,
  setArray_mainlist,
}) {
  const [array_campaign_filter, setArray_campaign_filter] = useState([]);
  const [dtcreatedon_filter, setDtcreatedon_filter] = useState([]);
  const [filteredarray, setFilteredarray] = useState([]);
  useEffect(() => {
    const url_campaign =
      "https://8mc8vdruyi.execute-api.us-east-1.amazonaws.com/dev/getfiltercampaign";
    const data_campaign = {};
    const header_campaign = {};
    axios
      .post(url_campaign, data_campaign, { headers: header_campaign })
      .then((res) => {
        console.log(res.data);
        setArray_campaign_filter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const options_status = [
    { label: "Active", value: "Active" },
    { label: "InActive", value: "InActive" },
  ];

  const [campaign_searchvalue, setCampaign_searchvalue] = useState("");
  const [status_searchvalue, setStatus_searchvalue] = useState("");
  let filarray = [];
  const handleOnchangecampaign = (val) => {
    setCampaign_searchvalue(val);
    console.log(campaign_searchvalue);
    // console.log(options)
  };

  const handleOnchangestatus = (val) => {
    setStatus_searchvalue(val);
    console.log(status_searchvalue);
    // console.log(options)
  };

  const handleclickapplyfilter = () => {
    const valuecampaignarray = campaign_searchvalue.split(/[,]/);
    const valuestatusarray = status_searchvalue.split(/[,]/);
    console.log("dt filter==> " + dtcreatedon_filter);
    console.log("campaign array==> " + valuecampaignarray.length);
    console.log("status array==> " + valuestatusarray.length);
    console.log("tasklist test==> " + JSON.stringify(array_mainlist_duplicate));
    console.log(array_mainlist_duplicate);
    if (
      dtcreatedon_filter.toString() === "" &&
      valuecampaignarray[0] === "" &&
      valuestatusarray[0] === ""
    ) {
      setArray_mainlist(array_mainlist_duplicate);
    } else if (valuecampaignarray[0] === "" && valuestatusarray[0] === "") {
      for (let i of array_mainlist_duplicate) {
        if (i.dtcreatedon !== null) {
          if (
            i.dtcreatedon.toString().substring(0, 10) ===
            dtcreatedon_filter.toString()
          ) {
            filarray.push(i);
          }
        }
      }
      setArray_mainlist(filarray);
    } else if (
      dtcreatedon_filter.toString() === "" &&
      valuestatusarray[0] === ""
    ) {
      for (let i of valuecampaignarray) {
        for (let j of array_mainlist_duplicate) {
          if (i === j.campaignid.toString()) {
            console.log(j);
            filarray.push(j);
          }
        }
      }
      setArray_mainlist(filarray);
      console.log(valuecampaignarray);
    } else if (
      dtcreatedon_filter.toString() === "" &&
      valuecampaignarray[0] === ""
    ) {
      for (let i of valuestatusarray) {
        for (let j of array_mainlist_duplicate) {
          console.log(j.status);
          if (i === j.status.toString()) {
            console.log(j);
            filarray.push(j);
          }
        }
      }
      setArray_mainlist(filarray);
    } else if (
      dtcreatedon_filter.toString() !== "" &&
      valuecampaignarray[0] !== "" &&
      valuestatusarray[0] === ""
    ) {
      console.log("inside date and campaign filter");
      for (let i of valuecampaignarray) {
        for (let j of array_mainlist_duplicate) {
          if (j.dtcreatedon !== null) {
            if (
              j.dtcreatedon.toString().substring(0, 10) ===
                dtcreatedon_filter.toString() &&
              i === j.campaignid.toString()
            ) {
              console.log(j);
              filarray.push(j);
            }
          }
        }
      }
      setArray_mainlist(filarray);
    } else if (
      dtcreatedon_filter.toString() !== "" &&
      valuecampaignarray[0] === "" &&
      valuestatusarray[0] !== ""
    ) {
      for (let i of valuestatusarray) {
        for (let j of array_mainlist_duplicate) {
          if (j.dtcreatedon !== null) {
            if (
              j.dtcreatedon.toString().substring(0, 10) ===
                dtcreatedon_filter.toString() &&
              i === j.status.toString()
            ) {
              console.log(j);
              filarray.push(j);
            }
          }
        }
      }
      setArray_mainlist(filarray);
    } else if (
      dtcreatedon_filter.toString() === "" &&
      valuecampaignarray[0] !== "" &&
      valuestatusarray[0] !== ""
    ) {
      console.log("your inside campaign and status");
      for (let i of valuecampaignarray) {
        for (let j of valuestatusarray) {
          for (let k of array_mainlist_duplicate) {
            if (
              i === k.campaignid.toString() &&
              j === k.status.toString()
            ) {
              filarray.push(k);
            }
          }
        }
      }
      setArray_mainlist(filarray);
    } else {
      console.log("all filters");
      for (let i of valuecampaignarray) {
        for (let j of valuestatusarray) {
          for (let k of array_mainlist_duplicate) {
            if (k.dtcreatedon !== null) {
              if (
                k.dtcreatedon.toString().substring(0, 10) ===
                  dtcreatedon_filter.toString() &&
                i === k.campaignid.toString() &&
                j === k.status.toString()
              ) {
                filarray.push(k);
              }
            }
          }
        }
      }
      setArray_mainlist(filarray);
    }
    // for (let i of array_mainlist) {
    //   let date = i.dtcreatedon.toString().substring(0, 10);
    //   console.log("outside date==> " + date);
    //   if (date == dtcreatedon_filter.toString()) {
    //     console.log(i);
    //   }
    // }
  };

  return (
    <div className="filter_outer">
      <div className="filter_inner">
        <div className="filter_inner1">
          <div className="filter_inner1_date">
            <label>date created on:</label>
            <input
              type={"date"}
              value={dtcreatedon_filter}
              onChange={(e) => setDtcreatedon_filter(e.target.value)}
            />
          </div>
          <div className="filter_inner1_campaign">
            <label>campaign search:</label>
            <br />
            <MultiSelect
              className="multi_select"
              onChange={handleOnchangecampaign}
              options={array_campaign_filter}
            />
          </div>
          <div className="filter_inner1_status">
            <label>status search:</label>
            <br />
            <MultiSelect
              className="multi_select"
              onChange={handleOnchangestatus}
              options={options_status}
            />
          </div>
        </div>
        <div className="filter_inner2">
          {/* <div className="filter_inner2_1">
            <AiFillDelete className="filter_inner2_deleteicon" />
            <label>clear filter</label>
          </div> */}
          <div className="filter_inner2_buttons">
            <button
              className="tasklist_applyfilter_button"
              onClick={handleclickapplyfilter}
            >
              Apply filters
            </button>
            <button
              className="tasklist_cancel_button"
              onClick={handleclickfilterbar_filter}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
