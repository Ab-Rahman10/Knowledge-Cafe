import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({ handleAddToBookmarks, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          handleAddToBookmarks={handleAddToBookmarks}
          handleReadingTime={handleReadingTime}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func,
  handleReadingTime: PropTypes.func,
};

export default Blogs;
