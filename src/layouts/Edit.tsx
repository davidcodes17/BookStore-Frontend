import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  useToast,
  FormErrorMessage,
  Textarea,
  Flex,
  Button,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useBooks } from "../contexts/bookContext";
import { Back, Trash } from "iconsax-react";
import { Link } from "react-router-dom";

interface Book {
  id: string;
  title: string;
  author: string;
  bookContent: string;
}

const Edit = ({ id }: { id: any }) => {
  const toast = useToast();
  const [book, setBook] = useState<Book>({
    id: "",
    title: "",
    author: "",
    bookContent: "",
  });
  const editBook = useBooks();
  const HOST = "https://book-store-api-za00.onrender.com";

  useEffect(() => {
    fetch(HOST + "/book/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBook(data.response);
      });
  }, []);

  return (
    <Box p={20} color={"#000"} ml={300}>
      <Heading>Edit Book 📕</Heading>

      <Box width={500} mt={10}>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            value={book.title}
            onChange={(e) => {
              setBook({ ...book, title: e.target.value });
            }}
          />
          <FormErrorMessage>Hello Error</FormErrorMessage>
        </FormControl>
        <FormControl isRequired my={5}>
          <FormLabel>Author</FormLabel>
          <Input
            value={book.author}
            onChange={(e) => {
              setBook({ ...book, author: e.target.value });
            }}
          />
          <FormErrorMessage>Hello Error</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea
            value={book.bookContent}
            onChange={(e) => {
              setBook({ ...book, bookContent: e.target.value });
            }}
          />
          <FormErrorMessage>Hello Error</FormErrorMessage>
        </FormControl>
        <Flex gap={10} mt={5}>
          <Button
            width={"100%"}
            py={7}
            as={Link}
            to={"/books"}
            borderRadius={10}
            leftIcon={<Back size={30} />}
          >
            Back
          </Button>
          <Button
            width={"100%"}
            py={7}
            as={Link}
            to={"/books"}
            leftIcon={<Trash variant="Bold" />}
            onClick={() => {
              editBook.deleteBook(id);
              toast({
                title: "Book Deleted Successfully.",
                description: "We've deleted your book",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
            }}
            borderRadius={10}
          >
            Delete
          </Button>
          <Button
            width={"100%"}
            py={7}
            onClick={() => {
              editBook.editBook(book, id);
              toast({
                title: "Book Updated Successfully.",
                description: "We've updated your book",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            }}
            borderRadius={10}
          >
            Save Book
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Edit;
