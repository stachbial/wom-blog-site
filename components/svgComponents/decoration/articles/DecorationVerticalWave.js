import React from "react";

const DecorationVerticalWave = ({ className, color }) => {
  return (
    <svg
      className={className}
      width="41"
      height="772"
      viewBox="0 0 41 772"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 772H41V0H20C-14.6411 96.4998 2.67936 241.249 19.9999 385.999L20 386L20.0001 386.001C37.3206 530.751 54.6411 675.5 20 772Z"
        fill={color}
      />
    </svg>
  );
};

export default DecorationVerticalWave;
