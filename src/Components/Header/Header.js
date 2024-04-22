import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> Builder!
        </p>
        <p className={styles.subHeading}> {/* Changed from p1 to p */}
          Make your own resume.
        </p>
      </div>
      <div className={styles.right}>
        {/* <img src={resumeSvg} alt="Resume" /> */}
      </div>
    </div>
  );
}

export default Header;
