import { Card, Text, Box, Flex, Ref, theme } from "bushido-strap";
import Layout from "../components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default ({ slugs }) => {
  return (
    <Layout title="Projects">
      <Card w="94%" maxW="150rem">
        <Text xlf bold>
          Some Of My Recent Projects
        </Text>
        <Box h="2rem" />
        <Flex wrap="true" jcAround>
          {slugs.map((slug) => {
            return (
              <Ref href={slug.url} m="2rem 0">
                <Card shade w="30rem" h="44rem" jcBetween>
                  <Box pointer>
                    <img src={slug.img} alt="thumbnail" />
                  </Box>
                  <Text lf bold pointer>
                    {slug.title}
                  </Text>
                  <Ref
                    color={theme.blue5}
                    hvrColor={theme.blue8}
                    href={slug.github}
                    bold
                  >
                    GitHub
                  </Ref>
                  {slug.youTube ? (
                    <Ref
                      bold
                      color={theme.red5}
                      hvrColor={theme.red8}
                      href={slug.youTube}
                      pointer
                    >
                      YouTube Video
                    </Ref>
                  ) : null}
                  <Text>{slug.description}</Text>
                </Card>
              </Ref>
            );
          })}
        </Flex>
      </Card>
    </Layout>
  );
};

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
  console.log("slugs foo", slugs);

  return {
    props: {
      slugs,
    },
  };
};
