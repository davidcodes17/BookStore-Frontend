import { Box, Heading } from "@chakra-ui/react";
// import SearchBar from "../components/SearchBar";
import BookCards from "../components/BookCards";

const ViewBooks = () => {
  return (
    <Box p={20} ml={300} width={"100%"}>
      <Heading>View Books</Heading>
      {/* <SearchBar /> */}
      <BookCards />
    </Box>
  );
};

export default ViewBooks;
