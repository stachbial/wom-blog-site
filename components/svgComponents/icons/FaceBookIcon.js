import React from "react";

const FaceBookIcon = ({ dimensions }) => {
  return (
    <svg
      className={dimensions}
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55 27.6684C55 12.3872 42.6884 0 27.5034 0C12.3116 0.00343707 0 12.3872 0 27.6719C0 41.4786 10.0569 52.924 23.2002 55V35.6665H16.223V27.6719H23.2071V21.5711C23.2071 14.6385 27.3144 10.8096 33.5939 10.8096C36.6048 10.8096 39.7497 11.3492 39.7497 11.3492V18.1546H36.2817C32.8687 18.1546 31.8032 20.289 31.8032 22.4784V27.6684H39.4266L38.2099 35.663H31.7998V54.9966C44.9431 52.9206 55 41.4751 55 27.6684Z"
        fill="black"
      />
    </svg>
  );
};

export default FaceBookIcon;
