import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// interface BookProps{
//   id: string;
//   title: string;
//   author: string;
//   bookContent: string;
// }

const Book = ({
  id,
  author,
  title,
}: {
  id: string;
  title: string;
  author: string;
  bookContent: string;
}) => {
  return (
    <Box as={Link} to={"/editBook/" + id}>
      <Box p={7} border={"1px solid #ddd"} width={"500px"} borderRadius={10}>
        <Flex gap={5}>
          <Text fontWeight={700}>Book Id : </Text>
          <Text> {id}</Text>
        </Flex>
        <Flex gap={5} py={2}>
          <Text fontWeight={700}>Author : </Text>
          <Text> {author}</Text>
        </Flex>
        <Flex gap={5}>
          <Text fontWeight={700}>Book Title : </Text>
          <Text> {title}</Text>
        </Flex>
        {/* <Text>{bookContent}</Text> */}
      </Box>
    </Box>
  );
};

export default Book;
