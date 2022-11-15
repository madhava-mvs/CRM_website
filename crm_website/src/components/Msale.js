import "./Msale.css";
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { RiBookmarkFill } from "react-icons/ri"
import { HiUser } from "react-icons/hi";
//import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
// import Pop from "./Pop.js";

export default function SalesDash({ todo, inprogress, completed, setTodo, setInProgress, setCompleted }) {

    
    const handleTodo = (e, itm) => {
        let temp = [...todo]
        for (const iterator of temp) {
            if (iterator.id === itm.id && iterator.txtActivitytype === itm.txtActivitytype) {
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

    const [todoArray, setTodoArray] = useState({
        data: todo,
        count: todo.length,
    });
    const [inprogressArray, setInProgressArray] = useState({
        data: inprogress,
        count: inprogress.length,
    });
    const [completedArray, setCompletedArray] = useState({
        data: completed,
        count: completed.length
    });


    
    const [dragElement, setDragElement] = useState({});
    const allowDrop = (e) => {
        e.preventDefault();
    };
    const handleDrop = (e) => {
        console.log(e);
        e.preventDefault();
        var target = e.target.className;
        var startedDiv = dragElement.startedDiv;
        if (
            target !== startedDiv &&
            (e.target.className === "sales_SalesInner1" ||
                e.target.className === "sales_SalesInner2" ||
                e.target.className === "sales_SalesInner3")
        ) {
            if (startedDiv === "sales_SalesInner1") {
                delete todoArray.data[dragElement.index];
            } else if (startedDiv === "sales_SalesInner2") {
                delete inprogressArray.data[dragElement.index];
            } else if (startedDiv === "sales_SalesInner3") {
                delete completedArray.data[dragElement.index];
            }
            if (target === "sales_SalesInner1") {
                var temp1 = todoArray.data;
                temp1.push(dragElement.item);
                setTodoArray({ data: temp1, count: temp1.length });
            } else if (target === "sales_SalesInner2") {
                var temp2 = inprogressArray.data;
                temp2.push(dragElement.item);
                setInProgressArray({ data: temp2, count: temp2.length });
            }
            if (target === "sales_SalesInner3") {
                var temp3 = completedArray.data;
                temp3.push(dragElement.item);
                setCompletedArray({ data: temp3, count: temp3.length });
            }
        }
    };
    const handleDrag = (e, index, startedDiv, item) => {
        setDragElement({ index: index, startedDiv: startedDiv, item: item });
    };

    const handleDragging = (e, i) => {
        console.log(i)
    }

    return <>
        <div className="sales_SalesOuter">
            <div className="sales_SalesInner1"
                onDragOver={(e) => allowDrop(e)}
                onDrop={(e) => handleDrop(e)}>
                <div className="sales_Inner1_row1">
                    <AiOutlineDown className="sales_dropdownicon" />
                    <label>TODO</label>
                </div>
                {
                    todoArray.data.map((item, index) => {
                        return (<div className="sales_Inner_row2" draggable="true"
                            // onDrag={(e)=>{handleDragging(e)}}
                            onDragStart={(e) => handleDrag(e, index, "sales_SalesInner1", item)} >

                            {/* {todoArray.data.map((item, index) => {
                                return (
                                    <p
                                        draggable="true"
                                        // onDrag={(e)=>{handleDragging(e)}}
                                        onDragStart={(e) => handleDrag(e, index, "sales_Inner_row2", item)}
                                    >
                                        {item}
                                    </p>
                                );
                            })} */}
                            <div className="sales_Inner_row2_row1">
                                {/* {/< AiOutlineDown onClick={(e) => { tododropDown(todoArray, itm1) }} />/} */}
                                < AiOutlineDown onClick={(e) => handleTodo(e, item)} />
                                <label>{item.txtTitle}</label>
                                < BsThreeDots className="sales_threedotsicon" />
                            </div>
                            {item.isclicked ? (<>
                                <div className="Event_Task_Lead_top">
                                    <div className="Event_Task_Lead">
                                        <ul>
                                            <li>
                                                <div className="sales_eventicon_outer">
                                                    < RiBookmarkFill className="sales_eventicon" />
                                                </div>
                                                <label>{item.txtCampaignName}</label>
                                            </li>
                                            <li>
                                                <div className="sales_taskicon_outer">
                                                    < RiBookmarkFill className="sales_taskicon" />
                                                </div>
                                                <label>{item.txtActivitytype}</label>
                                            </li>
                                            <li>
                                                <div className="sales_leadicon_outer">
                                                    < HiUser className="sales_leadicon" />
                                                </div>
                                                <label>{item.txtFirstName}</label>
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
            <div className="sales_SalesInner2"
                onDragOver={(e) => allowDrop(e)}
                onDrop={(e) => handleDrop(e)}
                onDrag={(e, i) => { handleDragging(e, i) }}>
                <div className="sales_Inner2_row1">
                    <AiOutlineDown className="sales_dropdownicon" />
                    <label>PROGRESS</label>
                </div>
                {
                    inprogressArray.data.map((item, index) => {
                        return (
                            <div className="sales_Inner_row2"
                                draggable="true"
                                onDragStart={(e) => handleDrag(e, index, "sales_SalesInner2", item)}
                                id={item}>

                                {/* {inprogressArray.data.map((item, index) => {
                                    return (
                                        <p
                                            draggable="true"
                                            // onDrag={(e)=>{handleDragging(e)}}
                                            onDragStart={(e) => handleDrag(e, index, "sales_Inner_row2", item)}
                                        >
                                            {item}
                                        </p>
                                    );
                                })} */}
                                <div className="sales_Inner_row2_row1">
                                    < AiOutlineDown onClick={(e) => { handleInProgress(e, item) }} />
                                    {/* < AiOutlineDown onClick={(e) => { inprogressdropDown(inprogressArray, itm2) }} /> */}
                                    <label>{item.txtTitle}</label>
                                    < BsThreeDots className="sales_threedotsicon" />
                                </div>
                                {item.isclicked ? (<>
                                    <div className="Event_Task_Lead_top">
                                        <div className="Event_Task_Lead">
                                            <ul>
                                                <li>
                                                    <div className="sales_eventicon_outer">
                                                        < RiBookmarkFill className="sales_eventicon" />
                                                    </div>
                                                    <label>{item.txtCampaignName}</label>
                                                </li>
                                                <li>
                                                    <div className="sales_taskicon_outer">
                                                        < RiBookmarkFill className="sales_taskicon" />
                                                    </div>
                                                    <label>{item.txtActivitytype}</label>
                                                </li>
                                                <li>
                                                    <div className="sales_leadicon_outer">
                                                        < HiUser className="sales_leadicon" />
                                                    </div>
                                                    <label>{item.txtFirstName}</label>
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
            <div className="sales_SalesInner3"
                onDragOver={(e) => allowDrop(e)}
                onDrop={(e) => handleDrop(e)}>
                <div className="sales_Inner3_row1">
                    <AiOutlineDown className="sales_dropdownicon" />
                    <label>COMPLETED</label>
                </div>
                {
                    completedArray.data.map((item, index) => {
                        return (
                            <div className="sales_Inner_row2"
                                draggable="true"
                                onDrag={(e) => { handleDragging(e) }}
                                onDragStart={(e) => handleDrag(e, index, "sales_SalesInner3", item)}>
                                {/* {completedArray.data.map((item, index) => {
                                    return (
                                        <p
                                            draggable="true"
                                            // onDrag={(e)=>{handleDragging(e)}}
                                            onDragStart={(e) => handleDrag(e, index, "sales_Inner_row2", item)}
                                        >
                                            {item}
                                        </p>
                                    );
                                })} */}
                                <div className="sales_Inner_row2_row1">
                                    < AiOutlineDown onClick={(e) => { handleCompleted(e, item) }} />
                                    {/* < AiOutlineDown onClick={(e) => { completeddropDown(completedArray, itm3) }} /> */}
                                    <label>{item.txtTitle}</label>
                                    < BsThreeDots className="sales_threedotsicon" />
                                </div>
                                {item.isclicked ? (<>
                                    <div className="Event_Task_Lead_top">
                                        <div className="Event_Task_Lead">
                                            <ul>
                                                <li>
                                                    <div className="sales_eventicon_outer">
                                                        < RiBookmarkFill className="sales_eventicon" />
                                                    </div>
                                                    <label>{item.txtCampaignName}</label>
                                                </li>
                                                <li>
                                                    <div className="sales_taskicon_outer">
                                                        < RiBookmarkFill className="sales_taskicon" />
                                                    </div>

                                                    
                                                    <label>{item.txtActivitytype}</label>
                                                </li>
                                                <li>
                                                    <div className="sales_leadicon_outer">
                                                        < HiUser className="sales_leadicon" />
                                                    </div>
                                                    <label>{item.txtFirstName}</label>
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