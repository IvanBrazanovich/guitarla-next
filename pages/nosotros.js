import Image from "next/image";
import React from "react";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout title={"Nosotros"} description="Desde nosotros, tienda de música">
      <main className={` ${styles.nosotros_container}`}>
        <h3 className="heading">Nosotros</h3>
        <div className={styles.wrapper}>
          <div className={styles.img_wrapper}>
            <img src="/img/nosotros.jpg" />
          </div>

          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              nostrum provident impedit, rerum quasi architecto reprehenderit
              aliquid exercitationem consequuntur eius! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Debitis nostrum provident
              impedit, rerum quasi architecto reprehenderit aliquid
              exercitationem consequuntur eius!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              nostrum provident impedit, rerum quasi architecto reprehenderit
              aliquid exercitationem consequuntur eius!
            </p>
          </div>
        </div>
      </main>{" "}
    </Layout>
  );
};

export default Nosotros;
