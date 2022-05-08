import React from "react";

const DecorationHorizontalWave = ({ className, color }) => {
  return (
    <svg
      className={className}
      width="773"
      height="42"
      viewBox="0 0 773 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.5 21.4999V0.499939L772.5 0.499939V21.4999C676 56.1411 531.251 38.8206 386.501 21.5001L386.5 21.4999L386.499 21.4998C241.749 4.17935 96.9998 -13.1411 0.5 21.4999Z"
        fill={color}
      />
    </svg>
  );
};

export default DecorationHorizontalWave;
