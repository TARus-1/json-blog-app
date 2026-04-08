import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import posts from "../data/posts";
import CommentForm from "../components/Posts";

export default function IndividualPostPage() {
  const { id } = useParams();
  const postId = Number(id);

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    if (postId > 100) {
      const localPost = posts.find((p) => p.id === postId);
      setPost(localPost);
      setLoading(false);
    } else {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((data) => {
          setPost({
            ...data,
            author: "JSON Username",
            date: "2026-04-02",
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
          setLoading(false);
        });
    }
  }, [postId]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [postId]);

  if (!post) {
    return (
      <main className="page">
        <h2>Post not found</h2>
      </main>
    );
  }
  if (loading) {
  return (
    <main className="page">
      <p>Loading post...</p>
    </main>
  );
}
  return (
    <main className="page">
      <div className="post-entry">
        <h2>{post.title}</h2>
        <p><strong>Author:</strong> {post.author}</p>
        <p><strong>Date:</strong> {post.date}</p>
        <p>{post.body}</p>

        <CommentForm
          comments={comments}
          setComments={setComments}
          postId={postId}
        />

        <div className="comments-list">
          <h3>Comments</h3>

          {comments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            <ul>
              {comments.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}:</strong> {item.body}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}