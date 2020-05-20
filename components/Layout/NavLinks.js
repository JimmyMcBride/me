import React from "react";
import Link from "next/link";
import { Flex, Text, Box, theme } from "sriracha-ui";

export default function NavLinks() {
  return (
    <>
      <Flex aiCenter wrap="true" p="0 1rem" pointer>
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
    </>
  );
}
