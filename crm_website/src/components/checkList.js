import "./checkList.css";
import { BiSearch } from "react-icons/bi";

export default function CheckList({ arraylist }) {
  return (
    <>
      <div className="checkList_outer">
        <div className="checkList_inner1">
          <div className="checkList_inner11">
            <BiSearch className="checkList_searchIcon" />
            <input type={"text"} placeholder="Search Campaign" />
          </div>
          <div className="checkList_inner12">
            <label>ADD</label>
          </div>
        </div>
        <div className="checkList_outer_inner2">
          {console.log("checklist==>" + JSON.stringify(arraylist))}
          {arraylist.map((item, index) => {
            return (<>
            <List item={item} /></>)
          })}
        </div>
      </div>
    </>
  );
}


function List({ item }) {
  return (
    <>
      <div className="checkList_inner2">
        <input type={"checkbox"} className="checkBox" />
        <label>{item.txtFirstName}</label>
      </div>
    </>
  );
}