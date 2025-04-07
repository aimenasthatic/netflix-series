import React, { useEffect, useState } from "react";

import "./App.css";
import Timer from "./three";

function App() {
  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    console.log("App comp. is mounting....");
  }, []);

  return (
    <>
      <div className="toggle">
        {isVisible ? <Timer /> : null}
        <button onClick={() => setVisible(!isVisible)}> Toggle</button>
      </div>
    </>
  );
}

export default App;
