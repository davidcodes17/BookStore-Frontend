import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={10} ml={300}>
      <Heading>Welcome to Book Store</Heading>
      <Text width={700} fontSize={12}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam debitis
        ipsam nesciunt qui dolorem maiores libero exercitationem delectus unde,
        laborum voluptatem assumenda cum molestias, placeat aspernatur.
        Blanditiis ipsam ipsum cupiditate!
      </Text>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Image src="/mock.svg" width={500} />
        <Image src="/hand.svg" width={500} />
      </Flex>
    </Box>
  );
};

export default Dashboard;
