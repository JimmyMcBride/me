import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import marked from "marked";
import { Card, Wrapper } from "bushido-strap";

export default ({ htmlString, data }) => {
  return (
    <Layout title={`${data.title}`}>
      <Wrapper>
        <Card m="2rem 0 6rem 0" w="94%" maxW="88rem">
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: htmlString }}
          />
        </Card>
      </Wrapper>
    </Layout>
  );
};

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
  const htmlString = marked(parsedMarkdown.content);
  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};
