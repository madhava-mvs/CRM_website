// import { useState } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "./Campaignedit_Form.css";
// import DatePicker from ReactDatePicker
export default function Form({
    form_head,
    addleadshow,
    div_head1, div_value1, setDiv_value1,
    div_head2, div_value2, setDiv_value2,
    div_head3, div_value3, setDiv_value3,
    div_head4, div_value4, setDiv_value4,
    div_head5, div_value5, setDiv_value5,
    div_head6, div_value6, setDiv_value6,
    div_head7, div_value7, setDiv_value7,
    div_head8, div_value8, setDiv_value8,
    div_head9, div_value9, setDiv_value9,
    div_head10, div_value10, setDiv_value10,
    div_head11, div_value11, setDiv_value11,
    div_head12, div_value12, setDiv_value12,
    div_head13, div_value13, setDiv_value13,
    div_head14, div_value14, setDiv_value14,
    div_head15, div_value15, setDiv_value15,
    div_head16, div_value16, setDiv_value16,
    div_head17, div_value17, setDiv_value17,
    ediv_value1, ediv_value2, ediv_value3, ediv_value4, ediv_value5, ediv_value6, ediv_value7, ediv_value8, ediv_value9, ediv_value10, ediv_value11
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
    const d = new Date(div_value4);
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    // var  k= {day}/{month}/{year};
    // // var j=""+k+"";
    // const [datevar, setDatevar] = useState("")
    // setDatevar(toString({year}+"-"+{month}+"-"+{day}))

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
                        <input
                            value={div_value1}
                            type={"text"}
                            onChange={(e) => {
                                setDiv_value1(e.target.value);
                            }}
                            className="form_rectangle"
                        />
                        <br />
                        <span className="warning_error">{ediv_value1}</span>
                    </div>
                    <div className="form_inner31">
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
                        <span className="warning_error">{ediv_value2}</span>
                    </div>
                    <div className="form_inner312">
                        <label>{div_head3}</label>
                        <br />
                        <select
                            value={div_value3}
                            onChange={(e) =>
                                setDiv_value3(e.target.value)
                            }
                            className="form_rectangle">
                            {/* <option value="">--Select--</option> */}
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Finished">Finished</option>
                        </select>
                        <br />
                        <span className="warning_error">{ediv_value10}</span>
                    </div>
                </div>

                <div className="form_inner3">
                    <div className="form_inner312">
                        <label>{div_head4}</label>
                        <br />
                        {/* {day}-{month}-{year} */}

                        <input
                            // const d = new Date(div_value4);
                            // let day = d.getDate();
                            // let month=d.getMonth();
                            // let year=d.getFullYear();
                            // value={{year}{month}{day}}
                            //    value= {""+{day}-{month}-{year}}
                            //    value={""+{year}-{month}-{day}}

                            value={div_value4}
                            // value='2022-01-02'
                            // value={year}{month}{day}
                            type={"date"}
                            onChange={(e) => {
                                setDiv_value4(e.target.value);
                            }}
                            className="form_rectangle"
                        />
                        <br />
                        <span className="warning_error">{ediv_value3}</span>
                    </div>
                    <div className="form_inner312">
                        <label>{div_head5}</label>
                        <br />
                        <input
                            value={div_value5}
                            type={"date"}
                            onChange={(e) => {
                                setDiv_value5(e.target.value);
                            }}
                            className="form_rectangle"
                        />
                        <br />
                        <span className="warning_error">{ediv_value11}</span>
                    </div>
                    <div className="form_inner31">
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
                        <span className="warning_error">{ediv_value4}</span>
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
                                <span className="warning_error">{ediv_value5}</span>
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
                                <span className="warning_error">{ediv_value6}</span>
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
                                <input
                                    value={div_value11}
                                    type={"text"}
                                    onChange={(e) => {
                                        setDiv_value11(e.target.value);
                                    }}
                                    className="form_rectangle"
                                />
                            </div>
                            <div className="form_inner31">
                                <label>{div_head12}</label>
                                <br />
                                <input
                                    value={div_value12}
                                    type={"text"}
                                    onChange={(e) => {
                                        setDiv_value12(e.target.value);
                                    }}
                                    className="form_rectangle"
                                />
                                <br />
                                <span className="warning_error">{ediv_value7}</span>
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
                                    type={"text"}
                                    onChange={(e) => {
                                        setDiv_value15(e.target.value);
                                    }}
                                    className="form_rectangle"
                                />
                                <br />
                                <span className="warning_error">{ediv_value8}</span>
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
                                <input
                                    value={div_value17}
                                    type={"text"}
                                    onChange={(e) => {
                                        setDiv_value17(e.target.value);
                                    }}
                                    className="form_rectangle"
                                />
                                <br />
                                <span className="warning_error">{ediv_value9}</span>
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