import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const LinkCompo = (props: { icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
  return (
    <Box py={2}>
      <Flex alignItems={"center"} gap={2}>
        <IconButton
          borderRadius={40}
          bg={"#06C75E"}
          _hover={{ bg: "#06C75E" }}
          color={"#fff"}
          aria-label="Dashboard"
          icon={props.icon}
        />{" "}
        <br />
        <Text fontSize={20}>{props.name}</Text>
      </Flex>
    </Box>
  );
};

export default LinkCompo;
