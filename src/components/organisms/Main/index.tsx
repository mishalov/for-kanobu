import React from "react";
import Header from "../../atoms/Header";
import ActivitiesList from "../../molecules/ActivitiesList";
import styles from "./Main.module.css";
import Footer from "../../molecules/Footer";
import { observer } from "mobx-react-lite";
import Store from "../../../store";
import { inject } from "mobx-react";

interface IAppProps {
  store?: typeof Store;
}

const App: React.FC<IAppProps> = (props) => {
  const { application, main } = styles;
  const store = props.store!;
  const undoneCount = store.getNotDone();
  return (
    <div className={application}>
      <div className={main}>
        <Header>
          {undoneCount
            ? `Тебе осталось сделать дел: ${undoneCount}`
            : "Все дела сделаны, ура!"}
        </Header>
        <ActivitiesList />
        <Footer onNewCreate={store.addActivity} />
      </div>
    </div>
  );
};

export default inject("store")(observer(App));
