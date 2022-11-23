import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { redirect } from "react-router-dom";
import Otp from "./components/Otp";
import Addcampaign from "./pages/AddCampaign";
import AddLead from "./pages/AddLead";
import AdminDash from "./pages/AdminDash";
import Campaigneditpage from "./pages/Campaigneditpage";
import CampaignListPage from "./pages/campaignlistpage";
import LeadListPage from "./pages/LeadlistPage";
import LoginPage from "./pages/Login";
import ManagerDash from "./pages/ManagerDash";
import ProspectListpage from "./pages/ProspectListpage";
import SalesDashboard from "./pages/salesDashboard";
import SignUpPage from "./pages/SignUpPage";
import Tasklist from "./pages/Tasklist";
import Userprofile from "./pages/Userprofile";
import Leadupdate from "./pages/Leadupdate";
import Emailvalidation from "./components/Emailvalidation";
import Resetpassword from "./components/Resetpassword";
import Protected from "./components/Protected";
// import AuthApi from "./AuthApi";
// import { useState,useContext } from "react";


export default function Navigation() {
  // const [auth,setAuth] =useState(false);
  // const ProtectedRoute = ({auth,component:Component,...rest})=>{
  //   return(
  //   <Route
  //     {...rest}
  //     render ={()=>auth?
  //       (
  //       <Component/>
  //   ):(
  //     <redirect to="/"/>
  //   )
  //     }
  //     />
  //     )
  // }
  // const Auth=useContext(AuthApi)
  return (
    <div>
      {/* <AuthApi.Provider values={{auth,setAuth}}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/SignUpPage" element={<SignUpPage />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route path="/Leadlist" element={<LeadListPage />}></Route>
          <Route path="/Leadupdate" element={<Leadupdate />}></Route>
          <Route path="/emailvalidation" element={<Emailvalidation />}></Route>
          <Route path="/resetpassword" element={<Resetpassword />}></Route>
          <Route path="/Addlead" element={<AddLead />}></Route>
          <Route
            path="/Campaignlistpage"
            element={<CampaignListPage />}
          ></Route>
          <Route
            path="/Campaigneditpage"
            element={<Campaigneditpage />}
          ></Route>
          <Route
            path="/AddCampaign"
            element={<Addcampaign />}
          ></Route>
          <Route path="/Tasklist" element={<Tasklist />}></Route>
          <Route path='/ProspectListpage' element={<ProspectListpage />}></Route>
          <Route path="/salesDashboard" element={<Protected Component={SalesDashboard} />}></Route>
          <Route path="/admindash" element={<Protected Component={AdminDash} />}></Route>
          <Route path="/managerdash" element={<Protected Component={ManagerDash} />}></Route>
          <Route path="/Userprofile" element={<Userprofile />}>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </AuthApi.Provider> */}
    </div>
  );
}
