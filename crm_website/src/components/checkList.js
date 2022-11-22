import "./checkList.css";
import { BiSearch } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

export default function CheckList({ arraylist, handleclick2, setArrayData, handleclick3,checkshow,checkshow1 }) {
  return (
    <>
      <div className="checkList_outer">
        <div className="checkList_inner1">
          <div className="checkList_inner11">
            <BiSearch className="checkList_searchIcon" />
            <input type={"text"} placeholder="Search Lead" />
          </div>
          <div className="checkList_inner12">
            <label onClick={(e) => { handleclick2(e) }}>ADD</label>
          </div>
          <div className="close">
            <AiFillCloseCircle onClick={(e) => { handleclick3(e) }} />
          </div>
        </div>
        <div className="checkList_outer_inner2">
          {console.log("checklist==>" + JSON.stringify(arraylist))}
          {arraylist.map((item, index) => {
            return (<>
              <List item={item} arrayData={arraylist} setArrayData={setArrayData} checkshow={checkshow} checkshow1={checkshow1} /></>)
          })}
        </div>
      </div>
    </>
  );
}


function List({ item, arrayData, setArrayData, checkshow1, checkshow ,arrayData8,setArrayData8}) {
  const handleClick11 = (e, item) => {
    let temp = [...arrayData];
    for (const iterator of temp) {
      if (item.id === iterator.id) {
        iterator.isclicked = !iterator.isclicked;
      }
    }
    setArrayData(temp)
  }

  const handleClick15 = (e, item) => {
    let temp = [...arrayData8];
    for (const iterator of temp) {
      if (item.id === iterator.id) {
        iterator.isclicked = !iterator.isclicked;
      }
    }
    setArrayData8(temp)
  }

  return (
    <>
      <div className="checkList_inner2">
        {checkshow ? (<input type={"checkbox"} className="checkBox" onClick={e => handleClick11(e, item)} />) : (<></>)}
        {checkshow1 ? (<input type={"checkbox"} className="checkBox" onClick={e => handleClick15(e, item)} />) : (<></>)}
        <label>{item.txtFirstName}</label>
      </div>
    </>
  );
}

