import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import "./tasklist_filterpopup.css";
export default function Filter({
  handleclickfilterbar_filter,
  array3,
  array,
  setArray,
}) {
  const [array_location, setarray_location] = useState([]);
  const [array_Company, setarray_Company] = useState([]);

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

    const url_Company =
      "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/Company";
    const data_Company = {};
    const header_Company = {};
    axios
      .post(url_Company, data_Company, { headers: header_Company })
      .then((res) => {
        console.log(res.data);
        setarray_Company(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [dtcreatedon_filter, setDtcreatedon_filter] = useState([]);
  // const options_company = [
  //   { label: "biz", value: "biz" },
  //   { label: "Bizcloud", value: "Bizcloud" },
  //   { label: "Honda", value: "Honda" },
  //   { label: "ABCD", value: "ABCD" },
  //   { label: "Devfactory", value: "Devfactory" },

  // ];
  // const options_State = [
  //   { label: "Kerala", value: "Kerala" },
  //   { label: "Telangana", value: "Telangana" },
  //   { label: "Maharastra", value: "Maharastra" },
  //   { label: "Andhra Pradesh", value: "Andhra Pradesh" },
  //   { label: "Tamilnadu", value: "Tamilnadu" },
  //   { label: "Himachal Pradesh", value: "Himachal Pradesh" },

  // ];
  const [campaign_searchvalue, setCampaign_searchvalue] = useState("");
  const [status_searchvalue, setStatus_searchvalue] = useState("");
  let filarray = [];
  const handleOnchangecampaign = (val) => {
    setCampaign_searchvalue(val);
    console.log(campaign_searchvalue);
  };

  const handleOnchangestatus = (val) => {
    setStatus_searchvalue(val);
    console.log(status_searchvalue);
  };

  const handleclickapplyfilter = () => {
    const valuecampaignarray = campaign_searchvalue.split(/[,]/);
    const valuestatusarray = status_searchvalue.split(/[,]/);
    console.log("dt filter==> " + dtcreatedon_filter);
    console.log("campaign array==> " + valuecampaignarray.length);
    console.log("status array==> " + valuestatusarray.length);
    console.log("leadlist test==> " + JSON.stringify(array3));
    console.log(array3);
    if (
      dtcreatedon_filter.toString() === "" &&
      valuecampaignarray[0] === "" &&
      valuestatusarray[0] === ""
    ) {
      setArray(array3);
    } else if (valuecampaignarray[0] === "" && valuestatusarray[0] === "") {
      for (let i of array3) {
        if (i.CreatedOn !== null) {
          if (
            i.CreatedOn.toString().substring(0, 10) ===
            dtcreatedon_filter.toString()
          ) {
            filarray.push(i);
          }
        }
      }
      setArray(filarray);
    } else if (
      dtcreatedon_filter.toString() === "" &&
      valuestatusarray[0] === ""
    ) {
      for (let i of valuecampaignarray) {
        for (let j of array3) {
          if (i === j.state) {
            console.log(j);
            filarray.push(j);
          }
        }
      }
      setArray(filarray);
      console.log(valuecampaignarray);
    } else if (
      dtcreatedon_filter.toString() === "" &&
      valuecampaignarray[0] === ""
    ) {
      for (let i of valuestatusarray) {
        for (let j of array3) {
          console.log(j.CompanyName);
          if (i === j.CompanyName) {
            console.log(j);
            filarray.push(j);
          }
        }
      }
      setArray(filarray);
    } else if (
      dtcreatedon_filter.toString() !== "" &&
      valuecampaignarray[0] !== "" &&
      valuestatusarray[0] === ""
    ) {
      console.log("inside date and campaign filter");
      for (let i of valuecampaignarray) {
        for (let j of array3) {
          if (j.CreatedOn !== null) {
            if (
              j.CreatedOn.toString().substring(0, 10) ===
                dtcreatedon_filter.toString() &&
              i === j.state
            ) {
              console.log(j);
              filarray.push(j);
            }
          }
        }
      }
      setArray(filarray);
    } else if (
      dtcreatedon_filter.toString() !== "" &&
      valuecampaignarray[0] === "" &&
      valuestatusarray[0] !== ""
    ) {
      for (let i of valuestatusarray) {
        for (let j of array3) {
          if (j.CreatedOn !== null) {
            if (
              j.CreatedOn.toString().substring(0, 10) ===
                dtcreatedon_filter.toString() &&
              i === j.CompanyName
            ) {
              console.log(j);
              filarray.push(j);
            }
          }
        }
      }
      setArray(filarray);
    } else if (
      dtcreatedon_filter.toString() === "" &&
      valuecampaignarray[0] !== "" &&
      valuestatusarray[0] !== ""
    ) {
      console.log("your inside campaign and status");
      for (let i of valuecampaignarray) {
        for (let j of valuestatusarray) {
          for (let k of array3) {
            if (i === k.state && j === k.CompanyName) {
              filarray.push(k);
            }
          }
        }
      }
      setArray(filarray);
    } else {
      console.log("all filters");
      for (let i of valuecampaignarray) {
        for (let j of valuestatusarray) {
          for (let k of array3) {
            if (k.CreatedOn !== null) {
              if (
                k.CreatedOn.toString().substring(0, 10) ===
                  dtcreatedon_filter.toString() &&
                i === k.state &&
                j === k.CompanyName
              ) {
                filarray.push(k);
              }
            }
          }
        }
      }
      setArray(filarray);
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
            <label>State:</label>
            <br />
            <MultiSelect
              className="multi_select"
              onChange={handleOnchangecampaign}
              options={array_location}
            />
          </div>
          <div className="filter_inner1_status">
            <label>Company:</label>
            <br />
            <MultiSelect
              className="multi_select"
              onChange={handleOnchangestatus}
              options={array_Company}
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
