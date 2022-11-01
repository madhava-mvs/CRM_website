import "./Signup.css";
import logo from "./images/signup_logo.png";
import { MdWavingHand } from "react-icons/md";
import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Signup({
  setshow,
  SignUp,
  error,
  error1,
  error2,
  error3,
  error4,
  error5,
  error6,
  Checkbox,
  setCheckbox,
  setEmail,
  setFirstname,
  setLastname,
  setPassword,
  setRepassword,
  firstname,
  lastname,
  email,
  password,
  repassword,
}) {
  return (
    <>
      <div className="signup_outer">
        <div className="signup_inner">
          <div className="signup_inner_row1">
            <img src={logo}></img>
            <label>Logo</label>
          </div>
          <div className="signup_inner_row2">
            <label>Welcome!</label>
            <MdWavingHand className="signup_inner_row2_handicon" />
          </div>
          <div className="signup_inner_row3">
            <label>Please signup your account</label>
          </div>
          <div className="signup_inner_row4">
            <div className="signup_inner_row4_left">
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
              {error && firstname == "" ? (
                <label className="signup_error">Firstname is mandatory</label>
              ) : (
                ""
              )}
              <label className="signup_err">{error1}</label>
            </div>

            <div className="signup_inner_row4_right">
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="signup_inner_row5">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <label className="signup_err">{error2}</label>
          {error && email == "" ? (
            <label className="signup_error"> email is mandatory</label>
          ) : (
            ""
          )}

          <div className="signup_inner_row5_dropdown_role">
            <label>Job role :</label>
            <select id="jobrole">
              <option value="" className="signup_inner_row5_dropdown_role_option">--------------------</option>
              <option value="1">Admin</option>
              <option value="2">Owner</option>
              <option value="3">User</option>
            </select>
          </div>

          <label className="signup_err">{error6}</label>
          <div className="signup_inner_row6">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <label className="err">{error3}</label>
          {error && password == "" ? (
            <label className="signup_error"> password is mandatory</label>
          ) : (
            ""
          )}
          <div className="signup_inner_row7">
            <input
              type="password"
              placeholder="Re-Password"
              onChange={(e) => {
                setRepassword(e.target.value);
              }}
            />
          </div>
          <label className="signup_err">{error4}</label>

          <label className="signup_err">{error5}</label>
          {error && repassword == "" ? (
            <label className="signup_error"> Repassword is mandatory</label>
          ) : (
            ""
          )}
          <div className="signup_inner_row8">
            <div className="signup_inner_row8_checkboxicon">
              <input
                type="checkbox"
                onChange={(e) => {
                  setCheckbox();
                }}
              />
            </div>
            <div className="signup_inner_row8_text">
              <label>
                By clicking on Register, you are agreeing to our
                <br /> <span>Terms and Conditions</span> of Use.
              </label>
            </div>
            {error && Checkbox == false ? (
              <label className="signup_Error"> Accept TnC</label>
            ) : (
              ""
            )}
          </div>

          <div className="signup_inner_row9">
            <button
              onClick={(e) => {
                SignUp(e); /*setshow(true) */
              }}
            >
              {" "}
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
