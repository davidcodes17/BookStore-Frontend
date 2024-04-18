import { Box } from "@chakra-ui/react";
import NavLink from "../components/NavLink";
import { Category, People } from "iconsax-react";

const NavBar = () => {
  return (
    <Box pos={"fixed"}>
      <Box bg={"#003263"} px={5} pr={10} py={10} width={"fit-content"} height={"100vh"}>
        <NavLink path="/" icon={<Category variant="Bold" />} name={"Dashboard"} />
        <NavLink path="/books" icon={<People variant="Bold" />} name={"View Books"} />
        {/* <NavLink icon={<Trash variant="Bold" />} name={"Delete Book"} />
        <NavLink icon={<Edit2 variant="Bold" />} name={"Edit Book"} /> */}
      </Box>
    </Box>
  );
};

export default NavBar;
