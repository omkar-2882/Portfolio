import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./hero2.scss"
import AnimatedTextCharacter from "./AnimatedTextCharacter";

const Hero2 = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    // const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    // const yPt = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
    };
    const sliderVariants = {
        initial: {
            rotate: -90,
            y: 0,
            x: 0,
        },
        animate: {
            y: "500%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 10,
            },
        },
    };

    return (
        <>
            <div className="hero">
                <div className="wrapper" ref={ref}>
                    <motion.div
                        className="textContainer"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                    // style={{ y: yText }}
                    >
                        <div className="myname">
                            {/* <AnimatedTextCharacter text="Hi I Am" cl="greeting"/> */}
                            {/* <motion.h2 className='name' variants={textVariants}>OMKAR GAWDE</motion.h2> */}
                            <motion.h2 className='greeting' variants={textVariants}>Hello I Am</motion.h2>
                            <AnimatedTextCharacter text="OMKAR GAWDE" cl="name" />

                        </div>
                        <motion.h1 className='skill' variants={textVariants}>Web Developer</motion.h1>
                        <motion.div variants={textVariants} className="buttons">
                            <motion.button variants={textVariants}>
                                <a href="https://drive.google.com/file/d/1hzmKplVrNvBZhjcxxFL01ZiEBQ7nTF_f/view?usp=drive_link" target="_blank">Resume</a>
                            </motion.button>
                            <motion.button variants={textVariants}>
                                <a href="#Contact">Contact Me</a>
                            </motion.button>
                        </motion.div>

                    </motion.div>
                    <motion.div className="imageContainer"
                    // style={{ y: yText }}
                    >
                        {/* <img src="/omkar.jpg" alt="" /> */}
                        {/* <img src="/Programmer.png" alt="" /> */}
                        <img src="/profilePic.jpeg" alt="" />
                    </motion.div>
                </div>
                <motion.div
                    className="slidingTextContainer"
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate"
                >
                    HTML CSS JAVASCRIPT
                </motion.div>
                <motion.img
                    variants={textVariants}
                    animate="scrollButton"
                    src="/scroll.png"
                    alt=""
                    className='scrollButton'
                />
            </div>
        </>
    )
}

export default Hero2