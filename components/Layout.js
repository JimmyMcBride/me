import Link from "next/link";
import Head from "next/head";
import { Wrapper, NavBar, Box, Flex, Text, theme } from "sriracha-ui";

const navHeight = "5rem";

export default function Layout({
  children,
  title = "This is the default title",
}) {
  return (
    <Wrapper aiStart minH="100%">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <NavBar bg={theme.colors.gray0} drape shadow={theme.shadows[3]}>
          <Flex stretch jcBetween aiCenter h={navHeight}>
            <Flex m="0 0 0 2rem">
              <Flex aiCenter p="0 1rem" pointer>
                <Link href="/" passHref>
                  <Text
                    as="a"
                    lf
                    pointer
                    color={theme.colors.gray9}
                    hvrColor={theme.colors.blackAlpha6}
                  >
                    Home
                  </Text>
                </Link>
              </Flex>
              <Box w="2rem" />
              <Flex aiCenter p="0 1rem" pointer>
                <Link href="/blog" passHref>
                  <Text
                    lf
                    as="a"
                    pointer
                    color={theme.colors.gray9}
                    hvrColor={theme.colors.blackAlpha6}
                  >
                    Blog
                  </Text>
                </Link>
              </Flex>
              <Box w="2rem" />
              <Flex aiCenter p="0 1rem" pointer>
                <Link href="/projects" passHref>
                  <Text
                    as="a"
                    lf
                    pointer
                    color={theme.colors.gray9}
                    hvrColor={theme.colors.blackAlpha6}
                  >
                    Projects
                  </Text>
                </Link>
              </Flex>
            </Flex>
            <Flex aiCenter>
              <Text
                as="p"
                lf
                m="0"
                color={theme.colors.gray9}
                className="my-name"
              >
                Jimmy McBride
              </Text>
              <Box w="2rem" />
              <Box sqr="4rem" circle m="0 2rem 0 0">
                <img src="/jimicon.png" alt="me" />
              </Box>
            </Flex>
          </Flex>
        </NavBar>
      </header>
      <Flex drape stretch>
        <Box h={navHeight} />
        <Box />
        {children}
      </Flex>
    </Wrapper>
  );
}
