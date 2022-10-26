import "./normallist.css"
export default function Normallist({ arrayData1, setArrayData1 , handleclick}) {

    return (
        <>
            <div className="Normallist">
                <div className="Normallist_row1">
                    <label className="Normallist_row1_label">Leads</label>
                    <div className="Normallist_row1_button">
                        <button onClick={(e) => { handleclick(e) }} ><b>ADD</b></button>
                    </div>
                </div>
                <div className="Normallist_row2"></div>
                <div className="Normallist_row3">
                    <label className="Normallist_row3_label1">FirstName</label>
                    <label className="Normallist_row3_label2">LastName</label>
                    <label className="Normallist_row3_label3">Status</label>
                    <label className="Normallist_row3_label4">Last Updated On</label>
                </div>
                <div className="Normallist_row4"></div>
                <div className="maptable">
                    {arrayData1.map((item1, index) => {
                        return <Table item1={item1} arrayData1={arrayData1} setArrayData1={setArrayData1} />
                    })
                    }
                </div>
            </div>
        </>
    )
}

function Table(item1) {
    const d = new Date(item1.item1.dtUpdatedOn);
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    // console.log("item" + JSON.stringify(item1))
    return <>
        <div className="Normallist_row5">
            <label>{item1.item1.txtFirstName}</label>
            <label>{item1.item1.txtLastName}</label>
            <label>{item1.item1.txtLeadsource}</label>
            <label>{year}-{month}-{day}</label>
        </div>
    </>
}