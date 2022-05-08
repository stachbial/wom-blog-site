import React from "react";

const BurgerIcon = ({ dimensions, strokeWidth }) => {
  return (
    <svg
      className={dimensions}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 36.4C0 41.1604 -2.38419e-07 43.5406 0.92645 45.359C1.74135 46.9585 3.0417 48.2585 4.6411 49.0735C6.45935 50 8.83955 50 13.6 50H36.4C41.1605 50 43.5405 50 45.359 49.0735C46.9585 48.2585 48.2585 46.9585 49.0735 45.359C50 43.5406 50 41.1604 50 36.4V13.6C50 8.83955 50 6.45935 49.0735 4.6411C48.2585 3.0417 46.9585 1.74135 45.359 0.92645C43.5405 -2.38419e-07 41.1605 0 36.4 0H13.6C8.83955 0 6.45935 -2.38419e-07 4.6411 0.92645C3.0417 1.74135 1.74135 3.0417 0.92645 4.6411C-2.38419e-07 6.45935 0 8.83955 0 13.6V36.4Z"
        fill="black"
      />
      <path
        d="M12.5001 16H37.5001M12.5001 25H37.5001M12.5001 34H37.5001"
        stroke="white"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BurgerIcon;
