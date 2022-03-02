import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there, I'm Sabelo Software developer</p>
        <p>
          (This is a sample website I learning NextJS{" "}
          <a href="/post/first-post">Preview</a>.)
        </p>
      </section>
    </Layout>
  );
}
