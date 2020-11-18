import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.css";

export type TButtonStatus = "active" | "normal";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: TButtonStatus;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { children, status, className } = props;
  const { button } = styles;
  return (
    <button {...props} className={cn(button, styles[status], className)}>
      {children}
    </button>
  );
};

export default Button;
