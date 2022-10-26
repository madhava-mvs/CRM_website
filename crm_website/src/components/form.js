import { useState } from "react";
import "./form.css";
export default function Form({esuffix, efirstname, elastname, ecompany, eemail, ephone, eaddress, ecreatedon, ecreatedby}) {
  const [salutation, setSalutation] = useState("")
  const [firstname, setFirstname] = useState("")
  const [middlename, setMiddlename] = useState("")
  const [lastname, setLastname] = useState("")
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState()
  const [mobile, setMobile] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [pincode, setPincode] = useState("")
  const [leadSourceName, setLeadSourceName] = useState("")
  const [dateAddedOn, setDateAddedOn] = useState("")
  const [activeStatus, setActiveStatus] = useState("")
  const [leadOwner, setLeadOwner] = useState()
  //getting error values from local storage.



  //storing data given by user
  localStorage.setItem('salutationvar', salutation)
  localStorage.setItem('firstnamevar', firstname)
  localStorage.setItem('lastnamevar', lastname)
  localStorage.setItem('companyvar', company)
  localStorage.setItem('phonevar', phone)
  localStorage.setItem('emailvar', email)
  localStorage.setItem('statevar', state)
  localStorage.setItem('dateAddedOnvar', dateAddedOn)
  localStorage.setItem('leadOwnervar', leadOwner)
  




  return (
    <>
      <div className="form_outer">
        <div className="form_inner1">
          <label>Lead Details</label>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Salutation</label><br/>
            <input value={salutation} type={"text"} onChange={(e)=>{setSalutation(e.target.value)}} className="form_rectangle"/><br/>
            <span className="warning_error">{esuffix}</span>
          </div>
          <div className="form_inner31">
            <label>First Name</label><br/>
            <input value={firstname} type={"text"} onChange={(e)=>{setFirstname(e.target.value)}} className="form_rectangle"/><br/>
            <span className="warning_error">{efirstname}</span>
          </div>
          <div className="form_inner31">
            <label>Middle Name</label><br/>
            <input value={middlename} type={"text"} onChange={(e)=>{setMiddlename(e.target.value)}} className="form_rectangle"/>
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Last Name</label><br/>
            <input value={lastname} type={"text"} onChange={(e)=>{setLastname(e.target.value)}} className="form_rectangle"/><br/>
            <span className="warning_error">{elastname}</span>
          </div>
          <div className="form_inner31">
            <label>Tittle</label><br/>
            <input value={title} type={"text"} onChange={(e)=>{setTitle(e.target.value)}} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Company</label><br/>
            <input value={company} type={"text"} onChange={(e)=>{setCompany(e.target.value)}} className="form_rectangle"/><br/>
            <span className="warning_error">{ecompany}</span>
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Email</label><br/>
            <input value={email} type={"text"} onChange={(e)=>{setEmail(e.target.value)}} className="form_rectangle"/><br/>
            <span className="warning_error">{eemail}</span>
          </div>
          <div className="form_inner31">
            <label>Phone</label><br/>
            <input value={phone} type={"text"} onChange={(e)=>{setPhone(e.target.value)}} className="form_rectangle"/><br/>
            <span className="warning_error">{ephone}</span>
          </div>
          <div className="form_inner31">
            <label>Mobile</label><br/>
            <input value={mobile} type={"text"} onChange={(e)=>{setMobile(e.target.value)}} className="form_rectangle"/>
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Address</label><br/>
            <input value={address} type={"text"} onChange={(e)=>{setAddress(e.target.value)}} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>City</label><br/>
            <input value={city} type={"text"} onChange={(e)=>{setCity(e.target.value)}} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>State</label><br/>
            <input value={state} type={"text"} onChange={(e)=>{setState(e.target.value)}} className="form_rectangle"/><br/>
            <span className="warning_error">{eaddress}</span>
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Pin Code</label><br/>
            <input value={pincode} type={"text"} onChange={(e)=>{setPincode(e.target.value)}} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Lead Source Name</label><br/>
            <input value={leadSourceName} type={"text"} onChange={(e)=>{setLeadSourceName(e.target.value)}} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Date Added On</label><br/>
            <input value={dateAddedOn} type={"text"} onChange={(e)=>{setDateAddedOn(e.target.value)}} className="form_rectangle"/><br/>
            <span className="warning_error">{ecreatedon}</span>
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Active Status</label><br/>
            <input value={activeStatus} type={"text"} onChange={(e)=>{setActiveStatus(e.target.value)}} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Lead owner</label><br/>
            <input value={leadOwner} type={"text"} onChange={(e)=>{setLeadOwner(e.target.value)}} className="form_rectangle"/><br/>
            <span className="warning_error">{ecreatedby}</span>
          </div>
          <div className="form_inner31">
            <label></label>
            <div className="form_rectangle1"></div>
          </div>
        </div>
      </div>
    </>
  );
}