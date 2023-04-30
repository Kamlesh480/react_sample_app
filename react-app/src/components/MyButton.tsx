import React from "react";

interface Props {
  children: string;
  onClick: () => void;
}

const MyButton = ({ children, onClick }: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
