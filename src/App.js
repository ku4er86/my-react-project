import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("something");
  return (
    <div>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <p>text1: {value}</p>
      <input
        name="myco"
        value={value1}
        onChange={(event) => {
          setValue1(event.target.value);
          console.log(event.type);
        }}
      />
      <p>text2: {value1}</p>
    </div>
  );
}

export default App;
