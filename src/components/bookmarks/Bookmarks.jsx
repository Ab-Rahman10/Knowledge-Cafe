import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <>
      <div className="md:w-1/3 border-2 rounded-md p-4 font-semibold space-y-2">
        <div className="bg-purple-100 p-3 rounded-md">
          <h2 className="text-xl font-bold text-purple-600">
            Spent time on read: {readingTime} min
          </h2>
          <h3>Bookmarked blogs {bookmarks.length}</h3>
        </div>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark
            readingTime={readingTime}
            key={idx}
            bookmark={bookmark}
          ></Bookmark>
        ))}
      </div>
    </>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
