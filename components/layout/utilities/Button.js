import React from "react";

const Button = ({ onClick, className, children }) => {
  const clickHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
  };

  return (
    <button type="button" onClick={clickHandler} className={className}>
      {children}
    </button>
  );
};

export default Button;
