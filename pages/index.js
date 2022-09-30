import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>GuitarLA</title>
        <meta name="description" content="Tienda de música" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
