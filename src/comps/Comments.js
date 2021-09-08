import React, { useEffect, useRef, useState } from "react";
import { commentAPI } from "./../axiosGate";
import Comment from "./Comment";

export default function Comments({ postId }) {
  let i = 0;
  const [comments, setcomments] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    async function fetchingComments() {
      let comments = await commentAPI.getCommentsByID(1);
      if (comments) {
        console.log(comments.data);
        setcomments(comments.data);
      }
    }
    fetchingComments();
  }, []);
  const addComment = () => {
    let com = comments;
    com.push({
      email: "Hayden@althea.biz",

      postId: 1,
      id: i++,
      name: "user",
      body: inputRef.current.value,
    });
    console.log(com);
    setcomments([...com]);
  };
  return (
    <>
      <div className="comments">
        {comments.length > 0 ? (
          comments.map((el, i) => <Comment {...el} key={i}></Comment>)
        ) : (
          <span>No comments</span>
        )}
      </div>
      <input type="text" placeholder="Comment ..." ref={inputRef}></input>
      <button className="btn" onClick={addComment}>
        Add comment
      </button>
    </>
  );
}
