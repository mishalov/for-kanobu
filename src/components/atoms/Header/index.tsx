import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = (props) => {
  const { header } = styles;
  return <div className={header}>{props.children}</div>;
};

export default Header;
