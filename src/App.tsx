import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ViewBooksPage from "./pages/ViewBooksPage";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";

const App = () => {
  return (
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/books"} element={<ViewBooksPage />}></Route>
        <Route path={"/addBook"} element={<AddBook />}></Route>
        <Route path={"/editBook/:id"} element={<EditBook />}></Route>
      </Routes>
  );
};

export default App;
