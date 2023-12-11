import React from 'react'
import './about.scss'
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
    const sliderVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                // ease: "easeInOut",
                // repeat: Infinity,
                // repeatType: "mirror",
                delay: .4,
                staggerChilder: 0.04,
                duration: 1,
            },
        },
    };

    return (
        <>
            <div className='container'>
                <div className='about'>
                    <div className="aboutText">
                        <h1>About Me</h1>
                        <motion.p variants={sliderVariants}
                            initial="initial" whileInView={"animate"}>
                            I'm a final year student of Computer Engineering, pursuing a degree with a specialization in web development. Proficient in HTML, CSS, JavaScript, React.js, and Node.js, I have hands-on experience developing responsive web applications. With a focus on enhancing user experiences and optimizing app performance, I am actively seeking opportunities to collaborate on innovative web projects. Explore my work on GitHub and LinkedIn.
                        </motion.p>
                    </div>
                </div>
                <div className='skills'>
                    <h1>Skills</h1>
                    <motion.div
                        variants={sliderVariants}
                        initial="initial"
                        whileInView={"animate"}
                        // animate="animate"
                        className='skill-item'>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-react"></i>
                        <i class="fa-brands fa-sass"></i>
                        <i class="fa-brands fa-node"></i>
                        <img src="/mysql.svg" alt="" />
                        <img src="/MongoDB.svg" alt="" />
                        <img src="/expressjs.svg" alt="" />
                        <img src="/cpp.svg" alt="" />
                        <i class="fa-brands fa-java"></i>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default About