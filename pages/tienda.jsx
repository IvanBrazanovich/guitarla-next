import React from "react";
import Guitarra from "../components/guitarra";
import Layout from "../components/layout";
import styles from "../styles/tienda.module.css";

const Tienda = ({ guitarras }) => {
  return (
    <Layout title="Tienda" description="Nuestra tienda, artículos y productos">
      <main>
        <h3 className={styles.heading}>Nuestra Colección</h3>
        <div className={styles.guitarra_container}>
          {guitarras.map((guitarra) => {
            return (
              <Guitarra
                key={guitarra.attributes.url}
                guitarra={guitarra.attributes}
              />
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  console.log(`${process.env.API_URL}/guitarras`);
  const response = await fetch(`${process.env.API_URL}/guitarras?populate=*`);
  const res = await response.json();

  console.log(res.data);
  return {
    props: { guitarras: res.data },
  };
}

export default Tienda;
