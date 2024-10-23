import PropTypes from "prop-types";
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmarks }) => {
  const {
    title,
    cover_img,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="border-b-2 mb-4 md:mb-10">
      <div className="w-full h-[250px] md:h-[500px]">
        <img
          className="w-full h-full object-cover object-center rounded-md"
          src={cover_img}
          alt="cover image"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-6 py-1 md:py-3 ">
          <img className="w-10 md:w-14" src={author_img} alt="author image" />
          <div>
            <h3 className="text-lg md:text-2xl font-bold">{author}</h3>
            <p className="to-gray-500 text-sm">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <span className="to-gray-500 text-sm"> {reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="text-2xl"
          >
            <IoBookmarksOutline></IoBookmarksOutline>
          </button>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">{title}</h1>
      {hashtags.map((hashtag, idx) => (
        <span key={idx} className="to-gray-500 text-sm mr-2 md:mr-4">
          <a href="#">{hashtag}</a>
        </span>
      ))}
      <div className="my-4 md:my-10">
        <a className="text-blue-600 underline" href="#">
          Mark as read
        </a>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
};
export default Blog;
