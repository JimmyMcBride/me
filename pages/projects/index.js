import React from "react";
import { Card, Text, Box, Flex, theme } from "sriracha-ui";
import Layout from "../../components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Projects({ slugs }) {
  return (
    <Layout title="Projects">
      <Card shade w="94%" maxW="88rem">
        <Text xlf bold as="h2">
          Some Of My Recent Projects
        </Text>
        <Box h="2rem" />
        <Flex wrap="true" jcAround>
          {slugs.map((slug) => {
            return (
              <Box key={slug.link}>
                <Card
                  shade
                  w="30rem"
                  h="46rem"
                  jcBetween
                  p="0"
                  hvrShadow={theme.shadows[2]}
                >
                  <Box pointer as="a" href={`/projects/${slug.link}`}>
                    <img src={slug.img} alt="thumbnail" />
                  </Box>
                  <Text
                    lf
                    bold
                    pointer
                    as="a"
                    href={`/projects/${slug.link}`}
                    color={theme.colors.gray9}
                    hvrColor={theme.colors.gray7}
                  >
                    {slug.title}
                  </Text>
                  <Box h="1rem" />
                  <Text
                    as="a"
                    color={theme.colors.blue5}
                    hvrColor={theme.colors.blue8}
                    href={slug.github}
                    bold
                    pointer
                  >
                    GitHub
                  </Text>
                  <Text
                    as="a"
                    p="1rem"
                    pointer
                    href={`/projects/${slug.link}`}
                    color={theme.colors.gray9}
                    hvrColor={theme.colors.gray9}
                  >
                    {slug.description}
                  </Text>
                  <Box h="2rem" />
                </Card>
              </Box>
            );
          })}
        </Flex>
      </Card>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("projects");
  const slugValues = files.map((filename) => filename.replace(".md", ""));
  const slugs = slugValues.map((slug) => {
    const markdownWithMetaData = fs
      .readFileSync(path.join("projects", slug + ".md"))
      .toString();
    const parsedMarkdown = matter(markdownWithMetaData);
    return {
      title: parsedMarkdown.data.title,
      img: parsedMarkdown.data.img,
      github: parsedMarkdown.data.github,
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
