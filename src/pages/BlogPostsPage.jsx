import localPosts from "../data/posts";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BlogPostsPage() {
  const [posts, setPosts] = useState(localPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((postsData) => {
        return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((usersData) => {
            const apiPosts = postsData.slice(0, 200).map((post) => {
              const user = usersData.find((uName) => uName.id === post.userId);

              return {
                ...post,
                author: user ? user.username : "Anonymous User",
                date: "2026-04-02",
              };
            });

            const combinedPosts = [...localPosts, ...apiPosts];
            setPosts(combinedPosts);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="page">
        <p>Loading posts...</p>
      </main>
    );
  }

  return (
    <main className="page">
      <h2>Blog Posts</h2>

      {posts.map((post) => (
        <div className="post-entry" key={post.id}>
          <h3>{post.title}</h3>
          <p><strong>Author:</strong> {post.author}</p>
          <p><strong>Date:</strong> {post.date}</p>
          <p>{post.body.substring(0, 75)}...</p>

          <Link to={`/post/${post.id}`} className="read-link">
            Read Full Post
          </Link>
        </div>
      ))}
    </main>
  );
}