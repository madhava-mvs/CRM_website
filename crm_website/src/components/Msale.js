import "./Msale.css";
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { RiBookmarkFill } from "react-icons/ri"
import { HiUser } from "react-icons/hi";
//import { click } from "@testing-library/user-event/dist/click";
// import { useState } from "react";
// import Pop from "./Pop.js";

export default function SalesDash({ todo, inprogress, completed, setTodo, setInProgress, setCompleted }) {


    //const [todoArray, setTodoArray] = useState([])
    // const [inprogressArray, setInprogressArray] = useState([])
    // const [completedArray, setCompletedArray] = useState([])

    // console.log(todo)
    // console.log("after" + JSON.stringify(todo))


    //setTodoArray(todo)
    //console.log(todoArray)

    // setInprogressArray(JSON.stringify(inprogress))
    // setCompletedArray(JSON.stringify(completed))
    // console.log(todo, inprogressArray, completedArray)
    // const [edit1, setEdit1] = useState(false)
    // const [edit11, setEdit11] = useState(false)
    // const [edit2, setEdit2] = useState(false)
    // const [edit21, setEdit21] = useState(false)
    // const [edit3, setEdit3] = useState(false)
    //const [edit31, setEdit31] = useState(false)


    // const [show1, setShow1] = useState(false)
    // const [show11, setShow11] = useState(false)
    // const [show2, setShow2] = useState(false)
    // const [show21, setShow21] = useState(false)
    // const [show3, setShow3] = useState(false)
    //const [show31, setShow31] = useState(false)
    // const url = "http://localhost:3000/dev/getTODO";
    // const data = {};
    // const header = {};
    // axios.post(url, data, header)
    //   .then((res) => {
    //     console.log("Response==>" + JSON.stringify(res.data))
    //   })
    //   .catch((err) => {
    //     console.log("Error==>" + err)
    //   })

    // const tododropDown = (todoArray, itm1) => {
    //     let temp = [...todoArray]
    //     for (const iter of temp) {
    //         if (iter.id === itm1.id && iter.txtActivitytype === itm1.txtActivitytype) {
    //             iter.isClicked = !itm1.isClicked
    //         }
    //     }
    //     setTodoArray(temp)
    // }
    // const inprogressdropDown = (inprogressArray, itm2) => {
    //     let temp = [...inprogressArray]
    //     for (const iter of temp) {
    //         if (iter.id === itm2.id && iter.txtActivitytype === itm2.txtActivitytype) {
    //             iter.isClicked = !itm2.isClicked
    //         }
    //     }
    //     setInprogressArray(temp)
    // }
    // const completeddropDown = (completedArray, itm3) => {
    //     let temp = [...completedArray]
    //     for (const iter of temp) {
    //         if (iter.id === itm3.id && iter.txtActivitytype === itm3.txtActivitytype) {
    //             iter.isClicked = !itm3.isClicked
    //         }
    //     }
    //     setCompletedArray(temp)
    // }

    const handleTodo = (e, itm) => {
        let temp = [...todo]
        for (const iterator of temp) {
            if (iterator.id === itm.id) {
                iterator.isclicked = !iterator.isclicked
            }
        }
        setTodo(temp)
    }
    const handleInProgress = (e, itm) => {
        let temp = [...inprogress]
        for (const iterator of temp) {
            if (iterator.id === itm.id && iterator.txtActivitytype === itm.txtActivitytype) {
                iterator.isclicked = !iterator.isclicked
            }
        }
        setInProgress(temp)
    }
    const handleCompleted = (e, itm) => {
        let temp = [...completed]
        for (const iterator of temp) {
            if (iterator.id === itm.id && iterator.txtActivitytype === itm.txtActivitytype) {
                iterator.isclicked = !iterator.isclicked
            }
        }
        setCompleted(temp)
    }

    return <>
        <div className="sales_SalesOuter">
            <div className="sales_SalesInner1">
                <div className="sales_Inner1_row1">
                    <AiOutlineDown className="sales_dropdownicon" />
                    <label>TODO</label>
                </div>
                {
                    todo.map((itm1, indx) => {
                        return (<div className="sales_Inner_row2">
                            <div className="sales_Inner_row2_row1">
                                {/*< AiOutlineDown onClick={(e) => { tododropDown(todoArray, itm1) }} />*/}

                                < AiOutlineDown onClick={(e) => handleTodo(e, itm1)} />
                                <label>{itm1.txtDescription}</label>
                                < BsThreeDots className="sales_threedotsicon" />
                            </div>

                            {itm1.isclicked ? (<>
                                <div className="Event_Task_Lead_top">
                                    <div className="Event_Task_Lead">
                                        <ul>
                                            <li>
                                                <div className="sales_eventicon_outer">
                                                    < RiBookmarkFill className="sales_eventicon" />
                                                </div>
                                                <label>{itm1.txtCampaignName}</label>
                                            </li>
                                            <li>
                                                <div className="sales_taskicon_outer">
                                                    < RiBookmarkFill className="sales_taskicon" />
                                                </div>
                                                <label>{itm1.txtActivitytype}</label>
                                            </li>
                                            <li>
                                                <div className="sales_leadicon_outer">
                                                    < HiUser className="sales_leadicon" />
                                                </div>
                                                <label>{itm1.txtFirstName}</label>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* {edit1 ? (<div className="Sample_divBlock"><Pop /></div>) : (<></>)} */}
                                </div>
                            </>
                            ) : (<></>)}
                        </div>
                        )
                    })
                }
                <div className="sales_Inner_row4">
                    <label>+</label>
                </div>
            </div>
            <div className="sales_SalesInner2">
                <div className="sales_Inner2_row1">
                    <AiOutlineDown className="sales_dropdownicon" />
                    <label>PROGRESS</label>
                </div>
                {
                    inprogress.map((itm2, indx) => {
                        return (
                            <div className="sales_Inner_row2">
                                <div className="sales_Inner_row2_row1">
                                    < AiOutlineDown onClick={(e) => { handleInProgress(e, itm2) }} />
                                    {/* < AiOutlineDown onClick={(e) => { inprogressdropDown(inprogressArray, itm2) }} /> */}
                                    <label>{itm2.txtDescription}</label>
                                    < BsThreeDots className="sales_threedotsicon" />
                                </div>
                                {itm2.isclicked ? (<>
                                    <div className="Event_Task_Lead_top">
                                        <div className="Event_Task_Lead">
                                            <ul>
                                                <li>
                                                    <div className="sales_eventicon_outer">
                                                        < RiBookmarkFill className="sales_eventicon" />
                                                    </div>
                                                    <label>{itm2.txtCampaignName}</label>
                                                </li>
                                                <li>
                                                    <div className="sales_taskicon_outer">
                                                        < RiBookmarkFill className="sales_taskicon" />
                                                    </div>
                                                    <label>{itm2.txtActivitytype}</label>
                                                </li>
                                                <li>
                                                    <div className="sales_leadicon_outer">
                                                        < HiUser className="sales_leadicon" />
                                                    </div>
                                                    <label>{itm2.txtFirstName}</label>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* {edit2 ? (<div className="Sample_divBlock"><Pop /></div>) : (<></>)} */}
                                    </div>
                                </>
                                ) : (<></>)}
                            </div>
                        )
                    })
                }

                <div className="sales_Inner_row4">
                    <label>+</label>
                </div>
            </div>
            <div className="sales_SalesInner3">
                <div className="sales_Inner3_row1">
                    <AiOutlineDown className="sales_dropdownicon" />
                    <label>COMPLETED</label>
                </div>
                {
                    completed.map((itm3, indx) => {
                        return (
                            <div className="sales_Inner_row2">
                                <div className="sales_Inner_row2_row1">
                                    < AiOutlineDown onClick={(e) => { handleCompleted(e, itm3) }} />
                                    {/* < AiOutlineDown onClick={(e) => { completeddropDown(completedArray, itm3) }} /> */}
                                    <label>{itm3.txtDescription}</label>
                                    < BsThreeDots className="sales_threedotsicon" />
                                </div>
                                {itm3.isclicked ? (<>
                                    <div className="Event_Task_Lead_top">
                                        <div className="Event_Task_Lead">
                                            <ul>
                                                <li>
                                                    <div className="sales_eventicon_outer">
                                                        < RiBookmarkFill className="sales_eventicon" />
                                                    </div>
                                                    <label>{itm3.txtCampaignName}</label>
                                                </li>
                                                <li>
                                                    <div className="sales_taskicon_outer">
                                                        < RiBookmarkFill className="sales_taskicon" />
                                                    </div>
                                                    <label>{itm3.txtActivitytype}</label>
                                                </li>
                                                <li>
                                                    <div className="sales_leadicon_outer">
                                                        < HiUser className="sales_leadicon" />
                                                    </div>
                                                    <label>{itm3.txtFirstName}</label>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* {edit3 ? (<div className="Sample_divBlock"><Pop /></div>) : (<></>)} */}
                                    </div>
                                </>
                                ) : (<></>)}
                            </div>
                        )
                    })
                }
                <div className="sales_Inner_row4">
                    <label>+</label>
                </div>
            </div>
        </div>
    </>
}