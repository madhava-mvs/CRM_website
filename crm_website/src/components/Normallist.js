import "./normallist.css"
export default function Normallist({ arrayData1, setArrayData1, handleclick1, Normallist_name, date2show, date1show }) {

    return (
        <>
            <div className="Normallist">
                <div className="Normallist_row1">
                    <div className="Normallist_row1_label"><label className="Normallist_row1_label">{Normallist_name}</label></div>
                    <div className="Normallist_row1_button">
                        <label onClick={(e) => { handleclick1(e) }} ><b>ADD</b></label>
                    </div>
                </div>
                <div className="Normallist_row2"></div>
                <div className="Normallist_row3">
                    <label className="Normallist_row3_label1">FirstName</label>
                    <label className="Normallist_row3_label2">LastName</label>
                    <label className="Normallist_row3_label3">Status</label>
                    <label className="Normallist_row3_label4">Last Updated On</label>
                </div>
                {/* <div className="Normallist_row4"></div> */}
                <div className="maptable">
                    {arrayData1.map((item1, index) => {
                        return <Table item1={item1} arrayData1={arrayData1} setArrayData1={setArrayData1} date1show={date1show} date2show={date2show} />
                    })
                    }
                    {/* {arrayData2.map((item2, index) => {
                        return <Table1 item2={item2} arrayData2={arrayData2} setArrayData2={setArrayData2} />
                    })
                    } */}
                </div>
            </div>
        </>
    )
}

function Table({ item1, date1show, date2show }) {
    const d = new Date(item1.dtUpdatedOn);
    const E = new Date(item1.dtCreatedOn);
    console.log("D==>" + d)
    // console.log("E==>"+E)

    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    let day1 = E.getDate();
    let month1 = E.getMonth() + 1;
    let year1 = E.getFullYear();

    // console.log("E====" +{year1}-{month1}-{day1})

    console.log("item" + JSON.stringify(item1))
    // arrayData1.map((item1, index) => {
    return <>
        <div className="Normallist_row5">
            <div className="label_firstname"><label>{item1.txtFirstName}</label></div>

            <div className="label_lastname"><label>{item1.txtLastName}</label></div>
            <div className="label_status"><label>{item1.status}</label></div>
            {/* {showtbl ?(<label>{year1}-{month1}-{day1}</label>) : (<></>)} */}
            {date1show ? (<div className="label_Year"><label>{year}-{month}-{day}</label></div>) : (<></>)}
            {date2show ? (<div className="label_Year"><label>{year1}-{month1}-{day1}</label></div>) : <></>}

        </div>
    </>
    // })
}

// function Table1(item2) {
//     const d = new Date(item2.item2.dtUpdatedOn);
//     console.log("D==>" + d)
//     let day = d.getDate();
//     let month = d.getMonth() + 1;
//     let year = d.getFullYear();
//     console.log("item" + JSON.stringify(item2))
//     return <>
//         <div className="Normallist_row5">
//             <label>{item2.item2.txtFirstName}</label>
//             <label>{item2.item2.txtLastName}</label>
//             <label>{item2.item2.txtConversionType}</label>
//             <label>{year}-{month}-{day}</label>
//         </div>
//     </>
// }