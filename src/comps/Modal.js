import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Comment from "./Comment";
import LoginAlertComment from "./LoginAlert";
import Comments from "./Comments";

const Modal = ({ setSelectedImg, selectedImg,selectedID }) => {
  const [Islogged, setIslogged] = useState(false);
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  useEffect(() => {
    async function fetchUser() {
      let user = await localStorage.getItem("User");
      if (user) {
        setIslogged(true);
      }
    }
    fetchUser()
  }, []);
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ display: "flex", flexDirection: "row" }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        style={{ margin: 30, borderRadius: 20 }}
      />
      <motion.div style={{ margin: 30 }}>
        <motion.h1 style={{ color: "#fff", textAlign: "left" }}>
          Comments
        </motion.h1>
      {!Islogged && <LoginAlertComment></LoginAlertComment>}
      {Islogged&&<Comments postId={selectedID}></Comments>}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
