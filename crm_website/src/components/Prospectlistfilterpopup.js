import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import "./tasklist_filterpopup.css";

export default function Prospect_filterbar({
  
  handleclickfilterbar_filter,
  array_mainlist_duplicate,
  array_mainlist,
  setArray_mainlist,
}) 
{
  const [array_campaign_filter, setArray_campaign_filter] = useState([]);
  const [updatedon_filter, setupdatedon_filter] = useState([]);
  const [array_location, setarray_location] = useState([]);
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

  useEffect(() => {
    const url_location =
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/location";
    const data_location = {};
    const header_location = {};
    axios
      .post(url_location, data_location, { headers: header_location })
      .then((res) => {
        console.log(res.data);
        setarray_location(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const options_status = [
  //   { label: "To Do", value: "1" },
  //   { label: "In Progress", value: "2" },
  //   { label: "Completed", value: "3" },
  // ];

  const [campaign_searchvalue, setCampaign_searchvalue] = useState("");
  const [location_searchvalue, setLocation_searchvalue] = useState("");
  // const [status_searchvalue, setStatus_searchvalue] = useState("");
  let filarray = [];
  const handleOnchangecampaign = (val) => {
    setCampaign_searchvalue(val);
    console.log(campaign_searchvalue);
    // console.log(options)
  };

  const handleOnchangelocation = (val) => {
    setLocation_searchvalue(val);
    console.log(location_searchvalue);
    // console.log(options)
  };

  const handleclickapplyfilter = () => {
    const valuecampaignarray = campaign_searchvalue.split(/[,]/);
    const valuelocationarray = location_searchvalue.split(/[,]/);
    console.log("dt filter==> " + updatedon_filter);
    console.log("campaign array==> " + valuecampaignarray.length);
    console.log("location array==> " + valuelocationarray.length);
    console.log("tasklist test==> " + JSON.stringify(array_mainlist_duplicate));
    console.log(array_mainlist_duplicate);
    if (
      updatedon_filter.toString() === "" &&
      valuecampaignarray[0] === "" &&
      valuelocationarray[0] === ""
    ) {
      setArray_mainlist(array_mainlist_duplicate);
    } else if (valuecampaignarray[0] === "" && valuelocationarray[0] === "") {
      for (let i of array_mainlist_duplicate) {
        if (i.updatedon !== null) {
          if (
            i.updatedon.toString().substring(0, 10) ===
            updatedon_filter.toString()
          ) {
            filarray.push(i);
          }
        }
      }
      setArray_mainlist(filarray);
    } else if (
      updatedon_filter.toString() === "" &&
      valuelocationarray[0] === ""
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
      updatedon_filter.toString() === "" &&
      valuecampaignarray[0] === ""
    ) {
     console.log("else if location")
     console.log(valuelocationarray)
     console.log(array_mainlist_duplicate)
      for (let i of valuelocationarray) {
        for (let j of array_mainlist_duplicate) {
          // console.log(j.id.toString());
          if (i === j.state) {
            console.log(j);
            filarray.push(j);
          }
        }
      }
      
      setArray_mainlist(filarray);
    } else if (
      updatedon_filter.toString() !== "" &&
      valuecampaignarray[0] !== "" &&
      valuelocationarray[0] === ""
    ) {
      console.log("inside date and campaign filter");
      for (let i of valuecampaignarray) {
        for (let j of array_mainlist_duplicate) {
          if (j.updatedon !== null) {
            if (
              j.updatedon.toString().substring(0, 10) ===
              updatedon_filter.toString() &&
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
      updatedon_filter.toString() !== "" &&
      valuecampaignarray[0] === "" &&
      valuelocationarray[0] !== ""
    ) {
      for (let i of valuelocationarray) {
        for (let j of array_mainlist_duplicate) {
          if (j.updatedon !== null) {
            if (
              j.updatedon.toString().substring(0, 10) ===
              updatedon_filter.toString() &&
              i === j.state.toString()
            ) {
              console.log(j);
              filarray.push(j);
            }
          }
        }
      }
      setArray_mainlist(filarray);
    } else if (
      updatedon_filter.toString() === "" &&
      valuecampaignarray[0] !== "" &&
      valuelocationarray[0] !== ""
    ) {
      console.log("your inside campaign and status");
      for (let i of valuecampaignarray) {
        for (let j of valuelocationarray) {
          for (let k of array_mainlist_duplicate) {
            if (
              i === k.campaignid.toString() &&
              j === k.state.toString()
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
        for (let j of valuelocationarray) {
          for (let k of array_mainlist_duplicate) {
            if (k.updatedon !== null) {
              if (
                k.updatedon.toString().substring(0, 10) ===
                updatedon_filter.toString() &&
                i === k.campaignid.toString() &&
                j === k.state.toString()
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
            <label>date updated on:</label>
            <input
              type={"date"}
              value={updatedon_filter}
              onChange={(e) => setupdatedon_filter(e.target.value)}
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
          <div className="filter_inner1_campaign">
            <label>Location:</label>
            <br />
            <MultiSelect
              className="multi_select"
              onChange={handleOnchangelocation}
              options={array_location}
            />
          </div>
        </div>
        <div className="filter_inner2">
          <div className="filter_inner2_1">
            <AiFillDelete className="filter_inner2_deleteicon" />
            <label>clear filter</label>
          </div>
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
