import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AddCampaign.css";
import Form from "../components/Form";
// import HeadBar from "./components/headbar";
import Topbar from "../components/Topbar";
import LeftBar from "../components/LeftBar";
import TitleBar from "../components/Titlebar";

export default function Addcampaign() {
  const [campaignname, setcampaignname] = useState("");
  const [createdon, setcreatedon] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [producttype, setproducttype] = useState("");
  const [createdby, setcreatedby] = useState("");
  const [array_product, setArray_product] = useState([]);
  const [array_user, setArray_user] = useState([]);
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState();
  // const [mobile, setMobile] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [pincode, setPincode] = useState("");
  // const [leadSourceName, setLeadSourceName] = useState("");
  // const [dateAddedOn, setDateAddedOn] = useState("");
  // const [activeStatus, setActiveStatus] = useState("");
  // const [leadOwner, setLeadOwner] = useState();
  // const [esuffix, setEsuffix] = useState("");
  const [errorcampaignname, setecampaignname] = useState("");
  const [errorcreatedon,setecreatedon] = useState("");
  const [errorstartdate,setestartdate] = useState("");
  const [errorenddate,  seteenddate] = useState("");
  const [errorproducttype, seteproducttype] = useState("");
  const [errorcreatedby, setecreatedby] = useState("");
  // const [errorcreatedon, setEcreatedon] = useState("");
  // const [errorcreatedby, setEcreatedby] = useState("");
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


  const addcampaignshow = true;
  const div_head1 = "Campaign name*";
  const div_head2 = "Createdon*";
  const div_head3 = "Startdate*";
  const div_head4 = "Enddate*";
  const div_head5 = "Producttype*";
  const div_head6 = "Createdby*";
  // const div_head7 = "Email";
  // const div_head8 = "Phone";
  // const div_head9 = "Mobile";
  // const div_head10 = "Address";
  // const div_head11 = "City";
  // const div_head12 = "State";
  // const div_head13 = "Pin code";
  // const div_head14 = "Lead Source Name";
  // const div_head15 = "Date Added On";
  // const div_head16 = "Active Status";
  // const div_head17 = "Lead Owner";

    //  <Form form_head={form_head} 
    // div_head1={div_head1} div_value1={campaignname} setDiv_value1={setcampaignname}
    // div_head2={div_head2} div_value2={createdon} setDiv_value2={setcreatedon}
    // div_head3={div_head3} div_value3={startdate} setDiv_value3={setstartdate}
    // div_head4={div_head4} div_value4={enddate} setDiv_value={setenddate}
    // div_head5={div_head5} div_value5={producttype} setDiv_value5={setproducttype}
    // div_head6={div_head6} div_value6={createdby} setDiv_value6={setcreatedby}
    // div_head7={div_head7} div_value7={email} setDiv_value7={setEmail}
    // div_head8={div_head8} div_value8={phone} setDiv_value8={setPhone}
    // div_head9={div_head9} div_value9={mobile} setDiv_value9={setMobile}
    // div_head10={div_head10} div_value10={address} setDiv_value10={setAddress}
    // div_head11={div_head11} div_value11={city} setDiv_value11={setCity}
    // div_head12={div_head12} div_value12={state} setDiv_value12={setState}
    // div_head13={div_head13} div_value13={pincode} setDiv_value13={setPincode}
    // div_head14={div_head14} div_value14={leadSourceName} setDiv_value14={setLeadSourceName}
    // div_head15={div_head15} div_value15={dateAddedOn} setDiv_value15={setDateAddedOn}
    // div_head16={div_head16} div_value16={activeStatus} setDiv_value16={setActiveStatus}
    // div_head17={div_head17} div_value17={leadOwner} setDiv_value17={setLeadOwner} 
    // ediv_value1={errorcampaignname} ediv_value2={errorcreatedon} ediv_value3={errorstartdate}
    //  ediv_value4={errorenddate} ediv_value5={errorproducttype} ediv_value6={errorcreatedby} 
    //  ediv_value7={erroraddress} ediv_value8={errorcreatedon} ediv_value9={errorcreatedby}

    // /> 
    useEffect(() => {
      const url_product =
        "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/productapi";
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
        useEffect(() => {
      const url_user =
        "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getuser";
      const data_user = {};
      const header_user = {};
      axios
        .post(url_user, data_user, { headers: header_user })
        .then((res) => {
          console.log(res.data);
          setArray_user(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }, []);
  
  let savecampaign = () => {
    // const suffix = localStorage.getItem("salutationvar");
    // const firstname = localStorage.getItem("firstnamevar");
    // const lastname = localStorage.getItem("lastnamevar");
    // const company = localStorage.getItem("companyvar");
    // const phone = localStorage.getItem("phonevar");
    // const email = localStorage.getItem("emailvar");
    // const address = localStorage.getItem("statevar");
    // const createdOn = localStorage.getItem("dateAddedOnvar");
    // const createdBy = localStorage.getItem("leadOwnervar");

    // console.log(
    //   suffix,
    //   firstname,
    //   lastname,
    //   company,
    //   phone,
    //   email,
    //   address,
    //   createdBy,
    //   createdOn
    // );

    if (campaignname === "") {
      setecampaignname("*campaignname is mandatory");
      setecreatedon("*createdon is mandatory");
      setestartdate("*startdate is mandatory");
      seteenddate("*enddate is mandatory");
      seteproducttype("*producttype is mandatory");
      setecreatedby("*createdbyis mandatory");

      // setcampaignname("");
      // setcreatedon("");e
      // setstartdate("");
      // setenddate("");
      // setproducttype("");
      // setcreatedby("");
      // setEaddress("*address is mandatory");
      // setEcreatedon("*created on is mandatory");
      // setEcreatedby("*leads owner is mandatory");
      // localStorage.setItem('esuffixvar', errorsuffix)
    } else if (createdon === "") {
      setecampaignname("");
      setecreatedon("*createdon is mandatory");
      setestartdate("*startdate is mandatory");
      seteenddate("*enddate is mandatory");
      seteproducttype("*producttype is mandatory");
      setecreatedby("*createdbyis mandatory");
      // localStorage.setItem('efirstnamevar', errorfirstname)
    } else if (startdate === "") {
      
      setecampaignname("");
      setecreatedon("");
      setestartdate("*startdate is mandatory");
      seteenddate("*enddate is mandatory");
      seteproducttype("*producttype is mandatory");
      setecreatedby("*createdbyis mandatory");
      // localStorage.setItem('elastnamevar', errorlastname)
    } else if (enddate === "") {
      setecampaignname("");
      setecreatedon("");
      setestartdate("");
      seteenddate("*enddate is mandatory");
      seteproducttype("*producttype is mandatory");
      setecreatedby("*createdbyis mandatory");
      // localStorage.setItem('ecompanyvar', errorcompany)
    } else if (producttype === "") {
      
      setecampaignname("");
      setecreatedon("");
      setestartdate("");
      seteenddate("");
      seteproducttype("*producttype is mandatory");
      setecreatedby("*createdbyis mandatory");
      // localStorage.setItem('eemailvar', erroremail)
    } else if (createdby === "") {
      
      setecampaignname("");
      setecreatedon("");
      setestartdate("");
      seteenddate("");
      seteproducttype("");
      setecreatedby("*createdbyis mandatory");
      // localStorage.setItem('ephonevar', errorphone)
    // } else if (state === "") {
    //   setEsuffix("");
    //   setEfirstname("");
    //   setElastname("");
    //   setEcompany("");
    //   setEemail("");
    //   setEphone("");
    //   setEaddress("*address is mandatory");
    //   setEcreatedon("*created on is mandatory");
    //   setEcreatedby("*leads owner is mandatory");
    //   // localStorage.setItem('eaddressvar', erroraddress)
    // } else if (dateAddedOn === "") {
    //   setEsuffix("");
    //   setEfirstname("");
    //   setElastname("");
    //   setEcompany("");
    //   setEemail("");
    //   setEphone("");
    //   setEaddress("");
    //   setEcreatedon("*created on is mandatory");
    //   setEcreatedby("*leads owner is mandatory");
    //   // localStorage.setItem('ecreatedonvar', errorcreatedon)
    // } else if (leadOwner === 0) {
    //   setEsuffix("");
    //   setEfirstname("");
    //   setElastname("");
    //   setEcompany("");
    //   setEemail("");
    //   setEphone("");
    //   setEaddress("");
    //   setEcreatedon("");
    //   setEcreatedby("*leads owner is mandatory");
      // localStorage.setItem('ecreatedbyvar', errorcreatedby)
    } else {
      // const url = "http://localhost:3000/dev/InsertLead";
      const url = "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/addcampaign"
      const data = {
        campaignname: campaignname,
        createdon: createdon,
        startdate: startdate,
        enddate: enddate,
        producttype: producttype,
        createdby:createdby,
     
    

      };
      const header = {};
      axios
        .post(url, data, { headers: header })
        .then((res) => {
          if (res.data === "campaign id already exists") {
           
            setecreatedon("");
            setestartdate("");
            seteenddate("");
            seteproducttype("");
            setecreatedby("");
           setAddcampaign("");
            setecampaignname("*campaign id already exist");
          } else {
            setAddcampaign("*campaign has been added");
            setecreatedon("");
            setestartdate("");
            seteenddate("");
            seteproducttype("");
            setecreatedby("");
            setecampaignname("");
            console.log("response==> " + JSON.stringify(res.data));
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
            {/* <TitleBar setEsuffix = {setEsuffix} setEfirstname = {setEfirstname}  setElastname={setElastname} setEcompany={setEcompany} setEphone={setEphone} setEemail={setEemail} setEaddress={setEaddress} setEcreatedon={setEcreatedon} setEcreatedby={setEcreatedby} /> */}
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
              {/* <Form esuffix={esuffix} efirstname={errorfirstname} elastname={errorlastname} ecompany={errorcompany} ephone={errorphone} eemail={erroremail} eaddress={erroraddress} ecreatedon={errorcreatedon} ecreatedby={errorcreatedby} addlead={addlead} /> */}
              <Form


                form_head={form_head}
                addcampaignshow={addcampaignshow}
                div_head1={div_head1}
                div_value1={campaignname}
                setDiv_value1={setcampaignname}
                div_head2={div_head2}
                div_value2={createdon}
                setDiv_value2={setcreatedon}
                div_head3={div_head3}
                div_value3={startdate}
                setDiv_value3={setstartdate}
                div_head4={div_head4}
                div_value4={enddate}
                setDiv_value4={setenddate}
                div_head5={div_head5}
                div_value5={producttype}
                setDiv_value5={setproducttype}
                array_product={array_product}
                div_head6={div_head6}
                div_value6={createdby}
                setDiv_value6={setcreatedby}
                array_user={array_user}
                // div_head7={div_head7}
                // div_value7={email}
                // setDiv_value7={setEmail}
                // div_head8={div_head8}
                // div_value8={phone}
                // setDiv_value8={setPhone}
                // div_head9={div_head9}
                // div_value9={mobile}
                // setDiv_value9={setMobile}
                // div_head10={div_head10}
                // div_value10={address}
                // setDiv_value10={setAddress}
                // div_head11={div_head11}
                // div_value11={city}
                // setDiv_value11={setCity}
                // div_head12={div_head12}
                // div_value12={state}
                // setDiv_value12={setState}
                // div_head13={div_head13}
                // div_value13={pincode}
                // setDiv_value13={setPincode}
                // div_head14={div_head14}
                // div_value14={leadSourceName}
                // setDiv_value14={setLeadSourceName}
                // div_head15={div_head15}
                // div_value15={dateAddedOn}
                // setDiv_value15={setDateAddedOn}
                // div_head16={div_head16}
                // div_value16={activeStatus}
                // setDiv_value16={setActiveStatus}
                // div_head17={div_head17}
                // div_value17={leadOwner}
                // setDiv_value17={setLeadOwner}
               
                ediv_value1={errorcampaignname}
                ediv_value2={errorcreatedon}
                ediv_value10={errorstartdate}
                ediv_value3={errorenddate}
                ediv_value11={errorproducttype}
                ediv_value4={errorcreatedby}
                // ediv_value7={erroraddress}
                // ediv_value8={errorcreatedon}
                // ediv_value9={errorcreatedby}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}