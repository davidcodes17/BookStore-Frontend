import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { ArrowCircleLeft, ArrowCircleLeft2, HambergerMenu } from "iconsax-react";
import MobileSideBar from "./MobileSideBar";
import { useState } from "react";

const MobileHeader = () => {
  const [display, setDisplay] = useState("none");
  const onClick = () => {
    setDisplay("none");
  };
  return (
    <Box>
      <Flex
        display={{ lg: "none", md: "none", sm: "flex", base: "flex" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={5}
        bg={"#fff"}
        pos={"fixed"}
        top={0}
        left={0}
        right={0}
      >
        <Image src="/logo.png" width={"20%"} borderRadius={40} />
        <IconButton
          onClick={() => {
            setDisplay("block");
          }}
          aria-label="Hamburger"
          icon={<ArrowCircleLeft variant="Bold" color="#fff" />}
          bg={"#06C75E"}
        />
      </Flex>
      <MobileSideBar display={display} onClick={onClick} />
    </Box>
  );
};

export default MobileHeader;
