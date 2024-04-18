import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Book {
  id: string;
  title: string;
  author: string;
  bookContent: string;
}

export const BookContext = createContext<{
  books: Book[];
  addBook: (book: Book) => void;
  editBook: (book: Book, id: string) => void;
  deleteBook: (id: string) => void;
  // book: Book | null;
}>({
  books: [],
  addBook: () => {},
  editBook: () => {},
  deleteBook: () => {},
  // book: null,
});

export const useBooks = () => {
  return useContext(BookContext);
};

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);
  // const [book, setBook] = useState<Book | null>(null);
  const HOST = "https://book-store-api-za00.onrender.com";

  useEffect(() => {
    fetch(HOST + "/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addBook = (book: Book) => {
    fetch(HOST + "/add-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Assuming the response contains the updated list of books
        setBooks(data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editBook = (book: Book, id: string) => {
    fetch(`${HOST}/update-book/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks((prevBooks) => {
          const updatedBooks = prevBooks.map((b) =>
            b.id === id ? { ...b, ...book } : b
          );
          return updatedBooks;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBook = (id: string) => {
    fetch(`${HOST}/delete-book/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BookContext.Provider value={{ books, addBook, editBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
