import Head from "next/head";
import {
  Wrapper,
  NavBar,
  Box,
  Flex,
  Text,
  Cabinet,
  useCabinet,
  theme,
} from "sriracha-ui";
import NavLinks from "./NavLinks";
import Menu from "@material-ui/icons/MenuRounded";

const navHeight = "5rem";

export default function Layout({
  children,
  title = "This is the default title",
}) {
  const { isCabinet, toggleCabinet } = useCabinet();
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
            <Box
              className="nav-cabinet-menu"
              m="0 0 0 2rem"
              pointer
              onClick={toggleCabinet}
            >
              <Menu style={{ fontSize: "3.8rem" }} />
            </Box>
            <Box className="nav-link-list">
              <Flex m="0 0 0 2rem">
                <NavLinks />
              </Flex>
            </Box>
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
      <Cabinet active={isCabinet} toggle={toggleCabinet}>
        <Flex drape h="15rem" jcEvenly>
          <NavLinks />
        </Flex>
      </Cabinet>
      <Flex drape stretch>
        <Box h={navHeight} />
        <Box />
        {children}
      </Flex>
    </Wrapper>
  );
}
