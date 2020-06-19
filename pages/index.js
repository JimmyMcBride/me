import React from "react";
import Layout from "../components/Layout";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Card, Box } from "sriracha-ui";
import ReactMarkdown from "react-markdown/with-html";

const Home = ({ markdownString }) => (
  <Layout title="Jimmy McBride">
    <Card shade w="94%" maxW="88rem" p="0 1rem">
      <div className="contain">
        <ReactMarkdown
          className="markdown-body"
          escapeHtml={false}
          source={markdownString}
        />
      </div>
      <Box h="1.6rem" />
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
