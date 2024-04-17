import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { SafeHome } from "iconsax-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box>
      <Flex mt={10} justifyContent={"center"} textAlign={"center"}>
        <Box>
          <Heading fontSize={{ lg: 300, md: 300, sm: 200, base: 100 }}>
            4<span style={{ color: "#06C75E" }}>0</span>4
          </Heading>
          <Text fontSize={{ lg: 40, md: 40, sm: "30px", base: "30px" }}>
            Page not Found!
          </Text>
          <Button
            leftIcon={<SafeHome variant="Bold" />}
            bg={"#06C75E"}
            p={{ lg: 7, md: 7, sm: 6, base: 6 }}
            borderRadius={20}
            mt={5}
            as={Link}
            to={"/"}
            width={{lg : 250, md : 250, sm : 200, base : 200}}
            _hover={{ bg: "#06C75E" }}
          >
            Back to Safety
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default NotFound;
