import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Box, Card, Flex, Ref, Text, theme } from "bushido-strap";

export default ({ slugs }) => {
  return (
    <Layout title="Blog">
      <Card w="90%" bg={theme.whiteAlpha8}>
        <h2>Check out some of my recent blogs!</h2>
        <Flex wrap="true" jcEvenly w="90%" m="5rem 0">
          {slugs.map((slug) => {
            return (
              <Card w="30rem" p="0" key={slug.link} shade>
                <Box w="30rem" pointer>
                  <Link href={`/blog/${slug.link}`}>
                    <img src={slug.image} alt="blog banner" />
                  </Link>
                </Box>
                <Link href={`/blog/${slug.link}`}>
                  <Ref
                    m="2rem 0"
                    pointer
                    bold
                    lf
                    color={theme.gray9}
                    hvrColor={theme.gray6}
                  >
                    {slug.title}
                  </Ref>
                </Link>
                <Text p="1rem">{slug.description}</Text>
              </Card>
            );
          })}
        </Flex>
      </Card>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const slugValues = files.map((filename) => filename.replace(".md", ""));
  const slugs = slugValues.map((slug) => {
    const markdownWithMetaData = fs
      .readFileSync(path.join("posts", slug + ".md"))
      .toString();
    const parsedMarkdown = matter(markdownWithMetaData);
    return {
      title: parsedMarkdown.data.title,
      image: parsedMarkdown.data.image,
      description: parsedMarkdown.data.description,
      link: slug,
    };
  });

  return {
    props: {
      slugs,
    },
  };
};
