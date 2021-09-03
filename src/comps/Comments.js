import React, { useEffect, useState } from "react";
import { commentAPI } from "./../axiosGate";
import Comment from "./Comment";

export default function Comments({ postId }) {
  const [comments, setcomments] = useState([]);
  useEffect(() => {
    async function fetchingComments() {
      let comments = await commentAPI.getCommentsByID(1);
      if (comments) {
        setcomments(comments.data);
      }
    }
    fetchingComments()
  }, []);
  return (
    <div>
      {comments.length > 0 ? (
        comments.slice(0, 4).map((el, i) => <Comment {...el} key={i}></Comment>)
      ) : (
        <span>No comments</span>
      )}
    </div>
  );
}
