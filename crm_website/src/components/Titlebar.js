import "./Tittlebar.css";
import { GiBeachBag } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function TitleBar() {
  const navigate = useNavigate();
  function AddLead() {
    navigate("/AddLead");
  }
  return (
    <>
      <div className="titlebar_top">
        <div className="titlebar_top_col1">
          <div className="titlebar_bagSquare">
            <GiBeachBag className="titlebar_bagIcon" />
          </div>
          <label>LeadList</label>
        </div>
        <div className="titlebar_top_col2">
          <div className="titlebar_top_col21">
            <HiDownload className="titlebar_downloadIcon" />
            <label>Bulk Import</label>
          </div>
          <div className="titlebar_top_col22">
            <BsFillPlusCircleFill className="titlebar_plusIcon" />
            <label onClick={AddLead}>Add Lead</label>
          </div>
        </div>
      </div>
    </>
  );
}
