import { legacy_createStore } from "redux";
const initialState = {
  username: "",
  token: "",
  update_campaign_id: "",
};
const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "setUsername":
      return { ...prevState, username: action.payload };
      break;
    case "setToken":
      return { ...prevState, token: action.payload };
      break;
    case "setUpdate_campaign_id":
      return { ...prevState, update_campaign_id: action.payload };
      break;
  }
  return prevState;
};
const store = legacy_createStore(reducer);
export default store;
