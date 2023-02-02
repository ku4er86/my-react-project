import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

// function App() {
//   const [value, setValue] = useState("");
//   const [value1, setValue1] = useState("something");
//   return (
//     <div>
//       <input value={value} onChange={(event) => setValue(event.target.value)} />
//       <p>text1: {value}</p>
//       <input
//         name="myco"
//         // value={value1}
//         onChange={(event) => {
//           setValue1(event.target.value);
//           console.log(event.type);
//         }}
//       />
//       <p>text2: {value1}</p>
//     </div>
//   );
// }

// export default App;
// function App() {
//   const [date1, setDate1] = useState(0);
//   const [date2, setDate2] = useState(0);
//   const [result, setResult] = useState(0);
// let getDate1 = getDate()
// let getDate2 = new Date().toISOString().slice(0, 10);
//   return (
//     <div>
//       <input
//         value={date1}
//         type='date'
//         onChange={(event) => setDate1(event.target.value)}
//       />
//       <input
//         value={date2}
//         type='date'
//         onChange={(event) => setDate2(event.target.value)}
//       />

//       <button onClick={() => setResult(date1- date2)}>
//         btn1
//       </button>
//       <p>result: {result}</p>
//     </div>
//   );
// }
// export default App;
