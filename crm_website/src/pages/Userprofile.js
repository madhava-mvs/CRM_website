import Topbar from "./components/Topbar";
import Leftbar from "./components/Leftbar";
import Titlebar from "./components/Titlebar";
//import Profile from "./components/Profile";
import pic from "./components/Images/profilepic.jpg";
import './Userprofile.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import React, { useState } from "react";
import { GiBeachBag } from "react-icons/gi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
export default function Userprofile() {

    const [state, setstate] = useState(false);
    const togglebtn = () => {
        setstate(prevState => !prevState);
    }

    const titlebar_name = <h3>Profile</h3>
    const [savebuttonshow, setsavebuttonshow] = useState(true);
    const button_value = <h3>SAVE</h3>



    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Address, setAddress] = useState("");
    const [Dob, setDob] = useState("");
    const [errorf, seterrorf] = useState("");
    const [errorall, seterrorall] = useState(false);
    const [errore, seterrore] = useState("");
    const [erroru, seterroru] = useState("");
    const [errord, seterrord] = useState("");
    const [errora, seterrora] = useState("");
    const [errorp, seterrorp] = useState("");
    const [errorc, seterrorc] = useState("");
    const [errorpn, seterrorpn] = useState("");
    const [show, setShow] = useState(false)
    const handleclick = (e) => {
        setShow(!show)
    };

    const SAVEclick = (e) => {

        if (FirstName == "" || Email == "" || Dob == "" || Address == "" || Password == "" || ConfirmPassword == "") {
            seterrorall(true)
        }
        else if (FirstName != "" && Email != "" && Password != "" && ConfirmPassword != "" && Dob != "" && Address != "") {
            seterrorf("")
            seterrore("")
            seterroru("")
            seterrord("")
            seterrora("")
            seterrorp("")
            seterrorc("")
            seterrorpn("")
           // const url = "http://localhost:3000/dev/updateprofile";
            const url = "https://04m1xo4qs3.execute-api.us-east-1.amazonaws.com/dev/updateprofile";
            const data = {
                "id": "22", Email: Email, FirstName: FirstName, LastName: LastName, Dob: Dob, Address: Address, Password: Password, ConfirmPassword: ConfirmPassword,
            };
            const header = {};
            axios.post(url, data, header,)
                .then((res) => {
                    console.log("Response==>" + JSON.stringify(res.data))
                    let result = res.data + " "
                    if (result.includes("Firstname is mandatory"))
                        seterrorf("Firstname is mandatory")
                    if (result.includes("Email is mandatory"))
                        seterrore("Email is mandatory")
                    if (result.includes("Dob is mandatory"))
                        seterrord("Dob is mandatory")
                    if (result.includes("Address is mandatory"))
                        seterrora("Address is mandatory")
                    if (result.includes("Password is mandatory"))
                        seterrorp("Password is mandatory")
                    if (result.includes("ConfirmPassword is mandatory"))
                        seterrorc("Confirmpassword is mandatory")

                    if (result.includes("ConfirmPassword not match"))
                        seterrorpn("Password not match")
                    if (result.includes("updated"))
                        seterroru("Profile Updated!")
                    if (result.includes("already exist"))
                        seterrore("Email already exist")
                    //// //localStorage.setItem("tokenvariable", res.data)
                    ///// const token = localStorage.getItem("tokenvariable");
                    /// //navigate("/home");
                })
                .catch((err) => {
                    console.log("Response==> " + JSON.stringify(err))
                })
        }
    }

    useEffect(() => {
        //const url = "http://localhost:3000/dev/getprofile";
        const url ="https://04m1xo4qs3.execute-api.us-east-1.amazonaws.com/dev/getprofile";
        const data = {
            "id": "22",
        };
        const headers = {};
        axios.post(url, data, headers,)
            .then((res) => {
                console.log("Response==>" + JSON.stringify(res.data))


                // localStorage.setItem("tokenvariable", res.data)
                // const token = localStorage.getItem("tokenvariable");
                //navigate("/home");
                if (res.data.length > 0) {
                    setFirstName(res.data[0].txtFirstName)
                    setLastName(res.data[0].txtLastName)
                    setEmail(res.data[0].txtEmail)
                    setAddress(res.data[0].txtaddress)
                    setPassword(res.data[0].txtPassword)
                    // setConfirmPassword(res.data[0].txtPassword)
                    setDob(res.data[0].txtdob)
                }

                //if (res.data.length > 0) {
                //    setRepassword(res.data[0].txtPassword)
                //}
            })
            .catch((err) => {
                console.log("Response==> " + JSON.stringify(err))
            })
    }, [])
    return (

        <>
            <div className="Userprofile">
                <div className="Userprofile_Topbar">
                    <Topbar />
                </div>

                <div className="Userprofile_LeftBar">
                    <Leftbar />
                </div>

                <div className="Userprofile_TitleBar">
                    {/* <Titlebar /> */}
                    <Titlebar titlebar_name={titlebar_name} savebuttonshow={savebuttonshow} button_value={button_value} SaveLead={SAVEclick} />

                </div>
            </div>



            <div className='Profile_outer'>
                <div className='Profile_outer_column1'>
                    <img src={pic} ></img>
                    <div className='Profile_name' >Nancy Powell  </div>
                    <div className='Profile_id' >c10001</div>
                </div>
                <div className="Profile_Info">
                    <div className='Profile_outer_row1'> <label className="erroru">{erroru}</label>
                        <input type="text" placeholder="Personal Information"></input>
                        <FiMoreHorizontal className='Profile_more1' />
                    </div>
                    <div className='Profileouter_row2'>
                        <div className='Profile_fn' >FirstName</div>
                        <div className='Profile_ln'>LastName</div>
                        <div className='Profile_email'>Email</div>
                        <div className='Profile_dob'>Date of Birth</div>
                    </div>
                    <div className='Profileouter_row3'>
                        <div className='Profile_a3' >
                            <input type="text" placeholder="" value={FirstName} onChange={(e) => { setFirstName(e.target.value) }} />
                            <label className="errorf">{errorf}</label>
                            {errorall && FirstName == "" ? <label className="errorf">Firstname is mandatory</label> : ""}</div>

                        <div className='Profile_b3' >
                            <input type="text" placeholder="" value={LastName} onChange={(e) => { setLastName(e.target.value) }} /></div>
                        <div className='Profile_c3' >
                            <input type="text" placeholder="" value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                            {errorall && Email == "" ? <label className="errore">Email is mandatory</label> : ""}<br />
                            <label className="errore">{errore}</label>
                        </div>
                        <div className='Profile_d3'>
                            <input type="text" placeholder="" value={Dob} onChange={(e) => { setDob(e.target.value) }} />
                            {errorall && Dob == "" ? <label className="errord">Dob is mandatory</label> : ""}</div>
                        <MdKeyboardArrowDown className='Profileouter_row3_downarrow' />
                    </div>
                    <div className='Profileouter_row4'>
                        <div className='Profile_a4' >Address</div>
                        <div className='Profile_b4' >Password</div>
                        <div className='Profile_c4' >Confirm Password</div>
                    </div>

                    <div className='Profileouter_row5'>
                        <div className='Profile_a5'>
                            <input type="text" placeholder="" value={Address} onChange={(e) => { setAddress(e.target.value) }} />
                            {errorall && Address == "" ? <label className="errora">Address is mandatory</label> : ""}</div>
                        <div className='Profile_b5'>
                            {/* <input type="Password" placeholder="" value={Password} onChange={(e) => { setPassword(e.target.value) }} /> */}
                            {/* <input type="Password"  value={Password} onChange={(e) => (setPassword(e.target.value))} placeholder="Password" /> */}

                            <input type={state ? "text" : "Password"} value={Password} placeholder="" onClick={togglebtn} />
                            <label className="Profile_b5_btn" onClick={togglebtn}>
                                {
                                    state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                                }


                            </label>


                            {errorall && Password == "" ? <label className="errorp">Password is mandatory</label> : ""}</div>
                        <div className='Profile_c5'>
                            <input type="Password" placeholder="" value={ConfirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                            {errorall && ConfirmPassword == "" ? <label className="errorc">ConfirmPassword is mandatory</label> : ""}
                            <label className="errorpn">{errorpn}</label></div>
                    </div>
                </div>
            </div>



        
        </>
    );
}