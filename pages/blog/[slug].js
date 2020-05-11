import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
// import marked from "marked";
import { Card, Wrapper } from "bushido-strap";
import ReactMarkdown from "react-markdown/with-html";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "../../oneDark";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={dark} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

export default ({ htmlString, data }) => {
  return (
    <Layout title={`${data.title}`}>
      <Wrapper>
        <Card m="2rem 0 6rem 0" w="94%" maxW="88rem">
          {/* <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: htmlString }}
          /> */}
          {/* <div> */}
          <ReactMarkdown
            className="markdown-body"
            escapeHtml={false}
            source={htmlString}
            renderers={{ code: CodeBlock }}
          />
          {/* </div> */}
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
  // const htmlString = marked(parsedMarkdown.content);
  return {
    props: {
      htmlString: parsedMarkdown.content,
      data: parsedMarkdown.data,
    },
  };
};
