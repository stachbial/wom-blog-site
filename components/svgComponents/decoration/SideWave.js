import styles from "./SideWave.module.css";

const SideWave = ({ className, translate }) => {
  return (
    <div className={className}>
      <svg
        className={styles.SideWave + " " + translate}
        width="100"
        height="772"
        viewBox="0 0 100 772"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 772H80C45.3589 675.5 62.6794 530.751 79.9999 386.001L80 386L80.0001 385.999C97.3206 241.249 114.641 96.4998 80 0H0V772Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default SideWave;
