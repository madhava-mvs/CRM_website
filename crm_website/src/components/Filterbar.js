import "./Filterbar.css";
import { BsFillCheckCircleFill, BsFilter } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";
import { VscListFlat } from "react-icons/vsc";
import { CgMenuGridR } from "react-icons/cg";
import { FaList } from "react-icons/fa";
import { useState } from "react";
export default function Filterbar({
  DeleteFunc,
  editshow,
  handleselectall,
  handleclick1,
  handleclickfilterbar_filter,
  tasklistsearchshow,
  prospectsearchshow,
  search_array,
  setSearch_array,
  onSearch_updatevalue_from_dropdown,
  search_value,
  onChange,
  onSearch,
}) {
  return (
    <>
      <div className="Filterbar_Column">
        <div className="Column1">
          <input
            type={"checkbox"}
            className="filterbar_selectall"
            onChange={handleselectall}
          />
          <label>Select All</label>
        </div>
        <div className="Column2">
          <div className="Column2_inner1" onClick={handleclickfilterbar_filter}>
            <BsFilter className="Column2_inner1_Filter" />
            <label>Filters</label>
          </div>
          <div className="Column2_inner2">
            {tasklistsearchshow ? (
              <>
                <div
                  className="Column2_inner2_Search_div"
                  onClick={() => onSearch(search_value)}
                >
                  <AiOutlineSearch className="Column2_inner2_Search" />
                </div>
                <input
                  type={"text"}
                  placeholder="Search"
                  className="filterbar_search"
                  value={search_value}
                  onChange={onChange}
                />
                <div className="filterbar_dropdown">
                  {search_array
                    .filter((item) => {
                      const searchTerm = search_value.toLowerCase();
                      const fullName = item.label.toLowerCase();

                      return (
                        searchTerm &&
                        fullName.startsWith(searchTerm) &&
                        fullName !== searchTerm
                      );
                    })
                    .slice(0, 10)
                    .map((item) => (
                      <div
                        onClick={() => onSearch_updatevalue_from_dropdown(item.label)}
                        className="filterbar_dropdown_row"
                        key={item.value}
                      >
                        {item.label}
                      </div>
                    ))}
                </div>
              </>
            ) : (
              <>
                <div className="Column2_inner2_Search_div">
                  <AiOutlineSearch className="Column2_inner2_Search" />
                </div>
                <input
                  type={"text"}
                  placeholder="Search"
                  className="filterbar_search"
                />
              </>
            )}
{/* 
if(tasklistsearchshow){
 <>
                <div
                  className="Column2_inner2_Search_div"
                  onClick={() => onSearch(search_value)}
                >
                  <AiOutlineSearch className="Column2_inner2_Search" />
                </div>
                <input
                  type={"text"}
                  placeholder="Search"
                  className="filterbar_search"
                  value={search_value}
                  onChange={onChange}
                />
                <div className="filterbar_dropdown">
                  {search_array
                    .filter((item) => {
                      const searchTerm = search_value.toLowerCase();
                      const fullName = item.label.toLowerCase();

                      return (
                        searchTerm &&
                        fullName.startsWith(searchTerm) &&
                        fullName !== searchTerm
                      );
                    })
                    .slice(0, 10)
                    .map((item) => (
                      <div
                        onClick={() => onSearch_updatevalue_from_dropdown(item.label)}
                        className="filterbar_dropdown_row"
                        key={item.value}
                      >
                        {item.label}
                      </div>
                    ))}
                </div>
              </>
}else if(prospectsearchshow){
 <>
 <div
   className="Column2_inner2_Search_div"
   onClick={() => onSearch(search_value)}
 >
   <AiOutlineSearch className="Column2_inner2_Search" />
 </div>
 <input
   type={"text"}
   placeholder="Search"
   className="filterbar_search"
   value={search_value}
   onChange={onChange}
 />
 <div className="filterbar_dropdown">
   {search_array
     .filter((item) => {
       const searchTerm = search_value.toLowerCase();
       const fullName = item.label.toLowerCase();

       return (
         searchTerm &&
         fullName.startsWith(searchTerm) &&
         fullName !== searchTerm
       );
     })
     .slice(0, 10)
     .map((item) => (
       <div
         onClick={() => onSearch_updatevalue_from_dropdown(item.label)}
         className="filterbar_dropdown_row"
         key={item.value}
       >
         {item.label}
       </div>
     ))}
 </div>
</>
}else{
                <>
                <div className="Column2_inner2_Search_div">
                  <AiOutlineSearch className="Column2_inner2_Search" />
                </div>
                <input
                  type={"text"}
                  placeholder="Search"
                  className="filterbar_search"
                />
              </>
} */}
            {/* <label>Search</label> */}
          </div>
          <div className="Column2_inner3">
            <MdEdit className="Column2_inner3_Edit" />
            {editshow ? (
              <label>Edit</label>
            ) : (
              <label
                onClick={(e) => {
                  handleclick1(e);
                }}
              >
                Campaign
              </label>
            )}
          </div>
          <div className="Column2_inner4" onClick={DeleteFunc}>
            <MdDelete className="Column2_inner4_Delete" />
            <label>Delete</label>
          </div>
        </div>
        <div className="Column3">
          <VscListFlat className="Column3_Menuicon" />
          <CgMenuGridR className="Column3_CgMenuicon" />
          <FaList className="Column3_Listicon" />
        </div>
      </div>
    </>
  );
}
