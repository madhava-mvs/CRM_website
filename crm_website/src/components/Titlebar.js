import "./Titlebar.css";
// import axios from "axios";
import { RiFileList3Fill } from "react-icons/ri";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

// export default function TitleBar({
//   setEfirstname,
//   setElastname,
//   setEcompany,
//   setEemail,
//   setEphone,
//   setEaddress,
//   setEcreatedon,
//   setEcreatedby,
//   setEsuffix,
// })

export default function TitleBar({
  SaveLead,
  titlebar_name,
  button_value,
  bulkimportshow,
  savebuttonshow,
  middledivshow,
  titlebar_value1,
  titlebar_value2,
  titlebar_value3,
  salesbuttonshow,
  sales_button_value
}) {
  // const SaveLead = () => {
  //   const suffix = localStorage.getItem("salutationvar");
  //   const firstname = localStorage.getItem("firstnamevar");
  //   const lastname = localStorage.getItem("lastnamevar");
  //   const company = localStorage.getItem("companyvar");
  //   const phone = localStorage.getItem("phonevar");
  //   const email = localStorage.getItem("emailvar");
  //   const address = localStorage.getItem("statevar");
  //   const createdOn = localStorage.getItem("dateAddedOnvar");
  //   const createdBy = localStorage.getItem("leadOwnervar");

  //   console.log(
  //     suffix,
  //     firstname,
  //     lastname,
  //     company,
  //     phone,
  //     email,
  //     address,
  //     createdBy,
  //     createdOn
  //   );

  //   if (suffix === "") {
  //     setEfirstname("");
  //     setElastname("");
  //     setEcompany("");
  //     setEemail("");
  //     setEphone("");
  //     setEaddress("");
  //     setEcreatedon("");
  //     setEcreatedby("");
  //     alert("suffix is mandatory");
  //     setEsuffix("*suffix is mandatory");
  //     // localStorage.setItem('esuffixvar', errorsuffix)
  //   } else if (firstname === "") {
  //     alert("firstname is mandatory");
  //     setEsuffix("");
  //     setElastname("");
  //     setEcompany("");
  //     setEemail("");
  //     setEphone("");
  //     setEaddress("");
  //     setEcreatedon("");
  //     setEcreatedby("");
  //     setEfirstname("*firstname is mandatory");
  //     // localStorage.setItem('efirstnamevar', errorfirstname)
  //   } else if (lastname === "") {
  //     alert("lastname is mandatory");
  //     setEfirstname("");
  //     setEsuffix("");
  //     setEcompany("");
  //     setEemail("");
  //     setEphone("");
  //     setEaddress("");
  //     setEcreatedon("");
  //     setEcreatedby("");
  //     setElastname("*lastname is mandatory");
  //     // localStorage.setItem('elastnamevar', errorlastname)
  //   } else if (company === "") {
  //     alert("company is mandatory");
  //     setElastname("");
  //     setEsuffix("");
  //     setEfirstname("");
  //     setEemail("");
  //     setEphone("");
  //     setEaddress("");
  //     setEcreatedon("");
  //     setEcreatedby("");
  //     setEcompany("*company is mandatory");
  //     // localStorage.setItem('ecompanyvar', errorcompany)
  //   } else if (email === "") {
  //     alert("email is mandatory");
  //     setEsuffix("");
  //     setEfirstname("");
  //     setElastname("");
  //     setEcompany("");
  //     setEphone("");
  //     setEaddress("");
  //     setEcreatedon("");
  //     setEcreatedby("");
  //     setEemail("*email is mandatory");
  //     // localStorage.setItem('eemailvar', erroremail)
  //   } else if (phone === undefined) {
  //     alert("phone is mandatory");
  //     setEsuffix("");
  //     setEfirstname("");
  //     setElastname("");
  //     setEcompany("");
  //     setEemail("");
  //     setEaddress("");
  //     setEcreatedon("");
  //     setEcreatedby("");
  //     setEphone("*phone is mandatory");
  //     // localStorage.setItem('ephonevar', errorphone)
  //   } else if (address === "") {
  //     alert("state is mandatory");
  //     setEsuffix("");
  //     setEfirstname("");
  //     setElastname("");
  //     setEcompany("");
  //     setEemail("");
  //     setEphone("");
  //     setEcreatedon("");
  //     setEcreatedby("");
  //     setEaddress("*address is mandatory");
  //     // localStorage.setItem('eaddressvar', erroraddress)
  //   } else if (createdOn === "") {
  //     alert("created on is mandatory");
  //     setEsuffix("");
  //     setEfirstname("");
  //     setElastname("");
  //     setEcompany("");
  //     setEemail("");
  //     setEphone("");
  //     setEaddress("");
  //     setEcreatedby("");
  //     setEcreatedon("*created on is mandatory");
  //     // localStorage.setItem('ecreatedonvar', errorcreatedon)
  //   } else if (createdBy === 0) {
  //     alert("created on is mandatory");
  //     setEsuffix("");
  //     setEfirstname("");
  //     setElastname("");
  //     setEcompany("");
  //     setEemail("");
  //     setEphone("");
  //     setEaddress("");
  //     setEcreatedon("");
  //     setEcreatedby("*created on is mandatory");
  //     // localStorage.setItem('ecreatedbyvar', errorcreatedby)
  //   } else {
  //     // const url = "http://localhost:3000/dev/InsertLead";
  //     const url = "https://xegps3cqo7.execute-api.us-east-1.amazonaws.com/dev/InsertLead"
  //     const data = {
  //       suffix: suffix,
  //       firstname: firstname,
  //       lastname: lastname,
  //       company: company,
  //       phone: Number(phone),
  //       email: email,
  //       address: address,
  //       createdOn: createdOn,
  //       createdBy: Number(createdBy),
  //     };
  //     const header = {};
  //     axios
  //       .post(url, data, { headers: header })
  //       .then((res) => {
  //         if (res.data === "email id already exists") {
  //           setEsuffix("");
  //           setEfirstname("");
  //           setElastname("");
  //           setEcompany("");
  //           setEphone("");
  //           setEaddress("");
  //           setEcreatedon("");
  //           setEcreatedby("");
  //           setEemail("*email id already exist");
  //         } else {
  //           setEsuffix("");
  //           setEfirstname("");
  //           setElastname("");
  //           setEcompany("");
  //           setEemail("");
  //           setEphone("");
  //           setEaddress("");
  //           setEcreatedon("");
  //           setEcreatedby("");
  //           console.log("response==> " + JSON.stringify(res.data));
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  return (
    <>
      <div className="titlebar_top">
        <div className="titlebar_top_col1">
          <div className="titlebaddlead_ar_bagSquare">
            <RiFileList3Fill className="titlebar_bagIcon" />
          </div>
          <label>{titlebar_name}</label>
        </div>
        {middledivshow ? (
          <div className="addlead_titlebar_prospectlist">
            <div className="titlebar_bagIcon_Active">{titlebar_value1}</div>
            <div className="titlebar_bagIcon_Draft"> {titlebar_value2}</div>
            <div className="titlebar_bagIcon_Assembly">{titlebar_value3}</div>
          </div>
        ) : (
          <></>
        )}
        {/* <div className="addlead_titlebar_prospectlist">
            <div className="titlebar_bagIcon_Active">Active</div>
            <div className="titlebar_bagIcon_Draft"> Draft</div>
            <div className="titlebar_bagIcon_Assembly">Assembly</div>
          </div> */}
        <div className="titlebar_top_col2">
          {bulkimportshow?<div className="titlebar_top_col21">
            <div className="titlebar_top_col21_inside">
            <HiDownload className="titlebar_downloadIcon" />
            <label>Bulk Import</label>
            </div>
          </div>:<></>}
          {savebuttonshow?<div className="titlebar_top_col22" onClick={SaveLead}>
          <div className="titlebar_top_col22_inside">
            <BsFillPlusCircleFill className="titlebar_plusIcon" />
            <label>{button_value}</label>
            </div>
          </div>:<></>}
          {salesbuttonshow?<div className="titlebar_top_col22" onClick={SaveLead}>
          <div className="titlebar_top_col22_inside">
            <label>{sales_button_value}</label>
            </div>
          </div>:<></>}
        </div>
        {/* <div className="titlebar_top_col2">
          <div className="titlebar_top_col21">
            <HiDownload className="titlebar_downloadIcon" />
            <label>Bulk Import</label>
          </div>
          <div className="titlebar_top_col22" onClick={SaveLead}>
            <BsFillPlusCircleFill className="titlebar_plusIcon" />
            <label>{button_value}</label>
          </div>
        </div> */}
      </div>

      {/* {prospectlistpageshow ? (
        <>
          <div className="prospectlistpage_titlebar_top">
            <div className="prospectlistpage_titlebar_top_col1">
              <div className="prospectlistpage_titlebar_bagSquare">
                <GiBeachBag className="prospectlistpage_titlebar_bagIcon" />
              </div>
              <div className="prospectlistpage_titlebar_bagIcon_Products">
                Prospects
              </div>
              <div className="prospectlistpage_titlebar_bagIcon_Active">
                Active
              </div>
              <div className="prospectlistpage_titlebar_bagIcon_Draft">
                {" "}
                Draft
              </div>
              <div className="prospectlistpage_titlebar_bagIcon_Assembly">
                Assembly
              </div>
            </div>
          </div>
          <div className="prospectlistpage_titlebar_underline">____</div>
        </>
      ) : (
        <></>
      )}

      {leadListshow ? (
        <>
          <div className="Leadlist_titlebar_top">
            <div className="Leadlist_titlebar_top_col1">
              <div className="Leadlist_titlebar_bagSquare">
                <GiBeachBag className="Leadlist_titlebar_bagIcon" />
              </div>
              <label>LeadList</label>
            </div>
            <div className="Leadlist_titlebar_top_col2">
              <div className="Leadlist_titlebar_top_col21">
                <HiDownload className="Leadlist_titlebar_downloadIcon" />
                <label>Bulk Import</label>
              </div>
              <div className="Leadlist_titlebar_top_col22">
                <BsFillPlusCircleFill className="Leadlist_titlebar_plusIcon" />
                <label onClick={AddLead}>Add Lead</label>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )} */}
    </>
  );
}
