const ExitIcon = ({ dimensions, strokeWidth }) => {
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
        d="M0 36.4C0 41.1605 -2.38419e-07 43.5407 0.92645 45.359C1.74135 46.9585 3.0417 48.2585 4.6411 49.0735C6.45935 50 8.83955 50 13.6 50H36.4C41.1605 50 43.5405 50 45.359 49.0735C46.9585 48.2585 48.2585 46.9585 49.0735 45.359C50 43.5407 50 41.1605 50 36.4V13.6C50 8.83955 50 6.45935 49.0735 4.6411C48.2585 3.0417 46.9585 1.74135 45.359 0.92645C43.5405 -2.38419e-07 41.1605 0 36.4 0H13.6C8.83955 0 6.45935 -2.38419e-07 4.6411 0.92645C3.0417 1.74135 1.74135 3.0417 0.92645 4.6411C-2.38419e-07 6.45935 0 8.83955 0 13.6V36.4Z"
        fill="black"
      />
      <path
        d="M13 12L38 38M38 12L13 38L38 12Z"
        stroke="white"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ExitIcon;
