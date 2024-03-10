import React from "react";
import "./IconButton.scss";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  extraClass?: string;
}

export const IconButton = ({ children, onClick, extraClass }: Props) => {
  return (
    <button className={`icon-button-container ${extraClass}`} onClick={onClick}>
      {children}
    </button>
  );
};
