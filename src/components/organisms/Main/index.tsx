import React from "react";
import styles from "./Main.module.css";

function App() {
  const { application, main } = styles;
  return (
    <div className={application}>
      <div className={main}></div>
    </div>
  );
}

export default App;
