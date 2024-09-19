"use client"
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import OpportunityCard from "../Cards/OpportunityCard";
import Container from "@/components/utility/Container"
import { Link } from "@/components/utility/Link";
import { usePathname } from "next/navigation";

const Opportunity = () => {
  const pathname = usePathname();
  const homepage = pathname === "/";
  return (
    <Box
    display={homepage ? "block" : "none"}
     py="10">
      <Container
        subtitle="Latest Opportunities"
        title="Align with your skill"
        text="All the latest opportunities are here, you can visit to Opportunities section for the All opportunities."
      />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing="5"
        maxWidth="8xl"
        pt="5"
        px="5"
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <OpportunityCard key={index} />
        ))}
      </SimpleGrid>
      <Text textAlign="center" pt="10">
        <Button
          variant="outline"
          colorScheme="gray"
          color="white"
          _hover={{ colorScheme: "black" }}
        >
          <Link href="/dashboard">Show All</Link>
        </Button>
      </Text>
    </Box>
  );
};

export default Opportunity;
