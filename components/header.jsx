import React from "react";
import Navegation from "./navegation";
import styles from "../styles/header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.logo_container}>
        <Image
          src="/img/logo.svg"
          width={400}
          height={100}
          alt="logo guitarla"
        />
      </div>

      <Navegation />
    </header>
  );
};

export default Header;
