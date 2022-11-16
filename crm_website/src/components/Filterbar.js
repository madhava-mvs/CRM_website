import "./Filterbar.css";
import { BsFillCheckCircleFill, BsFilter } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai"
import { MdEdit, MdDelete } from "react-icons/md"
import { VscListFlat } from "react-icons/vsc"
import { CgMenuGridR } from "react-icons/cg"
import { FaList } from "react-icons/fa"
export default function Filterbar({ DeleteFunc, editshow, handleselectall }) {
    return <>
        <div className="Filterbar_Column">
            <div className="Column1">
                <input type={"checkbox"} className="filterbar_selectall" onChange={handleselectall} />
                <label>Select All</label>
            </div>
            <div className="Column2">
                <div className="Column2_inner1">
                    < BsFilter className="Column2_inner1_Filter" />
                    <label>Filters</label>
                </div>
                <div className="Column2_inner2">
                    <AiOutlineSearch className="Column2_inner2_Search" />
                    <label>Search</label>
                </div>
                <div className="Column2_inner3">
                    <MdEdit className="Column2_inner3_Edit" />
                    {editshow ? (<label>Edit</label>) : (<label>Campaign</label>)}
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
}