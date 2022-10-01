import Link from "next/link";
import React from "react";
import styles from "../styles/tienda.module.css";

const Guitarra = ({ guitarra }) => {
  const { titulo, createdAT, contenido, precio, url, imagen } = guitarra;
  return (
    <div className={styles.container_guitarra}>
      <div className={styles.img_wrap}>
        <img src={imagen?.data?.attributes?.formats?.small.url} alt="" />
      </div>

      <div className={styles.container_info}>
        <h3 className={styles.heading}>{titulo}</h3>
        <p className={styles.contenido}>{contenido}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.guitarra_button}>Ver Producto</a>
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
