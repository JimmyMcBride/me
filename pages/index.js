// import Link from "next/link";
import Layout from "../components/Layout";
// import about from "../assets/about.md";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Card, Text } from "sriracha-ui";
import ReactMarkdown from "react-markdown/with-html";

const Home = ({ markdownString }) => (
  <Layout title="Jimmy McBride">
    <Card shade w="94%" maxW="88rem">
      <ReactMarkdown
        className="markdown-body"
        escapeHtml={false}
        source={markdownString}
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
      markdownString: parsedMarkdown.content,
    },
  };
};

export default Home;
