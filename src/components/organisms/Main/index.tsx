import React from "react";
import Header from "../../atoms/Header";
import styles from "./Main.module.css";

function App() {
  const { application, main } = styles;
  return (
    <div className={application}>
      <div className={main}>
        <Header>Тудушка</Header>
      </div>
    </div>
  );
}

export default App;
