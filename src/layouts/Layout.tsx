import { Flex, Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Flex>
        <NavBar />
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
