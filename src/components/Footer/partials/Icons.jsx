import React from "react";
import twitter from "../../../../assets/social/twitter.svg";
import facebook from "../../../../assets/social/facebook.svg";
import linkedin from "../../../../assets/social/linkedin.svg";
import youtube from "../../../../assets/social/youtube.svg";
import instagram from "../../../../assets/social/insta.svg";
import snapchat from "../../../../assets/social/snapchat-brands.svg";
import styles from "../styles/Footer.module.css";

const Icons = () => (
  <div className={styles.icons}>
    <img
      src={twitter}
      alt=''
      className={styles.icon}
      // style={{ color: "gray", height: "50px", margin: "5px" }}
    />
    <img
      src={facebook}
      alt=''
      className={styles.icon}
      // style={{ color: "gray", height: "50px", margin: "5px" }}
    />
    <img
      src={linkedin}
      alt=''
      className={styles.icon}
      // style={{ color: "gray", height: "50px", margin: "5px" }}
    />
    <img
      src={youtube}
      alt=''
      className={styles.icon}
      // style={{ color: "gray", height: "50px", margin: "5px" }}
    />
    <img
      src={instagram}
      alt=''
      className={styles.icon}
      // style={{ color: "gray", height: "50px", margin: "5px" }}
    />
    <img
      src={snapchat}
      alt=''
      className={styles.icon}
      // style={{ color: "gray", height: "50px", margin: "5px" }}
    />
  </div>
);

export default Icons;
