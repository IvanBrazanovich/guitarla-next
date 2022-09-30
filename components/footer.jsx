import React from "react";
import Navegation from "./navegation";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Navegation />

      <p className={styles.copy}>Todos los derechos reservados &copy; 2022</p>
    </div>
  );
};

export default Footer;
