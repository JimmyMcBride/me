// import Link from "next/link";
import Layout from "../components/Layout";
// import about from "../assets/about.md";
import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import path from "path";
import { Card } from "bushido-strap";

const Home = ({ htmlString }) => (
  <Layout title="Home">
    <main>
      <Card taCenter>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </Card>
    </main>
  </Layout>
);

export const getStaticProps = async () => {
  const markdownWithMetaData = fs
    .readFileSync(path.join("assets", "about.md"))
    .toString();
  const parsedMarkdown = matter(markdownWithMetaData);
  const htmlString = marked(parsedMarkdown.content);
  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Home;
