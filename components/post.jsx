import Link from "next/link";
import React from "react";
import styles from "../styles/blogs.module.css";
import { transformDate } from "../utils/helpers";

const Post = ({ blog }) => {
  const { titulo, createdAt, content, precio, url, imagen } = blog;
  const fecha = transformDate(createdAt);
  return (
    <div className={styles.blog}>
      <div className={styles.img_wrap}>
        <img src={imagen?.data.attributes.formats?.small.url} alt="" />
      </div>
      <div className={styles.container_info}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.fecha}>{fecha}</p>
        <p className={styles.contenido}>{content}</p>

        <Link href={`/blogs/${url}`}>
          <a className={styles.blog_button}>Ver Blog</a>
        </Link>
      </div>
    </div>
  );
};

export default Post;
