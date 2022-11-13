import React from 'react'
import "./Progressbar.css";
import { AiOutlineMore } from "react-icons/ai";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);


export default function Progressbar({ leadsc, prosc }) {

  var per = (prosc / leadsc) * 100;
  var per1 = per.toFixed(2)

  const data = {

    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [prosc, leadsc],
        backgroundColor: [
          "#8833ff",
          "rgba(54, 162, 235, 0.2)",

        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",

        ],
        borderWidth: 0,
      },
    ],
  };
  return (
    <>
      <div className='Progressbarouter'>
        <div className='Progressbarouter_inner'>
          <div className='Progressbarouter_inner_row1'>
            <label>Prospect Progress</label>
            <AiOutlineMore className='Progressbarmore' />
          </div>


          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "30px",
              marginTop: "10px",
              width: "120px",
              height: "120px"

            }}
          >
            <div
              className="test"
              style={{
                backgroundColor: "#F3F3F4",
                position: "absolute",
                width: "115px",
                height: "115px",
                borderRadius: "130px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#8833ff",
                fontWeight: "bold",
                fontFamily: "Arial,Helvetica,Sans-serif"
              }}
            >
              {per1}%
            </div>
            <Doughnut
              options={{ plugins: { legend: { display: false } } }}
              data={data}
            >
            </Doughnut>
          </div>
        </div>
      </div>
</>
);
}









// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// import "./style/Doughnut.css";
 
// ChartJS.register(ArcElement, Tooltip, Legend);
 
// export const data = {
  
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
 
// export default function App() {
//   return (
//     <div className="Doughnutcon">
//       <div className="Doughnuttest">
//       <div className="Doughnuttest1">Result</div></div>
//       <Doughnut
//         options={{ plugins: { legend: { display: true } } }}
//         data={data}
//       ></Doughnut>
//     </div>
 
//   );
// }
 


// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
 
// ChartJS.register(ArcElement, Tooltip, Legend);
 
// export const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12,5],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
 
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
       
//       ],
//       borderWidth: 0,
//     },
//   ],
// };
 
// export default function App() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         marginLeft:"40px",
//         marginTop:"40px",
//         width: "250px",
//         height: "250px",
//       }}
//     >
//       <div
//         className="test"
//         style={{
//           backgroundColor:"#FAFAFA",
//           position: "absolute",
//           width: "245px",
//           height: "245px",
//           borderRadius: "130px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         Test
//       </div>
//       <Doughnut
//         options={{ plugins: { legend: { display: false } } }}
//         data={data}
//       >

//       </Doughnut>
 

 
//     </div>
//   );
// }
