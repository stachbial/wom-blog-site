import React from "react";

const NextArrow = ({ className, color }) => {
  return (
    <svg
      className={className}
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99992 13.7071L13.9999 7.70712L14.707 7.00002L13.9999 6.29291L7.99992 0.292908L6.58571 1.70712L11.8786 7.00002L6.58571 12.2929L7.99992 13.7071ZM1.99992 13.7071L7.99992 7.70712L8.70703 7.00002L7.99992 6.29291L1.99992 0.292908L0.58571 1.70712L5.8786 7.00002L0.58571 12.2929L1.99992 13.7071Z"
        fill={color}
      />
    </svg>
  );
};

export default NextArrow;
