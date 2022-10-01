import Head from "next/head";
import Guitarra from "../components/guitarra";
import Layout from "../components/layout";
import stylesGuitarra from "../styles/tienda.module.css";
import stylesBlog from "../styles/blogs.module.css";
import Post from "../components/post";
import Curso from "../components/curso";

export default function Home({ guitarras, blogs, cursos }) {
  console.log(guitarras);
  console.log(blogs);
  console.log(cursos);
  return (
    <Layout>
      <Head>
        <title>GuitarLA</title>
        <meta name="description" content="Tienda de música" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TIENDA */}
      <main>
        <h3 className={stylesGuitarra.heading}>Nuestra Colección</h3>
        <div className={stylesGuitarra.guitarra_container}>
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
      {/* CURSO */}
      <Curso cursos={cursos} />
      {/* BLOGS */}
      <main>
        <h3 className="heading">Blog</h3>
        <div className={`contenedor ${stylesBlog.container_blogs}`}>
          {blogs.map((blog) => {
            return <Post key={blog.id} blog={blog.attributes} />;
          })}
        </div>
      </main>{" "}
    </Layout>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=*`;
  const urlBlogs = `${process.env.API_URL}/blogs?populate=*`;
  const urlCursos = `${process.env.API_URL}/curso?populate=*`;
  const [resGuitarras, resBlogs, resCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlBlogs),
    fetch(urlCursos),
  ]);

  const guitarras = await resGuitarras.json();
  const blogs = await resBlogs.json();
  const cursos = await resCursos.json();

  return {
    props: {
      guitarras: guitarras.data,
      blogs: blogs.data,
      cursos: cursos.data,
    },
  };
}
