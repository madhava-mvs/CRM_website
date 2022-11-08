// import { useState } from "react";
import "./Form.css";
export default function Form({
  form_head,
  addleadshow,
  div_head1,
  div_value1,
  setDiv_value1,
  div_head2,
  div_value2,
  setDiv_value2,
  div_head3,
  div_value3,
  setDiv_value3,
  div_head4,
  div_value4,
  setDiv_value4,
  div_head5,
  div_value5,
  setDiv_value5,
  array_product,
  div_head6,
  div_value6,
  setDiv_value6,
  array_user,
  div_head7,
  div_value7,
  setDiv_value7,
  div_head8,
  div_value8,
  setDiv_value8,
  div_head9,
  div_value9,
  setDiv_value9,
  div_head10,
  div_value10,
  setDiv_value10,
  div_head11,
  div_value11,
  setDiv_value11,
  div_head12,
  div_value12,
  setDiv_value12,
  div_head13,
  div_value13,
  setDiv_value13,
  div_head14,
  div_value14,
  setDiv_value14,
  div_head15,
  div_value15,
  setDiv_value15,
  div_head16,
  div_value16,
  setDiv_value16,
  div_head17,
  div_value17,
  setDiv_value17,
  array_lead,
  ediv_value1,
  ediv_value2,
  ediv_value3,
  ediv_value4,
  ediv_value5,
  ediv_value6,
  ediv_value7,
  ediv_value8,
  ediv_value9,
  ediv_value10,
  ediv_value11,
}) {
  // salutation, setSalutation, firstname, setFirstname, middlename, setMiddlename, lastname, setLastname, title, setTitle, company, setCompany, email, setEmail, phone, setPhone,
  // mobile, setMobile, address, setAddress, city, setCity, state, setState, pincode, setPincode, leadSourceName, setLeadSourceName, dateAddedOn, setDateAddedOn, activeStatus, setActiveStatus, leadOwner, setLeadOwner

  // const [salutation, setSalutation] = useState("");
  // const [firstname, setFirstname] = useState("");
  // const [middlename, setMiddlename] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [title, setTitle] = useState("");
  // const [company, setCompany] = useState("");
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
  //getting error values from local storage.

  //storing data given by user
  // localStorage.setItem("salutationvar", salutation);
  // localStorage.setItem("firstnamevar", firstname);
  // localStorage.setItem("lastnamevar", lastname);
  // localStorage.setItem("companyvar", company);
  // localStorage.setItem("phonevar", phone);
  // localStorage.setItem("emailvar", email);
  // localStorage.setItem("statevar", state);
  // localStorage.setItem("dateAddedOnvar", dateAddedOn);
  // localStorage.setItem("leadOwnervar", leadOwner);

  return (
    <>
      <div className="form_outer">
        <div className="form_inner1">
          <label>{form_head}</label>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>{div_head1}</label>
            <br />

            {div_head1 == "Salutation*" ? (
              <>
                <select
                  value={div_value1}
                  onChange={(e) => setDiv_value1(e.target.value)}
                  className="form_rectangle_select1"
                >
                  <option value="">--Select--</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                </select>
                <br />
                {div_value1 == "" ? (
                  <span className="warning_error">{ediv_value1}</span>
                ) : (
                  <></>
                )}
              </>
              
            ) : (
              <>
                <input
                  value={div_value1}
                  type={"text"}
                  onChange={(e) => {
                    setDiv_value1(e.target.value);
                  }}
                  className="form_rectangle"
                />
                <br />
                {div_value1 == "" ? (
                  <span className="warning_error">{ediv_value1}</span>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>




          {/* <div className="form_inner31">
            <label>{div_head2}</label>
            <br />
            <input
              value={div_value2}
              type={"text"}
              onChange={(e) => {
                setDiv_value2(e.target.value);
              }}
              className="form_rectangle"
            />
            <br />
            {div_value2 == "" ? (
              <span className="warning_error">{ediv_value2}</span>
            ) : (
              <></>
            )}
          </div> */}


<div className="form_inner31">
            <label>{div_head2}</label>
            <br />
            {
              div_head2 == "Createdon*"?(<>

            <input
              value={div_value2}
              type={"date"}
              onChange={(e) => {
                setDiv_value2(e.target.value);
              }}
              className="form_rectangle"
            />
            <br />
            {div_value2 == "" ? (
              <span className="warning_error">{ediv_value2}</span>
            ) : (
              <></>
            )}
            </>):(<>


            <input
              value={div_value2}
              type={"text"}
              onChange={(e) => {
                setDiv_value2(e.target.value);
              }}
              className="form_rectangle"
            />
            <br />
            </>
  )}

            {div_value2 == "" ? (
              <span className="warning_error">{ediv_value2}</span>
            ) : (
              <></>
            )}
          </div>






{/* 
          <div className="form_inner31">
            <label>{div_head3}</label>
            <br />
            <input
              value={div_value3}
              type={"text"}
              onChange={(e) => {
                setDiv_value3(e.target.value);
              }}
              className="form_rectangle"
            />
            <br />
            {div_value3 == "" ? (
              <span className="warning_error">{ediv_value10}</span>
            ) : (
              <></>
            )}
          </div>
        </div> */}



<div className="form_inner31">
            <label>{div_head3}</label>
            <br />
            {
              div_head3 == "Startdate*"?(<>

<input
              value={div_value3}
              type={"date"}
              onChange={(e) => {
                setDiv_value3(e.target.value);
              }}
              className="form_rectangle"
            />
            <br />
            {div_value3 == "" ? (
              <span className="warning_error">{ediv_value10}</span>
            ) : (
              <></>
            )}
            </>):(<>
            <input
              value={div_value3}
              type={"text"}
              onChange={(e) => {
                setDiv_value3(e.target.value);
              }}
              className="form_rectangle"
            />
            <br />
            </>
  )}

            {div_value3 == "" ? (
              <span className="warning_error">{ediv_value10}</span>
            ) : (
              <></>
            )}
          </div>
        </div>






{/* 


        <div className="form_inner3">
          <div className="form_inner31">
            <label>{div_head4}</label>
            <br />
            <input
              value={div_value4}
              type={"text"}
              onChange={(e) => {
                setDiv_value4(e.target.value);
              }}
              className="form_rectangle"
            />
            <br />
            {div_value4 == "" ? (
              <span className="warning_error">{ediv_value3}</span>
            ) : (
              <></>
            )}
          </div> */}






          


        <div className="form_inner3">
          <div className="form_inner31">
            <label>{div_head4}</label>
            <br />

            {
              div_head4 == "Enddate*"?(<>

<input
              value={div_value4}
              type={"date"}
              onChange={(e) => {
                setDiv_value4(e.target.value);
              }}
              className="form_rectangle"
            />
            <br />
            {div_value4 == "" ? (
              <span className="warning_error">{ediv_value3}</span>
            ) : (
              <></>
            )}
            </>):(<>
            <input
              value={div_value4}
              type={"text"}
              onChange={(e) => {
                setDiv_value4(e.target.value);
              }}
              className="form_rectangle"
            />
            <br />
            </>
  )}

            {div_value4 == "" ? (
              <span className="warning_error">{ediv_value3}</span>
            ) : (
              <></>
            )}


          </div>














          {/* <div className="form_inner31">
            <label>{div_head5}</label>
            <br />
            <input
              value={div_value5}
              type={"text"}
              onChange={(e) => {
                setDiv_value5(e.target.value);
              }}
              className="form_rectangle"
            />
            <br />
            {div_value5 == "" ? (
              <span className="warning_error">{ediv_value11}</span>
            ) : (
              <></>
            )}
          </div> */}


<div className="form_inner31">
            <label>{div_head5}</label>
            <br />
            {
              div_head5 == "Producttype*"?(<>
              <select
              value={div_value5}
              onChange={(e) => setDiv_value5(e.target.value)}
              className="form_rectangle_select"
            >
              <option value="">--Select--</option>
              {console.log("inside form==>"+array_product)}
              {array_product.map((itm, index) => {
                return (
                  <>
                    <option value={itm.id}>{itm.txtProducttype}</option>
                  </>
                );
              })}
            </select>
            <br />
            {div_value5 == "" ? (
              <span className="warning_error">{ediv_value11}</span>
            ) : (
              <></>
            )}
            </>):(<>
            <input
              value={div_value5}
              type={"text"}
              onChange={(e) => {
                setDiv_value5(e.target.value);
              }}
              className="form_rectangle"
            />
            <br /></>
            )}
            

            
            {div_value5 == "" ? (
              <span className="warning_error">{ediv_value11}</span>
            ) : (
              <></>
            )}
          </div>





          {/* <div className="form_inner31">
            <label>{div_head6}</label>
            <br />
            <input
              value={div_value6}
              type={"text"}
              onChange={(e) => {
                setDiv_value6(e.target.value);
              }}
              className="form_rectangle"
            />
            <br />
            {div_value6 == "" ? (
              <span className="warning_error">{ediv_value4}</span>
            ) : (
              <></>
            )}
          </div> */}

<div className="form_inner31">
            <label>{div_head6}</label>
          
            <br />
            {
              div_head6 == "Createdby*"?(<>
            <select
              value={div_value6}
              onChange={(e) => setDiv_value6(e.target.value)}
              className="form_rectangle_select"
            >
              <option value="">--Select--</option>
              {console.log("inside form==>"+array_user)}
              {array_user.map((itm, index) => {
                return (
                  <>
                    <option key="{itm.id}" value={itm.id}>{itm.txtFirstName}</option>
                  </>
                );
              })}
  </select>
  <br />
  {div_value6 == "" ? (
              <span className="warning_error">{ediv_value4}</span>
            ) : (
              <></>
            )}
  </>):(<>
            <input
              value={div_value6}
              type={"text"}
              onChange={(e) => {
                setDiv_value6(e.target.value);
              }}
              className="form_rectangle"
            />
            <br /></>
            )}
            

          
            {div_value6 == "" ? (
              <span className="warning_error">{ediv_value4}</span>
            ) : (
              <></>
            )}
          </div>


        </div>


        {addleadshow ? (
          <>
            <div className="form_inner3">
              <div className="form_inner31">
                <label>{div_head7}</label>
                <br />
                <input
                  value={div_value7}
                  type={"text"}
                  onChange={(e) => {
                    setDiv_value7(e.target.value);
                  }}
                  className="form_rectangle"
                />
                <br />
                {div_value7 == "" ? (
                  <span className="warning_error">{ediv_value5}</span>
                ) : (
                  <></>
                )}
                {ediv_value5 == "*email id already exist" ? (
                  <span className="warning_error">{ediv_value5}</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="form_inner31">
                <label>{div_head8}</label>
                <br />
                <input
                  value={div_value8}
                  type={"text"}
                  onChange={(e) => {
                    setDiv_value8(e.target.value);
                  }}
                  className="form_rectangle"
                />
                <br />
                {div_value8 == "" ? (
                  <span className="warning_error">{ediv_value6}</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="form_inner31">
                <label>{div_head9}</label>
                <br />
                <input
                  value={div_value9}
                  type={"text"}
                  onChange={(e) => {
                    setDiv_value9(e.target.value);
                  }}
                  className="form_rectangle"
                />
              </div>
            </div>
            <div className="form_inner3">
              <div className="form_inner31">
                <label>{div_head10}</label>
                <br />
                <input
                  value={div_value10}
                  type={"text"}
                  onChange={(e) => {
                    setDiv_value10(e.target.value);
                  }}
                  className="form_rectangle"
                />
              </div>
              <div className="form_inner31">
                <label>{div_head11}</label>
                <br />

                <select
                  value={div_value11}
                  onChange={(e) => setDiv_value11(e.target.value)}
                  className="form_rectangle_select"
                >
                  <option value="">--Select--</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Maharastra">Maharastra</option>
                </select>

                {/* <input
                                    value={div_value11}
                                    type={"text"}
                                    onChange={(e) => {
                                        setDiv_value11(e.target.value);
                                    }}
                                    className="form_rectangle"
                                /> */}
                <br />
                {div_value11 == "" ? (
                  <span className="warning_error">{ediv_value7}</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="form_inner31">
                <label>{div_head12}</label>
                <br />

                {div_value11 == "" ? (
                  <>
                  <select className="form_rectangle_select">
                    <option>--Select--</option>
                  </select>
                  </>
                ) : (
                  <></>
                )}

                {div_value11 == "Andhra Pradesh" ? (
                  <>
                    <select
                      value={div_value12}
                      onChange={(e) => setDiv_value12(e.target.value)}
                      className="form_rectangle_select"
                    >
                      <option value="">--Select--</option>
                      <option value="Vijayawada">Vijayawada</option>
                      <option value="Vizag">Vizag</option>
                      <option value="Karnool">Karnool</option>
                      <option value="Kadapa">Kadapa</option>
                      <option value="godavari">godavari</option>
                    </select>
                  </>
                ) : (
                  <></>
                )}

                {div_value11 == "Telangana" ? (
                  <>
                    <select
                      value={div_value12}
                      onChange={(e) => setDiv_value12(e.target.value)}
                      className="form_rectangle_select"
                    >
                      <option value="">--Select--</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Warangal">Warangal</option>
                      <option value="Kodada">Kodada</option>
                      <option value="Karimnagar">Karimnagar</option>
                      <option value="Kammam">Kammam</option>
                    </select>
                  </>
                ) : (
                  <></>
                )}

                {div_value11 == "Karnataka" ? (
                  <>
                    <select
                      value={div_value12}
                      onChange={(e) => setDiv_value12(e.target.value)}
                      className="form_rectangle_select"
                    >
                      <option value="">--Select--</option>
                      <option value="Bengalore">Bengalore</option>
                      <option value="Shivamogga">Shivamogga</option>
                      <option value="Chikkamagalore">Chikkamagalore</option>
                      <option value="Hubballi">Hubballi</option>
                      <option value="Vijayapura">Vijayapura</option>
                    </select>
                  </>
                ) : (
                  <></>
                )}

                {div_value11 == "Kerala" ? (
                  <>
                    <select
                      value={div_value12}
                      onChange={(e) => setDiv_value12(e.target.value)}
                      className="form_rectangle_select"
                    >
                      <option value="">--Select--</option>
                      <option value="Kochi">Kochi</option>
                      <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                      <option value="Kozhikode">Kozhikode</option>
                      <option value="Thrissur">Thrissur</option>
                      <option value="Kannur">Kannur</option>
                    </select>
                  </>
                ) : (
                  <></>
                )}

                {div_value11 == "Maharastra" ? (
                  <>
                    <select
                      value={div_value12}
                      onChange={(e) => setDiv_value12(e.target.value)}
                      className="form_rectangle_select"
                    >
                      <option value="">--Select--</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Nashik">Nashik</option>
                      <option value="Aurangabad">Aurangabad</option>
                      <option value="Pune">Pune</option>
                      <option value="Nagpur">Nagpur</option>
                    </select>
                  </>
                ) : (
                  <></>
                )}
                <br />

                {/* <input
                  value={div_value12}
                  type={"text"}
                  onChange={(e) => {
                    setDiv_value12(e.target.value);
                  }}
                  className="form_rectangle"
                /> */}
                
              </div>
            </div>
            <div className="form_inner3">
              <div className="form_inner31">
                <label>{div_head13}</label>
                <br />
                <input
                  value={div_value13}
                  type={"text"}
                  onChange={(e) => {
                    setDiv_value13(e.target.value);
                  }}
                  className="form_rectangle"
                />
              </div>
              <div className="form_inner31">
                <label>{div_head14}</label>
                <br />
                <input
                  value={div_value14}
                  type={"text"}
                  onChange={(e) => {
                    setDiv_value14(e.target.value);
                  }}
                  className="form_rectangle"
                />
              </div>
              <div className="form_inner31">
                <label>{div_head15}</label>
                <br />
                <input
                  value={div_value15}
                  type={"date"}
                  onChange={(e) => {
                    setDiv_value15(e.target.value);
                  }}
                  className="form_rectangle_date"
                />
                <br />
                {div_value15 == "" ? (
                  <span className="warning_error">{ediv_value8}</span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="form_inner3">
              <div className="form_inner31">
                <label>{div_head16}</label>
                <br />
                <input
                  value={div_value16}
                  type={"text"}
                  onChange={(e) => {
                    setDiv_value16(e.target.value);
                  }}
                  className="form_rectangle"
                />
              </div>
              <div className="form_inner31">
                <label>{div_head17}</label>
                <br />

                <select
                        value={div_value17}
                        onChange={(e) => setDiv_value17(e.target.value)} 
                        className="form_rectangle_select"
                      >
                        <option value="">--Select--</option>
                        {array_lead.map((itm, index) => {
                          return (
                            <>
                              <option key="{itm.id}" value={itm.id}>{itm.txtFirstName}</option>
                            </>
                          );
                        })}
                      </select>

                {/* <input
                  value={div_value17}
                  type={"text"}
                  onChange={(e) => {
                    setDiv_value17(e.target.value);
                  }}
                  className="form_rectangle"
                /> */}
                <br />
                {div_value17 == "" ? (
                  <span className="warning_error">{ediv_value9}</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="form_inner31">
                <label></label>
                <div className="form_rectangle1"></div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
