import React, { useState } from "react";
import axios from "axios";
import "./AddCampaign.css";
import Form from "../components/Form";
import Topbar from "../components/Topbar";
import LeftBar from "../components/LeftBar";
import TitleBar from "../components/Titlebar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Addcampaign() {
  const nav = useNavigate()
  const [campaignname, setcampaignname] = useState("");
  // const [r, setcreatedon] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [producttype, setproducttype] = useState("");
  const [array_product, setArray_product] = useState([]);
  const userid = useSelector((state) => state.userid);
 
  const [errorcampaignname, setecampaignname] = useState("");
  // const [errorcreatedon,setecreatedon] = useState("");
  const [errorstartdate,setestartdate] = useState("");
  const [errorenddate,  seteenddate] = useState("");
  const [errorproducttype, seteproducttype] = useState("");
 

  const [addcampaign, setAddcampaign] = useState("");
  const [bulkimportshow, setBulkimportshow] = useState(false);
  const [savebuttonshow, setSavebuttonshow] = useState(true);
  const [middledivshow, setMiddledivshow] = useState(false);
  const button_value = "Add campaign";
  const titlebar_name = "Campaign list";
  const titlebar_value1 = "active";
  const titlebar_value2 = "draft";
  const titlebar_value3 = "all";
  const form_head = "Campaign Details";

  const box5show = false;
  const addcampaignshow = true;
  const div_head1 = "Campaign name*";
  const div_head2 = "Startdate*";
  const div_head3 = "Enddate*";
  const div_head4 = "Producttype*";
  // const div_head5 = "Producttype*";
  
  
    useEffect(() => {
      const url_product =
        "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/productapi1";
      const data_product = {};
      const header_product = {};
      axios
        .post(url_product, data_product, { headers: header_product })
        .then((res) => {
          console.log("getting" + JSON.stringify(res.data));
          setArray_product(res.data);
          console.log("useeffect=====>" + array_product);
        })
        .catch((err) => {
          console.log(err);
        });
      }, []);
       






  
  let savecampaign = () => {
   

    if (campaignname === "") {
      setecampaignname("*campaignname is mandatory");
      // setecreatedon("*createdon is mandatory");
      setestartdate("*startdate is mandatory");
      seteenddate("*enddate is mandatory");
      seteproducttype("*producttype is mandatory");
     

    
    // } else if (createdon === "") {
    //   setecampaignname("");
    //   // setecreatedon("*createdon is mandatory");
    //   setestartdate("*startdate is mandatory");
    //   seteenddate("*enddate is mandatory");
    //   seteproducttype("*producttype is mandatory");
     
     
    } else if (startdate === "") {
      
      setecampaignname("");
      // setecreatedon("");
      setestartdate("*startdate is mandatory");
      seteenddate("*enddate is mandatory");
      seteproducttype("*producttype is mandatory");
 

    } else if (enddate === "") {
      setecampaignname("");
      // setecreatedon("");
      setestartdate("");
      seteenddate("*enddate is mandatory");
      seteproducttype("*producttype is mandatory");
     
      
    } else if (producttype === "") {
      
      setecampaignname("");
      // setecreatedon("");
      setestartdate("");
      seteenddate("");
      seteproducttype("*producttype is mandatory");
     

     
    
    } else {
      // useEffect(() => {
        // useEffect(()=>{

       
      const url = "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/Addcampaign"
      
      const data = {
        campaignname: campaignname,
        // createdon: createdon,
        startdate: startdate,
        enddate: enddate,
        producttype: producttype,
        createdby:userid
       
     
    

      };
      const header = {};
      axios
        .post(url, data, { headers: header })
        .then((res) => {
          if (res.data === "campaign id already exists") {
           
            // setecreatedon("");
            setestartdate("");
            seteenddate("");
            seteproducttype("");
            
           setAddcampaign("");
            setecampaignname("*campaign id already exist");
          } else {
            setAddcampaign("*campaign has been added");
            // setecreatedon("");
            setestartdate("");
            seteenddate("");
            seteproducttype("");
            
            setecampaignname("");
            console.log("response==> " + JSON.stringify(res.data));
            nav("/Campaignlistpage")
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // },[])
      // }, []);
    }
  };

  return (
    <div>
      <Topbar />
      <div className="AddCompaign_content">
        <div  className="AddCompaign_LeftBar">
        <LeftBar />
        </div>
        <div className="AddCompaign_content_right">
          <div className="AddCompaign_content_right_inside">
            <div className="AddCompaign_titlebar_component">
              <TitleBar
                SaveLead={savecampaign}
                button_value={button_value}
                bulkimportshow={bulkimportshow}
                titlebar_name={titlebar_name}
                savebuttonshow={savebuttonshow}
                middledivshow={middledivshow}
                titlebar_value1={titlebar_value1}
                titlebar_value2={titlebar_value2}
                titlebar_value3={titlebar_value3}
              />
            </div>
            <div className="AddCompaign_content_right_inside_form">
              <label className="AddCompaigntext">{addcampaign}</label>
              <Form


                form_head={form_head}
                box5show={box5show}
                addcampaignshow={addcampaignshow}
                div_head1={div_head1}
                div_value1={campaignname}
                setDiv_value1={setcampaignname}
                div_head2={div_head2}
                div_value2={startdate}
                setDiv_value2={setstartdate}
                div_head3={div_head3}
                div_value3={enddate}
                setDiv_value3={setenddate}
                div_head4={div_head4}
                div_value4={producttype}
                setDiv_value4={setproducttype}
                array_product={array_product}
                // div_head5={div_head5}
                // div_value5={producttype}
                // setDiv_value5={setproducttype}
                
                
               
                ediv_value1={errorcampaignname}
                // ediv_value2={errorcreatedon}
                ediv_value10={errorstartdate}
                ediv_value3={errorenddate}
                ediv_value11={errorproducttype}
               
             
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}