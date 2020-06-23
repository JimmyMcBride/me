import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import { Card, Box, Flex, Text, theme } from "sriracha-ui";
import ReactMarkdown from "react-markdown";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "../../syntaxTheme";
import moment from "moment";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={dark} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

export default function BlogSlug({ htmlString, data }) {
  useEffect(() => {
    const imgs = document.querySelectorAll("img");
    console.log(imgs);
    imgs.forEach((img) => (img.width = 300));
  }, []);
  const publishedOn = new Date(data.date * 1000);
  return (
    <Layout title={`${data.title}`}>
      <Card shade m="2rem 0 6rem 0" w="94%" maxW="88rem" taLeft>
        <Flex stretch jcEnd>
          <Text sf as="p" color={theme.colors.gray7}>
            Published on: {moment(publishedOn).format("MM/DD/YYYY")}
          </Text>
        </Flex>
        <Box maxW="100%">
          <ReactMarkdown
            className="markdown-body"
            escapeHtml={false}
            source={htmlString}
            renderers={{ code: CodeBlock }}
          />
        </Box>
      </Card>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetaData = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();
  const parsedMarkdown = matter(markdownWithMetaData);
  return {
    props: {
      htmlString: parsedMarkdown.content,
      data: parsedMarkdown.data,
    },
  };
};
