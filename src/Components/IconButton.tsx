import React from "react";
import "./IconButton.scss";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export const IconButton = ({ children, onClick }: Props) => {
  return <button className="icon-button-container" onClick={onClick}>
    {children}
  </button>;
};
