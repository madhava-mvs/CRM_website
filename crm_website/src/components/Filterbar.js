import "./Filterbar.css"
import { BsFillCheckCircleFill, BsFilter } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai"
import { MdEdit, MdDelete } from "react-icons/md"
import { VscListFlat } from "react-icons/vsc"
import { CgMenuGridR } from "react-icons/cg"
import { FaList } from "react-icons/fa"
export default function Filterbar() {
    return <>
        <div className="filterbar">
            <div className="filterbar_column1">
                <BsFillCheckCircleFill className="filterbar_column1_cirleicon" />
                <label>Select All</label>
            </div>
            <div className="filterbar_column2">
                <div className="filterbar_column2_inner1">
                    < BsFilter className="filterbar_column2_inner1_filtericon" />
                    <label>Filters</label>
                </div>
                <div className="filterbar_column2_inner2">
                    <AiOutlineSearch className="filterbar_column2_inner2_searchicon" />
                    <label>Search</label>
                </div>
                <div className="filterbar_column2_inner3">
                    <MdEdit className="filterbar_column2_inner3_editicon" />
                    <label>Edit</label>
                </div>
                <div className="filterbar_column2_inner4">
                    <MdDelete className="filterbar_column2_inner4_deleteicon" />
                    <label>Delete</label>
                </div>
            </div>
            <div className="filterbar_column3">
                <VscListFlat className="filterbar_column3_menuicon" />
                <CgMenuGridR className="filterbar_column3_cgmenuicon" />
                <FaList className="filterbar_column3_listicon" />
            </div>
        </div>
    </>
}