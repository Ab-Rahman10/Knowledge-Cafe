import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <>
      <div className="bg-gray-100 p-2 rounded-sm">
        <h2>{title}</h2>
      </div>
    </>
  );
};

Bookmark.propTypes = {};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
