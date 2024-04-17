import { Avatar, Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import Logo from "../components/Logo";
import { BiData, BiSolidCategory, BiSolidData, BiTransfer, BiWallet } from "react-icons/bi";
import { HiDocumentAdd } from "react-icons/hi";
import { BsCash, BsCashCoin, BsCashStack } from "react-icons/bs";
import { ImEqualizer } from "react-icons/im";
import { MdIncompleteCircle } from "react-icons/md";

const HeaderSideNavLayout = () => {
  return (
    <Box>
      <Box zIndex={99} p={5} display={{lg : "block", md : "block", sm : "none", base : "none"}} pos={"fixed"} pt={10} borderRadius={40} bg={"#fff"} height={"100vh"} width={"90px"}>
        <Flex justifyContent={"center"}>
        <Logo />
        </Flex>
        <IconButton borderRadius={40} bg={"#06C75E"} _hover={{bg : "#06C75E"}} color={"#fff"} mt={5} aria-label="Dashboard" icon={<BiSolidCategory />} /> <br />
        <IconButton borderRadius={40} bg={"#06C75E"} _hover={{bg : "#06C75E"}} color={"#fff"} mt={5} aria-label="Statement" icon={<HiDocumentAdd />} /> <br />
        <IconButton borderRadius={40} bg={"#06C75E"} _hover={{bg : "#06C75E"}} color={"#fff"} mt={5} aria-label="Cash Deposit" icon={<BsCashCoin />} /> <br />
        <IconButton borderRadius={40} bg={"#06C75E"} _hover={{bg : "#06C75E"}} color={"#fff"} mt={5} aria-label="Cash Withdrwal" icon={<BsCashStack />} /> <br />
        <IconButton borderRadius={40} bg={"#06C75E"} _hover={{bg : "#06C75E"}} color={"#fff"} mt={5} aria-label="Transfer" icon={<BiTransfer />} /> <br />
        <IconButton borderRadius={40} bg={"#06C75E"} _hover={{bg : "#06C75E"}} color={"#fff"} mt={5} aria-label="Market Data" icon={<BiSolidData />} /> <br />
        <IconButton borderRadius={40} bg={"#06C75E"} _hover={{bg : "#06C75E"}} color={"#fff"} mt={5} aria-label="Equity Trading" icon={<ImEqualizer />} /> <br />
        <IconButton borderRadius={40} bg={"#06C75E"} _hover={{bg : "#06C75E"}} color={"#fff"} mt={5} aria-label="Mutal Fund" icon={<BiWallet />} /> <br />
        <IconButton borderRadius={40} bg={"#06C75E"} _hover={{bg : "#06C75E"}} color={"#fff"} mt={5} aria-label="Fixed Income" icon={<MdIncompleteCircle />} />
      </Box>
    </Box>
  );
};

export default HeaderSideNavLayout;
