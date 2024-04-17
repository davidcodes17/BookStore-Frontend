import { Box, CloseButton, Flex } from "@chakra-ui/react";
import LinkCompo from "./LinkCompo";
import {
  BiSolidCategory,
  BiSolidData,
  BiTransfer,
  BiWallet,
} from "react-icons/bi";
import Logo from "./Logo";
import { HiDocumentAdd } from "react-icons/hi";
import { BsCashCoin, BsCashStack } from "react-icons/bs";
import { ImEqualizer } from "react-icons/im";
import { MdIncompleteCircle } from "react-icons/md";

const MobileSideBar = (props: { display: any, onClick: any }) => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      bg={"#fff"}
      display={{
        lg: "none",
        md: "none",
        sm: props.display,
        base: props.display,
      }}
      zIndex={9999}
      pos={"fixed"}
      top={0}
      left={0}
      p={10}
      right={0}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box width={{ lg: "10%", md: "20%", sm: "10%", base: "20%" }}>
          <Logo />
        </Box>
        <CloseButton onClick={props.onClick} />
      </Flex>
      <Box mt={5}>
        <LinkCompo name={"Dashboard"} icon={<BiSolidCategory />} />
        <LinkCompo name={"Statement"} icon={<HiDocumentAdd />} />
        <LinkCompo name={"Cash Deposit"} icon={<BsCashCoin />} />
        <LinkCompo name={"Cash Withdrwal"} icon={<BsCashStack />} />
        <LinkCompo name={"Transfer"} icon={<BiTransfer />} />
        <LinkCompo name={"Market Data"} icon={<BiSolidData />} />
        <LinkCompo name={"Equity Trading"} icon={<ImEqualizer />} />
        <LinkCompo name={"Mutal Fund"} icon={<BiWallet />} />
        <LinkCompo name={"Fixed Income"} icon={<MdIncompleteCircle />} />
      </Box>
    </Box>
  );
};

export default MobileSideBar;
