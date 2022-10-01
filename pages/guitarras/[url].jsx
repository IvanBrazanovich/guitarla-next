import React from "react";
import Layout from "../../components/layout";
import styles from "../../styles/tienda.module.css";

const Guitarra = ({ guitarra }) => {
  const { titulo, createdAT, contenido, precio, url, imagen } = guitarra;

  return (
    <Layout>
      <div className={`${styles.container_guitarra} ${styles.guitarra_sola}`}>
        <div className={styles.img_wrap}>
          <img src={imagen?.data?.attributes?.formats?.small.url} alt="" />
        </div>

        <div className={styles.container_info}>
          <h3 className={styles.heading}>{titulo}</h3>
          <p className={styles.texto}>{contenido}</p>
          <p className={styles.precio}>${precio}</p>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=*`);
  const res = await respuesta.json();

  const paths = res.data.map((guitarra) => {
    return { params: { url: guitarra.attributes.url } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  console.log(url);
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=*`
  );
  const res = await respuesta.json();

  return {
    props: {
      guitarra: res.data[0].attributes,
    },
  };
}

export default Guitarra;
