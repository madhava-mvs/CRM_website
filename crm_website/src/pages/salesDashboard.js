// import React, { useEffect, useState } from 'react'
// import LeftBar from './components/Leftbar'
// import TitleBar from './components/Titlebar'
// import Topbar from './components/Topbar'
// import './salesDashboard.css'
// import SalesDash from './components/Msale'

// import axios from 'axios'
// export default function SalesDashboard() {
 
//   const [todo, setTodo]=useState([])
//   const [inProgress, setInProgress]=useState([])
//   const [completed, setCompleted]=useState([])
//   ///
//   useEffect(()=>{
//     const url = "https://fgflfwzdw6.execute-api.us-east-1.amazonaws.com/dev/getTODO";
//     const data = {}
//     const headers = {}
//     axios.post(url, data, {headers:headers})
//     .then((res)=>{
//       let temp= res.data; 
//       console.log(res.data)
//       let tempTodo=[];
//       let tempInProgress=[];
//       let tempCompleted=[];

//       for(const iterator of temp) {
//           if(iterator.txtProgresstype==="To Do"){
//             iterator.isclicked=false;
//             tempTodo.push(iterator)
            
//           }else if(iterator.txtProgresstype==="In Progress"){
//             iterator.isclicked=false;
//             tempInProgress.push(iterator)
//             // for(const x of tempInProgress)
//             //   x.isClicked = false
//             // }
//           }
//            else{
//             iterator.isclicked=false;
//             tempCompleted.push(iterator)
//             // for(const x of tempCompleted){
//             //   x.isClicked = false
//             // }
//           }
//       }
//       setTodo(tempTodo)
//       setInProgress(tempInProgress)
//       setCompleted(tempCompleted)
//       console.log("tempTodo=>"+JSON.stringify(tempTodo))
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   },[]);
//   return (
//     <div className='salesdash_outer'>
//       <Topbar />
//       <div className='salesdash_content'>
//         <LeftBar />
//         <div className='salesdash_content_right'>
//             <div className='salesdash_content_right_inside'>
//             <TitleBar />
//             <SalesDash todo={todo} inprogress={inProgress} completed={completed} setTodo={setTodo} setInProgress={setInProgress} setCompleted={setCompleted} />
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react'
import LeftBar from '../components/LeftBar'
import TitleBar from '../components/Titlebar'
import Topbar from '../components/Topbar'
import './salesDashboard.css'
import SalesDash from '../components/Msale'
//import Pop from '../components/Pop'

import axios from 'axios'
import { useSelector } from 'react-redux'
export default function SalesDashboard() {
  const userid = useSelector((state) => state.userid);

  const titlebar_name = "Tasks"
  const [savebuttonshow , setsavebuttonshow]= useState(false);
  const button_value ="Add Lead"
  const [middledivshow,setmiddledivshow] = useState(true);
  const sales_button_value="search"
  //const salesbuttonshow=true
  // const [titlebar_value1,settitlebar_value1] = useState(true);
  // const [titlebar_value2,settitlebar_value2] = useState(true);
  // const [titlebar_value3,settitlebar_value3] = useState(true);
  const titlebar_value1="Activity"
  const titlebar_value2="lead"
  const titlebar_value3="All"

  const [todo, setTodo]=useState([])
  const [inProgress, setInProgress]=useState([])
  const [completed, setCompleted]=useState([])
  //const [array, setArray]=useState([])
  // const [show, setShow]=useState(false)
  ///

  useEffect(()=>{
    const url = "https://fgflfwzdw6.execute-api.us-east-1.amazonaws.com/dev/gettasklist2";
    const data = { userid: userid }
    const header = {}
    axios.post(url, data, {headers:header})
    .then((res)=>{
      let temp= res.data; 
      console.log("inside data "+JSON.stringify(res.data))
      let tempTodo=[];
      let tempInProgress=[];
      let tempCompleted=[];

      for(const iterator of temp) {
          if(iterator.txtProgresstype==="To Do"){
            iterator.isclicked=false;
            tempTodo.push(iterator)
            
          }else if(iterator.txtProgresstype==="In Progress"){
            iterator.isclicked=false;
            tempInProgress.push(iterator)
            // for(const x of tempInProgress){
            //   x.isClicked = false
            // }
          }
           else{
            iterator.isclicked=false;
            tempCompleted.push(iterator)
            // for(const x of tempCompleted){
            //   x.isClicked = false
            // }
          }
      }
      setTodo(tempTodo)
      setInProgress(tempInProgress)
      setCompleted(tempCompleted)
      console.log("tempTodo=>"+JSON.stringify(tempTodo))
       
    })
    .catch((err)=>{
      console.log(err)
    })
 
  /////

  // const url1 = "https://8mtnecluj6.execute-api.us-east-1.amazonaws.com/dev/TODO";
  // const data1 = { userid: userid }
  // const header1 = {}
  // axios.post(url1, data1, {headers:header1})
  // .then((res) => {
  //   console.log(JSON.stringify(res.data));
  //   setArray(res.data);
  // })
    // let temp= res.data; 
    // console.log("inside data "+JSON.stringify(res.data))
    // let tempTodo=[];
    // let tempInProgress=[];
    // let tempCompleted=[];

    // for(const iterator of temp) {
    //     if(iterator.txtProgresstype==="To Do"){
    //       iterator.isclicked=false;
    //       tempTodo.push(iterator)
          
    //     }else if(iterator.txtProgresstype==="In Progress"){
    //       iterator.isclicked=false;
    //       tempInProgress.push(iterator)
    //       // for(const x of tempInProgress){
    //       //   x.isClicked = false
    //       // }
    //     }
    //      else{
    //       iterator.isclicked=false;
    //       tempCompleted.push(iterator)
    //       // for(const x of tempCompleted){
    //       //   x.isClicked = false
    //       // }
    //     }
    // }
    // setTodo(tempTodo)
    // setInProgress(tempInProgress)
    // setCompleted(tempCompleted)
    // console.log("tempTodo=>"+JSON.stringify(tempTodo))
     
  
  // .catch((err)=>{
  //   console.log(err)
  // })
},[]);
  // const handleclick =(e)=>{
  //   setShow(!show)
  // }
  return (
    <div className='salesdash_outer'>
      <Topbar />
      <div className='salesdash_content'>
        <div className='salesdash_content_leftbar_component'>
        <LeftBar />
        </div>
        <div className='salesdash_content_right'>
            <div className='salesdash_content_right_inside'>
              <div className='salesdash_titlebar'>
            <TitleBar titlebar_name={titlebar_name}savebuttonshow={savebuttonshow} button_value={button_value} middledivshow={middledivshow} titlebar_value1={ titlebar_value1} titlebar_value2={ titlebar_value2} titlebar_value3={ titlebar_value3} sales_button_value={sales_button_value} /></div>
            <SalesDash todo={todo} inprogress={inProgress} completed={completed} setTodo={setTodo} setInProgress={setInProgress} setCompleted={setCompleted} />
            </div>
        </div>
      </div>
    </div>
  )
}

