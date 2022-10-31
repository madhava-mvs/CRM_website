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
//             // for(const x of tempInProgress){
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
import LeftBar from './components/Leftbar'
import TitleBar from './components/Titlebar'
import Topbar from './components/Topbar'
import './salesDashboard.css'
import SalesDash from './components/Msale'

import axios from 'axios'
export default function SalesDashboard() {

  const titlebar_name = "Tasks"
  const [savebuttonshow , setsavebuttonshow]= useState(true);
  const button_value ="Add Lead"
  const [middledivshow,setmiddledivshow] = useState(true);
  // const [titlebar_value1,settitlebar_value1] = useState(true);
  // const [titlebar_value2,settitlebar_value2] = useState(true);
  // const [titlebar_value3,settitlebar_value3] = useState(true);
  const titlebar_value1="Activity"
  const titlebar_value2="lead"
  const titlebar_value3="All"

  const [todo, setTodo]=useState([])
  const [inProgress, setInProgress]=useState([])
  const [completed, setCompleted]=useState([])
  ///
  useEffect(()=>{
    const url = "https://fgflfwzdw6.execute-api.us-east-1.amazonaws.com/dev/getTODO";
    const data = {}
    const header = {}
    axios.post(url, data, {headers:header})
    .then((res)=>{
      let temp= res.data; 
      console.log(res.data)
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
  },[]);
  return (
    <div className='salesdash_outer'>
      <Topbar />
      <div className='salesdash_content'>
        <LeftBar />
        <div className='salesdash_content_right'>
            <div className='salesdash_content_right_inside'>
              <div className='salesdash_titlebar'>
            <TitleBar titlebar_name={titlebar_name}savebuttonshow={savebuttonshow} button_value={button_value} middledivshow={middledivshow} titlebar_value1={ titlebar_value1} titlebar_value2={ titlebar_value2} titlebar_value3={ titlebar_value3}/></div>
            <SalesDash todo={todo} inprogress={inProgress} completed={completed} setTodo={setTodo} setInProgress={setInProgress} setCompleted={setCompleted} />
            </div>
        </div>
      </div>
    </div>
  )
}

