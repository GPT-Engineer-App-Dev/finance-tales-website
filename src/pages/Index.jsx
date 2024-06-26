import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="#00456e" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" bg="#f3f2f1" py={12}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={4}>
            Featured Article Headline
          </Heading>
          <Text fontSize="lg" color="gray.700">
            This is a brief description of the featured article. It provides a summary of the main points and entices the reader to click through to read more.
          </Text>
        </Container>
      </Box>

      {/* Grid Layout for Other Articles */}
      <Box as="section" py={12}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box bg="white" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                Article Title 1
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Brief description of the article content goes here.
              </Text>
            </Box>
            <Box bg="white" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                Article Title 2
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Brief description of the article content goes here.
              </Text>
            </Box>
            <Box bg="white" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                Article Title 3
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Brief description of the article content goes here.
              </Text>
            </Box>
            <Box bg="white" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                Article Title 4
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Brief description of the article content goes here.
              </Text>
            </Box>
            <Box bg="white" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                Article Title 5
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Brief description of the article content goes here.
              </Text>
            </Box>
            <Box bg="white" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                Article Title 6
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Brief description of the article content goes here.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="#00456e" color="white" py={6}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={8}>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;