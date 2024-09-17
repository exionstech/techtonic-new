import { Box, Container } from "@chakra-ui/react";

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box bgColor={"gray.800"}>
      
      <Container maxW="8xl" mx="auto" px={{ base: "4", lg: "6" }}>
        <Box pt="8">{children}</Box>
        
      </Container>
    </Box>
  );
};

export default Wrapper;
