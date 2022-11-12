import React from "react";
import "./summary.css";
import { BsThreeDotsVertical } from "react-icons/bs";

// export default function Summary({ title, user1, user2, user3, user4, name1, name2, name3, name4 }) {

// return (
//     <>
//         <div className="summary">
//             <div className="summary_row1">
//                 <label>{title}</label>
//                 <BsThreeDotsVertical className="icon" />
//             </div>
//             <div className="summary_row">
//                 <div className="summary_single">
//                     <label className="summary_value">{user1}</label>
//                     <label className="summary_single_title"> {name1}</label>
//                 </div>
//                 <div className="summary_single">
//                     <label className="summary_value">{user2}</label>
//                     <label className="summary_single_title">{name2}</label>
//                 </div>
//                 <div className="summary_single">
//                     <label className="summary_value">{user3}</label>
//                     <label className="summary_single_title">{name3}</label>
//                 </div>
//             </div>
//             <div className="summary_row">
//                 <div className="summary_single">
//                     <label className="summary_value">{user4}</label>
//                     <label className="summary_single_title">{name4}</label>
//                 </div>
//                 {/* <div className="summary_single">
//                     <label>{user5}</label>
//                     <label className="summary_value">SalesPerson Five</label>
//                 </div> */}
//                 {/* <div className="summary_single">
//                     <label>2</label>
//                     <label className="summary_value">SalesPerson Five</label>
//                 </div> */}
//             </div>
//         </div>
//     </>
// );

export default function Summary({ summary_show, array1, title }) {
    return (
        <>
            <div className="summary">
                <div className="summary_row1">
                    <label>{title}</label>
                    <BsThreeDotsVertical className="icon" />{" "}
                </div>
                {array1.map((item, index) => {
                    return <>
                        {
                            summary_show ? (<div className="summary_row">
                                <div className="summary_single">
                                    <label className="summary_value">{item.count}</label>
                                    <label className="summary_single_title"> {item.txtFirstName}</label>
                                </div>
                            </div>) :
                                (<div className="summary_row">
                                    <div className="summary_single">
                                        <label className="summary_value">{item.count}</label>
                                        <label className="summary_single_title"> {item.txtFirstName}</label>
                                    </div>
                                </div>)
                        }
                    </>
                })
                }
            </div>
        </>
    );


}