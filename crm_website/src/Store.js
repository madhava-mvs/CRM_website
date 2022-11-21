import { legacy_createStore } from "redux";
const initialState = {
  username1: "",
  email: "",
  userid: "",
  token: "",
  update_campaign_id: "",
  update_lead_id: "",
  company: "XYZ",
  jobrole: "",
  email: "",
  rememberMe: false,
};
const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "setUsername1":
      return { ...prevState, username1: action.payload };
    case "setEmail":
      return { ...prevState, email: action.payload };
    case "setUserid":
      return { ...prevState, userid: action.payload };
    case "setToken":
      return { ...prevState, token: action.payload };
    case "setUpdate_campaign_id":
      return { ...prevState, update_campaign_id: action.payload };
    case "setUpdate_lead_id":
      return { ...prevState, update_lead_id: action.payload };
    case "setCompany":
      return { ...prevState, company: action.payload };
    case "setJobrole":
      return { ...prevState, jobrole: action.payload };
    case "setemail":
      return { ...prevState, email: action.payload };
    case "setRememberMe":
      return { ...prevState, rememberMe: action.payload };
  }
  return prevState;
};
const store = legacy_createStore(reducer);
export default store;
