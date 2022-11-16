import "./checkList.css";
import { BiSearch } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

export default function CheckList({ array2,handleclick2, setArray2, handleclick3 }) {
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
          {console.log("checklist==>" + JSON.stringify(array2))}
          {array2.map((item, index) => {
            return (<>
              <List item={item} setArray2={setArray2} array2={array2} /></>)
          })}
        </div>
      </div>
    </>
  );
}


function List({ item,setArray2,array2 }) {
  const handleClick11 = (e, item) => {
    let temp = [...array2];
    for (const iterator of temp) {
      if (item.id === iterator.id) {
        iterator.isclicked = !iterator.isclicked;
      }
      
    }
    setArray2(temp)
  }

  return (
    <>
      <div className="checkList_inner2">
        <input type={"checkbox"} className="checkBox" onClick={e => handleClick11(e, item)} />
        <label>{item.txtCampaignName}</label>
      </div>
    </>
  );
}

