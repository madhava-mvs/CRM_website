import React from "react";
import "./ProspectListpage.css";
import Topbar from "../components/Topbar";
import LeftBar from "../components/LeftBar";
import Titlebar from "../components/Titlebar";
import Filterbar from "../components/Filterbar";
import Prospectpagelistmainlist from "../components/Prospectpagelistmainlist";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

// import Tasklist_filterbar from "../components/tasklist_filterpopup";
import Prospect_filterbar from "../components/Prospectlistfilterpopup";





export default function ProspectListpage() {
  const titlebar_name = "Prospects";
  const titlebar_value1 = "Active";
  const titlebar_value2 = "Draft";
  const titlebar_value3 = "Assembly";
  const middledivshow = true;
  const [array, setArray] = useState([]);
  const [array_mainlist_duplicate, setArray_mainlist_dplicate] = useState([]);
  const [filterpopup_show, setFilterpopup_show] = useState(false);

  const editshow = (true);

  const [selectall_isclicked, setSelectall_isclicked] = useState(true);


  const [array_prospect_search, setArray_prospect_search] = useState([]);
  const aftersearch_array = [];

  const Deleteprospect = () => {
    console.log("delete array==>" + JSON.stringify(array))

    let leadid
    for (const k of array) {
      if (k.isclicked === true) {
        leadid = Number(k.id)
      }
    }

   
    const url = "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/deleteprospect"
    const data = { id: leadid };
    const header = {};
    axios.post(url, data, { headers: header })
      .then((res) => {
        console.log("Response ==> " + JSON.stringify(res.data))
        window.location.reload();

      })
      .catch((err) => {
        console.log("Error ==> " + err)
      })
  }




  const url_search_prospect =
  "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/searchprospect";
const data_search_prospect = {};
const header_search_prospect = {};
axios
  .post(url_search_prospect, data_search_prospect, {
    headers: header_search_prospect,
  })
  .then((res) => {
    console.log(res.data);
    setArray_prospect_search(res.data);
  })
  .catch((err) => {
    console.log(err);
  });




  const tasklistsearchshow = true;



  useEffect(() => {
   
    const url =
      "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/getprospect9966";
    const data = {};
    const Headers = {};
    axios
      .post(url, data, { headers: Headers })
      .then((res) => {
      
        console.log("Response==>" + JSON.stringify(res.data));
        setArray(res.data);
        setArray_mainlist_dplicate(res.data);
      })
      .catch((err) => {
        console.log("Error==>" + err);
      });
  }, []);

  // const handleselectall = (e, itm) => {
  //   let temp = [...array];
  //   for (const iterator of temp) {
  //       iterator.isclicked = !iterator.isclicked;
      
  //   }
  //   setArray(temp);
  // };







  const handleselectall = (e, itm) => {
    setSelectall_isclicked(!selectall_isclicked);
    let temp = [...array];
    if (selectall_isclicked === true) {
      for (const iterator of temp) {
        iterator.isclicked = true;
      }
    }
    else{
      for (const iterator of temp) {
        iterator.isclicked = false;
      }
    }
    setArray(temp);
  };


  const handleclickfilterbar_filter = () => {
    setFilterpopup_show(!filterpopup_show);
  };




  const [search_value, setSearch_value] = useState("");

  const onChange = (event) => {
    setSearch_value(event.target.value);
  };

  const onSearch_updatevalue_from_dropdown = (searchTerm) => {
    setSearch_value(searchTerm);
  };

  const onSearch = (searchTerm) => {
    console.log("array prospect search");
    console.log(array_prospect_search);
    setSearch_value(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);

    if (searchTerm === "") {
      setArray(array_mainlist_duplicate);
    }  else {
      for (let i of array_mainlist_duplicate) {
        if (i.firstname === searchTerm) {
          aftersearch_array.push(i);
        }
      }
      setArray(aftersearch_array);
    }
  };









  return (
    <>
      <div className="ProspectListpage">
      {filterpopup_show ? (
          // <Tasklist_filterbar
          <Prospect_filterbar
            handleclickfilterbar_filter={handleclickfilterbar_filter}
            array_mainlist_duplicate={array_mainlist_duplicate}
            array_mainlist={array}
        
            setArray_mainlist={setArray}
          />
        ) : (
          <></>
        )}
        <div className="ProspectListpage_topbar">
          <Topbar />
         
        </div>
       

        <div className="ProspectListpage_LeftBar">
          <LeftBar />
        </div>
        <div className="ProspectListpage_container">
 
          <div className="ProspectListpage_Titlebar">
         
            <Titlebar
            middledivshow={middledivshow}
              titlebar_name={titlebar_name}
              titlebar_value1={titlebar_value1}
              titlebar_value2={titlebar_value2}
              titlebar_value3={titlebar_value3}
            />
          </div>
          <div className="ProspectListpage_underline">
          
        </div>
          <div className="ProspectListpage_Filterbar">
            <Filterbar 
            DeleteFunc={Deleteprospect} 
            editshow={editshow}
             handleselectall={handleselectall}
             handleclickfilterbar_filter={handleclickfilterbar_filter}

             tasklistsearchshow={tasklistsearchshow}
             search_array={array_prospect_search}
             setSearch_array={setArray_prospect_search}
             search_value={search_value}
             onChange={onChange}
             onSearch={onSearch}
             onSearch_updatevalue_from_dropdown={
               onSearch_updatevalue_from_dropdown
             }

             />
          </div>
          <div className="ProspectListpage_Mainlist">
            <Prospectpagelistmainlist array={array} setArray={setArray} />
          </div>
        </div>
      </div>
    </>
  );
}











