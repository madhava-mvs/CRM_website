<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import SignUpPage from './pages/SignUppage';
import Otp from './components/Otp';
=======
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddLead from "./pages/AddLead";
import AdminDash from "./pages/AdminDash";
import Campaigneditpage from "./pages/Campaigneditpage";
import CampaignListPage from "./pages/campaignlistpage";
import LeadListPage from "./pages/LeadlistPage";
import LoginPage from "./pages/Login";
import ManagerDash from "./pages/ManagerDash";
import ProspectListpage from "./pages/ProspectListpage";
import Tasklist from "./pages/tasklist1";
import Userprofile from "./pages/Userprofile";
>>>>>>> 4b09c6d6780b2b24ca6437648c55806d95f1402b

export default function Navigation() {
  return (
    <div> 
      <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        
      </Routes>
=======
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/SignUpPage" element={<SignUpPage />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route path="/Leadlist" element={<LeadListPage />}></Route>
          <Route path="/Addlead" element={<AddLead />}></Route>
          <Route
            path="/Campaignlistpage"
            element={<CampaignListPage />}
          ></Route>
          <Route
            path="/Campaigneditpage"
            element={<Campaigneditpage />}
          ></Route>
          <Route path="/Tasklist1" element={<Tasklist />}></Route>
          <Route path='/ProspectListpage' element={<ProspectListpage />}></Route>
          <Route path="/admindash" element={<AdminDash />}></Route>
          <Route path="/managerdash" element={<ManagerDash />}></Route>
          <Route path="/Userprofile" element={<Userprofile />}>
                </Route>
        </Routes>
>>>>>>> 4b09c6d6780b2b24ca6437648c55806d95f1402b
      </BrowserRouter>
    </div>
  );
}
