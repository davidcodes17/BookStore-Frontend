import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  icon: any;
  name: string;
  path: string;
}

const NavLink = ({ icon, name, path }: NavLinkProps) => {
  return (
    <Box as={Link} to={path}>
      <Box
        color={"#fff"}
        width={200}
        cursor={"pointer"}
        mb={5}
        borderRadius={10}
      >
        <Flex alignItems={"center"} gap={2} p={3}>
          <IconButton
            bg={"none"}
            color={"#fff"}
            size={"sm"}
            aria-label={name}
            icon={icon}
          />
          <Text fontWeight={500}>{name}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavLink;
