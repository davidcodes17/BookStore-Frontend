import { Box, Button, Flex } from "@chakra-ui/react";
import Book from "./Book";
import { useBooks } from "../contexts/bookContext";
import { AddCircle } from "iconsax-react";
import { Link } from "react-router-dom";

interface Book {
  id: string;
  title: string;
  author: string;
  bookContent: string;
}

const BookCards = () => {
  const books = useBooks();
  return (
    <Box pt={10}>
      <Flex justifyContent={"space-between"} flexWrap={"wrap"} gap={10}>
        {books.books.map((book: Book) => (
          <Book
            author={book.author}
            title={book.title}
            bookContent={book.bookContent}
            id={book.id}
            key={book.id}
          />
        ))}
      </Flex>
      <Button
        pos={"fixed"}
        bottom={20}
        right={20}
        as={Link}
        to={"/addBook"}
        bg={"#003263"}
        color={"#fff"}
        borderRadius={10}
        _hover={{ bg: "#003263" }}
        leftIcon={<AddCircle variant="Bold" size={30} />}
        p={6}
      >
        Add Book
      </Button>
    </Box>
  );
};

export default BookCards;
