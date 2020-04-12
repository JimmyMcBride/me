import Link from "next/link";
import Head from "next/head";
import { Wrapper, NavBar, Box, Flex, Ref, Text, theme } from "bushido-strap";

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
        <NavBar bg={theme.whiteAlpha8} drape>
          <Flex stretch jcBetween aiCenter h={navHeight}>
            <Flex m="0 0 0 2rem">
              <Flex aiCenter p="0 1rem" pointer>
                <Link href="/" passHref>
                  <Ref
                    lf
                    bold
                    pointer
                    color={theme.gray8}
                    hvrColor={theme.blackAlpha6}
                  >
                    Home
                  </Ref>
                </Link>
              </Flex>
              <Box w="2rem" />
              <Flex aiCenter p="0 1rem" pointer>
                <Link href="/blog" passHref>
                  <Ref
                    lf
                    bold
                    pointer
                    color={theme.gray8}
                    hvrColor={theme.blackAlpha6}
                  >
                    Blog
                  </Ref>
                </Link>
              </Flex>
            </Flex>
            <Flex aiCenter>
              <Text bold lf color={theme.gray8}>
                Jimmy McBride
              </Text>
              <Box w="2rem" />
              <Box sqr="4rem" circle m="0 2rem 0 0">
                <img src="/jimicon.png" alt="me" />
              </Box>
            </Flex>
          </Flex>
          <Box w="98%" h="1px" bg={theme.gray7} shade />
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
