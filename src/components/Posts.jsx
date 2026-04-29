import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Posts({ comments, setComments, postId}) {
  //const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const { user } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();


    if (!user) {
      return;
    }

    if (/*name.trim() === "" || */comment.trim() === "") {
      return;
    }

    const newComment = {
      id: Date.now(),
      name: user.username,
      body: comment,
    };

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newComment)
    })
      .then((response) => response.json())
      .then((data) => {
        setComments([...comments, data]);
        setName("");
        setComment("");
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
      });
  }
  
    if (!user) {
      return (
        <div >
          <h3>Add a Comment</h3>
          <p>
            You must <Link to="/login">login</Link> before leaving a comment.
          </p>
        </div>
      );
    }



  return (
    <div className="comment-box">
      <h3>Add a Comment</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <textarea
          placeholder="Your comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>

        <button type="submit">Post</button>
      </form>
    </div>
  );
}