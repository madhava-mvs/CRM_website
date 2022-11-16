import "./checkList.css";
import { BiSearch } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

export default function CheckList({ array2,handleclick2, setArray2, handleclick3 }) {
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
          <div className="close">
            <AiFillCloseCircle onClick={(e) => { handleclick3(e) }} />
          </div>
        </div>
        <div className="checkList_outer_inner2">
          {console.log("checklist==>" + JSON.stringify(array2))}
          {array2.map((itm, indx) => {
              return <List itm={itm} array2={array2} setArray2={setArray2}/>;
            })}
        </div>
      </div>
    </>
  );
}


function List({ itm,setArray2,array2 }) {
  const dispatch = useDispatch()
  dispatch({ type: "userid", payload: itm.id });
  const handleClick11=(e, itm)=>{
    let temp = [...array2];
    for (const iterator of temp) {
      if (itm.id === iterator.id) {
        iterator.isclicked = !iterator.isclicked;
      }
      
    }
    setArray2(temp)
  }
  return (
    <>
      <div className="checkList_inner2">
        <input type={"checkbox"} className="checkBox" onClick={e => handleClick11(e, itm)} />
        <label>{itm.txtCampaignName}</label>
      </div>
    </>
  );
}

