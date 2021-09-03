import { motion } from "framer-motion";
import React from "react";

export default function Comment(props) {
  return (
    <motion.div className="comment"  initial={{ y: "-100vh" }}
    animate={{ y: 0 }}
    transition={{ ease: "easeOut", duration: 0.95 }}  >
      <motion.h4>{props.name}</motion.h4>
      <motion.p >
      {props.body}
      </motion.p>
    </motion.div>
  );
}
