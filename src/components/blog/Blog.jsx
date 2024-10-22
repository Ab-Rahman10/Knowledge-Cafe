import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div className="mb-9">
      <div className="w-full">
        <img
          className="object-cover object-center"
          src={cover_img}
          alt="cover image"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6 pt-8 pb-4">
          <img className="w-14" src={author_img} alt="author image" />
          <div>
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span> {reading_time} min read</span>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <div className="mb-10 space-x-4">
        {hashtags.map((hashtag) => (
          <>
            <span>
              <a href="#">{hashtag}</a>
            </span>
          </>
        ))}
      </div>
      <a className="text-blue-600 underline" href="#">
        Mark as read
      </a>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
