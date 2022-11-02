import { legacy_createStore } from "redux";
const initialState = {
  username1: "",
  email:"",
  userid: "",
  token: "",
  update_campaign_id: "",
  update_lead_id: "",
};
const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "setUsername1":
      return { ...prevState, username1: action.payload };
      break;
    case "setEmail":
      return { ...prevState, email: action.payload };
      break;
    case "setUserid":
      return { ...prevState, userid: action.payload };
      break;
    case "setToken":
      return { ...prevState, token: action.payload };
      break;
    case "setUpdate_campaign_id":
      return { ...prevState, update_campaign_id: action.payload };
      break;
    case "setUpdate_lead_id":
      return { ...prevState, update_lead_id: action.payload };
      break;
  }
  return prevState;
};
const store = legacy_createStore(reducer);
export default store;
