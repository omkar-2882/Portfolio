import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursor = {
    x: position.x, 
    y: position.y,
    transition: {
      ease: "linear",
      duration: 0,
      delay: 0,
    }
  }

  return (
    <motion.div
      className="cursor"
      animate={cursor}
    >
      {/* <img src="/cursorpurple.png" alt="" /> */}
    </motion.div>
  );
};

export default Cursor;