// import React from "react";

// import "./ProspectListpage.css";
// import Topbar from "../components/Topbar";
// import LeftBar from "../components/LeftBar";
// import Titlebar from "../components/Titlebar";
// import Filterbar from "../components/Filterbar";
// import Prospectpagelistmainlist from "../components/Prospectpagelistmainlist";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// // import Form from "./components/Form";

// export default function ProspectListpage() {
//   const titlebar_name = "Prospects";
//   const titlebar_value1 = "Active";
//   const titlebar_value2 = "Draft";
//   const titlebar_value3 = "Assembly";
//   const middledivshow = true;
//   const [array, setArray] = useState([]);
//   // const [title, setTitle]=useState("Prospects")
//   // const [show, setShow]=useState(true)
//   useEffect(() => {
//     // const url = "http://localhost:3000/dev/Getlead";
//     const url =
//       "https://2rqq5exibb.execute-api.us-east-1.amazonaws.com/dev/Getlead";
//     const data = {};
//     const Headers = {};
//     axios
//       .post(url, data, { headers: Headers })
//       .then((res) => {
//         // setArray1(Json.stringify(res.data));
//         console.log("Response==>" + JSON.stringify(res.data));
//         setArray(res.data);
//       })
//       .catch((err) => {
//         console.log("Error==>" + err);
//       });
//   }, []);
//   return (
//     <>
//       <div className="ProspectListpage">
//         <div className="ProspectListpage_Admindashboard">
//           <Topbar />
//         </div>

//         <div className="ProspectListpage_LeftBar">
//           <LeftBar />
//         </div>
//         <div className="ProspectListpage_container">
//           {/* <div className="Productsrow">
//     <div className="Productlogo" ><BsFillBagCheckFill/></div>
//     <div className="title">Products</div>
//     <div className="Active">Products</div>
//     <div className="Draft">Products</div>
//     <div className="Assembly">Products</div>
//     <div className="addlogo"></div>
    
//     <button>Add product</button>
//   </div> */}
//           <div className="ProspectListpage_Titlebar">
//             {/* <Titlebar title={title} show={show}/> */}
//             {/* <Titlebar/> */}
//             <Titlebar
//             middledivshow={middledivshow}
//               titlebar_name={titlebar_name}
//               titlebar_value1={titlebar_value1}
//               titlebar_value2={titlebar_value2}
//               titlebar_value3={titlebar_value3}
//             />
//           </div>
//           <div className="ProspectListpage_Filterbar">
//             <Filterbar />
//           </div>
//           <div className="ProspectListpage_Mainlist">
//             <Prospectpagelistmainlist array={array} setArray={setArray} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
