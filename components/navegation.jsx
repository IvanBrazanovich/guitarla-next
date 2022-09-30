import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/header.module.css";

const Navegation = () => {
  const location = useRouter();

  return (
    <div className={styles.navigation_container}>
      <Link href="/">
        <a className={location.pathname === "/" ? styles.active : ""}>Inicio</a>
      </Link>
      <Link href="/nosotros">
        <a className={location.pathname === "/nosotros" ? styles.active : ""}>
          Nostros
        </a>
      </Link>
      <Link href="/tienda">
        <a className={location.pathname === "/tienda" ? styles.active : ""}>
          Tienda
        </a>
      </Link>
      <Link href="/blog">
        <a className={location.pathname === "/blog" ? styles.active : ""}>
          Blog
        </a>
      </Link>
    </div>
  );
};

export default Navegation;
