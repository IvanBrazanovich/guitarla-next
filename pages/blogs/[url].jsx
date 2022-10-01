import React from "react";
import Layout from "../../components/layout";
import styles from "../../styles/blogs.module.css";
import { transformDate } from "../../utils/helpers";

const Post = ({ blog }) => {
  const { titulo, createdAt, content, precio, url, imagen } = blog;
  const fecha = transformDate(createdAt);
  return (
    <Layout>
      <main className={`${styles.blog} ${styles.mt_3}`}>
        <div className={styles.img_wrap}>
          <img src={imagen?.data.attributes.url} alt="" />
        </div>
        <div className={styles.container_info}>
          <h3 className={styles.titulo}> {titulo}</h3>
          <p className={styles.fecha}>{fecha}</p>
          <p className={styles.texto}>{content}</p>
        </div>
      </main>
    </Layout>
  );
};
export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/blogs?populate=*`);
  const res = await respuesta.json();

  const paths = res.data.map((blog) => {
    return { params: { url: blog.attributes.url } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/blogs?filters[url]=${url}&populate=*`
  );
  const res = await respuesta.json();

  return {
    props: {
      blog: res.data[0].attributes,
    },
  };
}

export default Post;
