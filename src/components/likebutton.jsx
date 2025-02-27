import PropTypes from "prop-types";

const LikeButton = ({ isLiked, onClick }) => {
  return (
    <button
      className={`like-button ${isLiked ? "liked" : ""}`}
      onClick={onClick}
    >
      {isLiked ? "❤️" : "🤍"}
    </button>
  );
};

LikeButton.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LikeButton;
