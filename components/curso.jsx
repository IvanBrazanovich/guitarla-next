import React from "react";
import styles from "../styles/curso.module.css";

const Curso = ({ cursos }) => {
  const { titulo, content, imagen } = cursos.attributes;
  console.log(cursos);
  console.log(imagen?.data.attributes.url);
  return (
    <section className={`${styles.curso} curso`}>
      <style jsx="true">{`
        .curso {
          background-image: linear-gradient(
              to right,
              rgba(0 0 0 / 0.6),
              rgba(0 0 0 / 0.7)
            ),
            url(${imagen?.data.attributes.url});
        }
      `}</style>
      <div className={`contenedor ${styles.curso_grid}`}>
        <div className={styles.info_container}>
          <h3 className="heading">{titulo}</h3>
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
};

export default Curso;
