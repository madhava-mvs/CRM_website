import React from "react";
import "./summary.css";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Summary() {
return (
<>
<div className="summary">
<div className="summary_row1">
<label>Manager wise Prospect Count</label>
<BsThreeDotsVertical className="icon" />{" "}
</div>
<div className="summary_row">
<div className="summary_single">
<label>Manager 1</label>
<label className="summary_value">18</label>
</div>
<div className="summary_single">
<label>Manager 1</label>
<label className="summary_value">12</label>
</div>
<div className="summary_single">
<label>Manager 1</label>
<label className="summary_value">32</label>
</div>
</div> <div className="summary_row">
<div className="summary_single">
<label>Manager 1</label>
<label className="summary_value">32</label>
</div>
<div className="summary_single">
<label>Manager 1</label>
<label className="summary_value">4</label>
</div>
<div className="summary_single">
<label>Manager 1</label>
<label className="summary_value">11</label>
</div>
</div>
</div>
</>
);
}