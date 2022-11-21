import React from "react";
import './SummaryCount.css';
import { BiTrendingUp } from "react-icons/bi"
export default function SummaryCount({ pcount, value, show }) {
    return (
        <>
            <div className="summarycount_outer">
                <div className="summarycount_inner">
                    <div className="summarycount_inner_row1">
                        <label className="summarycount_label">Prospect Growth</label>
                    </div>
                    <div className="summarycount_inner_row2">
                        <label className="summarycount_value"># {pcount} </label>
                    </div>
                    {show ? (<div className="summarycount_inner_row3">
                        <BiTrendingUp className="summarycount_inner_row3_icon" />
                        <label> +{value}% </label>
                    </div>) : <></>}
                </div>
            </div>
        </>
    );
}