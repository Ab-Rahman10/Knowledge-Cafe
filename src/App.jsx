import Blogs from "./components/blogs/blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/header";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="flex w-11/12 mx-auto">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}
