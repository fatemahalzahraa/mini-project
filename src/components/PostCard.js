import React from "react";

const PostCard = ({ postImage, title, description, numberOfLikes }) => {
  return (
    <div
      style={{
        border: "1px black solid",
        width: "200px",
        minHeight: "150px",
        borderRadius: "1px",
        padding: "20px",
        backgroundColor: "#ade8f4",
      }}
    >
      <div>
        <img
          src={postImage}
          style={{
            width: "25vh",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <h3>{numberOfLikes}</h3>
        <button
          style={{
            backgroundColor: "#caf0f8",
            borderRadius: "2px",
            fontFamily: "serif",
          }}
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default PostCard;
