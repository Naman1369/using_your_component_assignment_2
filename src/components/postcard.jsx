import PropTypes from "prop-types";
import LikeButton from "./likebutton"; 

const PostCard = ({ post, toggleLike }) => {
  return (
    <div className="post-card">
      <img className="profile-pic" src={post.profileImage} alt={post.username} />
      <div className="post-content">
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton isLiked={post.isLiked} onClick={() => toggleLike(post.id)} />
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profileImage: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired,
  }).isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default PostCard;
