import React from "react";
import { Card, Text, Box, Flex, theme } from "sriracha-ui";
import Layout from "../../components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

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
              <Link href={slug.url} passHref key={slug.url}>
                <Card
                  shade
                  w="30rem"
                  h="46rem"
                  jcBetween
                  p="0"
                  hvrShadow={theme.shadows[2]}
                >
                  <Box pointer>
                    <img src={slug.img} alt="thumbnail" />
                  </Box>
                  <Text lf bold pointer>
                    {slug.title}
                  </Text>
                  <Text
                    as="a"
                    color={theme.colors.blue5}
                    hvrColor={theme.colors.blue8}
                    href={slug.github}
                    bold
                  >
                    GitHub
                  </Text>
                  {slug.youTube ? (
                    <Text
                      as="a"
                      bold
                      color={theme.colors.red5}
                      hvrColor={theme.colors.red8}
                      href={slug.youTube}
                      pointer
                    >
                      YouTube Video
                    </Text>
                  ) : null}
                  <Text p="1rem">{slug.description}</Text>
                </Card>
              </Link>
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
      url: parsedMarkdown.data.url,
      github: parsedMarkdown.data.github,
      youTube: parsedMarkdown.data.youTube,
      img: parsedMarkdown.data.img,
      description: parsedMarkdown.data.description,
    };
  });
  // console.log("slugs foo", slugs);

  return {
    props: {
      slugs,
    },
  };
};
