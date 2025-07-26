import React from "react";
import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export const ButtonOne = ({ children, onClick, type = "button" }: ButtonProps) => (
  <button className="btnOne" onClick={onClick} type={type}>
    {children}
  </button>
);

export const ButtonTwo = ({ children, onClick, type = "button" }: ButtonProps) => (
  <button className="btnTwo" onClick={onClick} type={type}>
    {children}
  </button>
);

export const ButtonThree = ({ children, onClick, type = "button" }: ButtonProps) => (
  <button className="btnThree" onClick={onClick} type={type}>
    {children}
    <img src="/shared/desktop/icon-arrow-right.svg" alt="" className="arrow" />
  </button>
);
