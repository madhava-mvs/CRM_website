import "./Msale.css";
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiBookmarkFill } from "react-icons/ri"
import { HiUser } from "react-icons/hi";
//import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import Task from "./Task";
import Pop from "./Pop";
import axios from "axios";


export default function SalesDash({ todo, inprogress, completed, setTodo, setInProgress, setCompleted, }) {
    const [status_of_lead, setStatus_of_lead] = useState("");
    const [activity_of_lead, setActivity_of_lead] = useState("");
    // const [show, setShow] = useState("")
    const [show2, setShow2] = useState("")
    const [show3, setShow3] = useState("")
    const [show4, setShow4] = useState("")
    ////////////////////
    const handleTodo = (e, itm) => {
        let temp = [...todo]
        for (const iterator of temp) {
            if (iterator.Taskid === itm.Taskid) {
                iterator.isclicked = !iterator.isclicked
            }
        }
        setTodo(temp)
    }
    const handleInProgress = (e, itm) => {
        console.log(inprogress)
        let temp = [...inprogress]
        for (const iterator of temp) {
            console.log(JSON.stringify(iterator))
            if (iterator === "" || iterator === undefined) {
                console.log("undefined inside console")
            }
            else {
                if (iterator.Taskid === itm.Taskid) {
                    iterator.isclicked = !iterator.isclicked
                }
            }
        }
        setInProgress(temp)
    }
    const handleCompleted = (e, itm) => {
        let temp = [...completed]
        for (const iterator of temp) {
            if (iterator.Taskid === itm.Taskid) {
                iterator.isclicked = !iterator.isclicked
            }
        }
        setCompleted(temp)
    }
    /////////////////

    // const [todoArray, setTodoArray] = useState({
    //     data: todo,
    //     count: todo.length,
    // });
    // const [inprogressArray, setInProgressArray] = useState({
    //     data: inprogress,
    //     count: inprogress.length,
    // });
    // const [completedArray, setCompletedArray] = useState({
    //     data: completed,
    //     count: completed.length
    // });

    console.log("inside todoarray" + JSON.stringify(todo))
    console.log("inside inprogressarray" + JSON.stringify(inprogress))
    console.log("inside completedarray" + JSON.stringify(completed))

    const [dragElement, setDragElement] = useState({});
    //const [show, setShow] = useState(false);
    const allowDrop = (e) => {
        e.preventDefault();
    };
    const handleDrop = (e) => {
        console.log("activity, status")
        if (activity_of_lead === "" || status_of_lead === "") {
            if (activity_of_lead === "") {
                setActivity_of_lead(dragElement.item.activitytypeid)
            }
            else {
                setStatus_of_lead(dragElement.item.conversionid)
            }
        }
        console.log(activity_of_lead, status_of_lead)
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
                delete todo[dragElement.index];
            } else if (startedDiv === "sales_SalesInner2") {
                delete inprogress[dragElement.index];
            } else if (startedDiv === "sales_SalesInner3") {
                delete completed[dragElement.index];
            }
            if (target === "sales_SalesInner1") {
                var temp1 = todo;
                dragElement.item.progresstypeid = 1
                dragElement.item.conversionid = status_of_lead
                let url = "https://fgflfwzdw6.execute-api.us-east-1.amazonaws.com/dev/salesdashconversiontypeupdate"
                let data = {
                    progressid: dragElement.item.progresstypeid,
                    conversionid: status_of_lead,
                    Taskid: dragElement.item.Taskid
                }
                let header = {}
                axios.post(url, data, { headers: header })
                    .then((res) => {
                        console.log(res.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                temp1.push(dragElement.item);
                setTodo(temp1);
            } else if (target === "sales_SalesInner2") {
                var temp2 = inprogress;
                dragElement.item.progresstypeid = 2
                dragElement.item.conversionid = status_of_lead
                let url = "https://fgflfwzdw6.execute-api.us-east-1.amazonaws.com/dev/salesdashconversiontypeupdate"
                let data = {
                    progressid: dragElement.item.progresstypeid,
                    conversionid: status_of_lead,
                    Taskid: dragElement.item.Taskid
                }
                let header = {}
                axios.post(url, data, { headers: header })
                    .then((res) => {
                        console.log(res.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })


                temp2.push(dragElement.item);
                setInProgress(temp2);

            }
            if (target === "sales_SalesInner3") {
                var temp3 = completed;
                dragElement.item.progresstypeid = 3
                dragElement.item.conversionid = status_of_lead
                let url = "https://fgflfwzdw6.execute-api.us-east-1.amazonaws.com/dev/salesdashconversiontypeupdate"
                let data = {
                    progressid: dragElement.item.progresstypeid,
                    conversionid: status_of_lead,
                    Taskid: dragElement.item.Taskid
                }
                let header = {}
                axios.post(url, data, { headers: header })
                    .then((res) => {
                        console.log(res.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                temp3.push(dragElement.item);
                setCompleted(temp3);
            }
        }
    };
    const handleDrag = (e, index, startedDiv, item) => {
        setDragElement({ index: index, startedDiv: startedDiv, item: item });
    };

    const handleDragging = (e, i) => {
        console.log(i)
    }

    // const handleclick = (e) => {
    //     setShow(!show)
    // }
    const handleclick1 = (e) => {
        setShow2(!show2)
    }
    const handleclick2 = (e) => {
        setShow3(!show3)
    }
    const handleclick3 = (e) => {
        setShow4(!show4)
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

                {todo.map((item, index) => {
                    return (<div className="sales_Inner_row2" draggable="true"

                        onDragStart={(e) => handleDrag(e, index, "sales_SalesInner1", item)} >


                        <div className="sales_Inner_row2_row1">
                            < AiOutlineDown onClick={(e) => handleTodo(e, item)} />
                            <label>{item.txtTitle}</label>
                            <div className="Deletepop">
                            < BsThreeDotsVertical className="sales_threedotsicon" onClick={handleclick1} />
                            {
                                show2 ? (
                                    <>
                                        <div className="pop">
                                            <Pop />
                                        </div>
                                    </>
                                ) : (
                                    <></>
                                )
                            }
                            </div>
                        </div>
                        {item.isclicked ? (<>
                            {/* <Task campaignName= {item.txtCampaignName} taskid = {item.Activityid} leadname={item.leadname} txtActivitytype={item.txtActivitytype}conversionid={item.conversionid}Progresstypeid={item.Progresstypeid}owner={item.owner}phone={item.phone}email={item.email}Address={item.Address}CreatedOn={item.CreatedOn}/> */}
                            <Task item={item} status_of_lead={status_of_lead} setStatus_of_lead={setStatus_of_lead} activity_of_lead={activity_of_lead} setActivity_of_lead={setActivity_of_lead}/>
                            {/* <div className="Event_Task_Lead_top">
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
                                
                            </div> */}
                        </>
                        ) : (<></>)}
                    </div>
                    )
                })
                }

                <div className="sales_Inner_row4">
                    {/* <div className="Taskpop">
                       <Task/>
                    </div> */}
                    <label> +</label>
                </div>
            </div>
            <div className="sales_SalesInner2"
                onDragOver={(e) => allowDrop(e)}
                onDrop={(e) => handleDrop(e)}
                onDrag={(e, i) => { handleDragging(e, i) }}>
                <div className="sales_Inner2_row1">
                    <AiOutlineDown className="sales_dropdownicon" />
                    <label>IN PROGRESS</label>
                </div>
                {
                    inprogress.map((item, index) => {
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
                                    < BsThreeDotsVertical className="sales_threedotsicon" onClick={handleclick2} />
                                    {
                                        show3 ? (
                                            <>
                                                <div className="pop">
                                                    <Pop />
                                                </div>
                                            </>
                                        ) : (
                                            <></>
                                        )
                                    }
                                </div>
                                {item.isclicked ? (<>
                                    <Task item={item} status_of_lead={status_of_lead} setStatus_of_lead={setStatus_of_lead} activity_of_lead={activity_of_lead} setActivity_of_lead={setActivity_of_lead} />
                                    {/* <div className="Event_Task_Lead_top">
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
                                    </div> */}
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
                    completed.map((item, index) => {
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
                                    < BsThreeDotsVertical className="sales_threedotsicon" onClick={handleclick3} />
                                    {
                                        show4 ? (
                                            <>
                                                <div className="pop">
                                                    <Pop />
                                                </div>
                                            </>
                                        ) : (
                                            <></>
                                        )
                                    }
                                </div>
                                {item.isclicked ? (<>
                                    <Task item={item} status_of_lead={status_of_lead} setStatus_of_lead={setStatus_of_lead} activity_of_lead={activity_of_lead} setActivity_of_lead={setActivity_of_lead}/>
                                    {/* <div className="Event_Task_Lead_top">
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
                                    </div> */}
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