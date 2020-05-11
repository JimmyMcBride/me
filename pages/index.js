// import Link from "next/link";
import Layout from "../components/Layout";
// import about from "../assets/about.md";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Card } from "bushido-strap";
import ReactMarkdown from "react-markdown/with-html";

const Home = ({ htmlString }) => (
  <Layout title="Jimmy McBride">
    <Card taCenter w="94%" maxW="88rem">
      <ReactMarkdown
        className="markdown-body"
        escapeHtml={false}
        source={htmlString}
      />
    </Card>
  </Layout>
);

export const getStaticProps = async () => {
  const markdownWithMetaData = fs
    .readFileSync(path.join("assets", "about.md"))
    .toString();
  const parsedMarkdown = matter(markdownWithMetaData);
  return {
    props: {
      htmlString: parsedMarkdown.content,
      data: parsedMarkdown.data,
    },
  };
};

export default Home;
