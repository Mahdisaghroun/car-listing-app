import { motion } from "framer-motion";
import React from "react";

export default function LoginAlertComment(props) {

    const handleSubmit=()=>{
        localStorage.setItem('User','Connected')
    }
  return (
    <motion.div
      className="login-back"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.95 }}
    >
      <motion.h4>Plesae log into your account to see comments ! </motion.h4>
      <motion.p>
        Est enim elit incididunt commodo tempor veniam excepteur consectetur
        velit aliquip consectetur deserunt eu aliqua. Esse Lorem id nostrud elit
        ex consectetur. Veniam minim esse minim dolore mollit. Cupidatat aute et
        ex magna anim esse quis amet laboris cupidatat cupidatat est.
      </motion.p>
      <motion.div>
        <form onSubmit={handleSubmit}>
       
          <input placeholder="Email" ></input><br/>
     
  
          <input placeholder="Password"></input><br/>
   
          <button className="btn" type="submit">Log in</button>
        </form>
      </motion.div>
    </motion.div>
  );
}
