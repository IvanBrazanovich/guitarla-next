import React from "react";
import Layout from "../components/layout";
import Post from "../components/post";
import styles from "../styles/blogs.module.css";

const Blog = ({ blogs }) => {
  return (
    <Layout title="Nuestro blog, posts y noticias">
      <main>
        <h3 className="heading">Blog</h3>
        <div className={`contenedor ${styles.container_blogs}`}>
          {blogs.map((blog) => {
            return <Post key={blog.id} blog={blog.attributes} />;
          })}
        </div>
      </main>{" "}
    </Layout>
  );
};
export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/blogs?populate=*`);
  const res = await response.json();
  console.log(res);
  return {
    props: { blogs: res.data },
  };
}
export default Blog;
