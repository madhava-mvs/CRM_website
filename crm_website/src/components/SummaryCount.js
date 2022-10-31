import React from "react";
import './SummaryCount.css';
export default function SummaryCount({ pcount }) {
    return (
        <>
            <div className="summarycount_outer">
                <div className="summarycount_inner_main">
                    <div className="summarycount_inner_row1">
                        <label className="summarycount_label">Prospect Growth</label>
                    </div>
                    <div className="summarycount_inner_row2">
                        <label className="summarycount_value">#{pcount} </label>
                    </div>
                </div>
            </div>
        </>
    );

}