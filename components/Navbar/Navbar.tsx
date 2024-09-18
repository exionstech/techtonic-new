"use client"
import { Box, Center, Divider, Flex, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import data from  "@/data/navdata"
import { Link } from "@/components/utility/Link";
import Socials from "@/components/utility/Socials";
import logo from "/public/logo.png";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const homepage = pathname === "/";
  return (

    <Box
      display={homepage ? "block" : "none"}
      backdropFilter="auto"
      backdropContrast="85%"
      backdropBlur="20px"
      position="fixed"
      zIndex="10"
      width="full"
    >
      <Box maxW="8xl" mx="auto" px="4">
        <Flex
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
          py="3"
        >
          <Flex flex="1" alignItems="center">
            <Link href="/">
              <Flex alignItems="center" flex={1}>
                <Image
                  src={logo}
                  alt="TechTonic Community"
                  height={70}
                  width={70}
                  priority
                />
                <Heading
                  ml="2"
                  fontSize="md"
                  color="#d3c7eb"
                  display={{ base: "none", md: "block" }}
                >
                  TechTonic Community
                </Heading>
              </Flex>
            </Link>
          </Flex>
          <Box
            display={{ base: "none", lg: "flex" }}
            flex="1"
            justifyContent="end"
            alignItems="center"
          >
            <Flex>
              <Stack listStyleType="none" direction="row" spacing="6">
                {data.map((data) => (
                  <Box key={data.path}>
                    <Link href={data.path} target={data.target}>
                      {data.title}
                    </Link>
                  </Box>
                ))}
              </Stack>
            </Flex>
            <Center height="6" pl="4">
              <Divider orientation="vertical" borderColor="white" />
            </Center>
            <Socials />
          </Box>
          <Box
            display={{ base: "flex", lg: "none" }}
            flex="1"
            justifyContent="end"
          >
            <MobileNav/>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
