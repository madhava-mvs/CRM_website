import "./checkList.css";
import { BiSearch } from "react-icons/bi";

export default function CheckList({ arraylist, handleclick2, setArrayData }) {
  return (
    <>
      <div className="checkList_outer">
        <div className="checkList_inner1">
          <div className="checkList_inner11">
            <BiSearch className="checkList_searchIcon" />
            <input type={"text"} placeholder="Search Campaign" />
          </div>
          <div className="checkList_inner12">
            <label onClick={(e) => { handleclick2(e) }}>ADD</label>
          </div>
        </div>
        <div className="checkList_outer_inner2">
          {console.log("checklist==>" + JSON.stringify(arraylist))}
          {arraylist.map((item, index) => {
            return (<>
              <List item={item} arrayData={arraylist} setArrayData={setArrayData} /></>)
          })}
        </div>
      </div>
    </>
  );
}


function List({ item , arrayData, setArrayData}) {
  const handleClick11 = (e, item) => {
    let temp = [...arrayData];
    for (const iterator of temp) {
        if (item.id === iterator.id) {
            iterator.isclicked = !iterator.isclicked;
        }
    }
    setArrayData(temp)
}
  
  return (
    <>
      <div className="checkList_inner2">
        <input type={"checkbox"} className="checkBox" onClick={e=>handleClick11(e, item)} />
        <label>{item.txtFirstName}</label>
      </div>
    </>
  );
}

