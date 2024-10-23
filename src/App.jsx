import { useState } from "react";
import Blogs from "./components/blogs/blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/header";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-8 w-11/12 md:w-9/12 mx-auto pt-6 md:pt-10 ">
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}
