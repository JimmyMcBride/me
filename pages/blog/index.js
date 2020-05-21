import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Box, Card, Flex, Text, theme } from "sriracha-ui";

export default ({ slugs }) => {
  return (
    <Layout title="Blog">
      <Card shade w="94%" maxW="88rem">
        <Text xlf bold as="h2">
          Check out some of my recent blogs!
        </Text>
        <Flex wrap="true" jcEvenly m="5rem 0" stretch>
          {slugs.map((slug) => {
            return (
              <Link href={`/blog/${slug.link}`} key={slug.link}>
                <Card
                  w="30rem"
                  p="0"
                  key={slug.link}
                  shade
                  pointer
                  hvrShadow={theme.shadows[2]}
                >
                  <Box w="30rem" pointer>
                    <img src={slug.image} alt="blog banner" />
                  </Box>
                  <Text
                    as="h2"
                    m="2rem 0"
                    pointer
                    bold
                    lf
                    color={theme.colors.gray9}
                    hvrColor={theme.colors.gray6}
                  >
                    {slug.title}
                  </Text>
                  <Text p="1rem" pointer>
                    {slug.description}
                  </Text>
                </Card>
              </Link>
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
