// import "./App.css";
import PostCard from "./components/PostCard";
import posts from "./components/PostList";

function App() {
  const PostList = posts.map((post) => {
    return (
      <PostCard
        postImage={post.image}
        title={post.title}
        description={post.description}
        numberOfLikes={post.likes}
      />
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      {PostList}
    </div>
  );
}

export default App;
