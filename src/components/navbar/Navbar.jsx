import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {

  const links = {
    github: "https://github.com/omkar-2882",
    leetcode: "https://leetcode.com/omkar_2882/",
    linkedIn: "https://www.linkedin.com/in/omkar-gawde-217559255/",
    gmail: "omkar.gawde2002@gmail.com",
  }

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        {/* <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Omkar Gawde
        </motion.h1> */}
        <div className="nav-items">
          <a href="#Homepage">Home</a>
          <a href="#About">About</a>
          <a href="#Portfolio">Portfolio</a>
          <a href="#Contact">Contact me</a> 
        </div>
        <div className="social">
          <a href={links.github} target="_blank">
            <i class="fa-brands fa-github" alt="github"></i>
          </a>
          <a href={links.leetcode} alt="leetcode" target="_blank">
            <img src="/leetcode.svg" />
          </a>
          <a id="linkedInIcon" href={links.linkedIn} alt="linkedIn" target="_blank">
          <img src="/linkedin.svg" />
          </a>
          <a href={"mailto:" + links.gmail} alt="gmail" target="_blank">
            <img src="/gmail.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
