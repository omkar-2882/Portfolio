import React, { useState } from 'react'
import "./portfolio2.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Project = (props) => {
    const { item, direction } = props;
    // console.log(item.title)
    // console.log(direction)
    const [overlay, setoverlay] = useState(false)
    let xDir = "0vw";

    if (direction == "left") {
        xDir = "-40vw";
    }
    else {
        xDir = "+40vw";
    }

    const projectVariants = {
        movex: {
            opacity: 1,
            x: "0vw",
            transition: {
                type: "spring",
                stiffness: 30,
                // stagerChildren: 1,
                duration: .5,
                delay: .2,
                bounce: .15,
            }
        },

    }

    const variants = {
        movex: {
            y: "0%",
            transition: {
                ease: "easeOut",
                duration: .4,
            }
        },
        initial: {
            opacity: .8,
            y: "-100%",
            transition: {
                ease: "easeOut",
                duration: .4,
            }
        }
    }


    return (
        <motion.div
            className='project'
            onMouseEnter={() => setoverlay(true)}
            onMouseLeave={() => setoverlay(false)}
            variants={projectVariants}
            // transition={{ ease: "linear" }}
            initial={{
                x: xDir,
                opacity: 0
            }}
            whileInView={"movex"}
            style={{
                backgroundImage: `url(${item.img})`,
            }}
        >
            <motion.div
                className='overlay'
                variants={variants}
                initial={"initial"}
                animate={overlay ? "movex" : "initial"}
            >
                <h3>{item.title}</h3>
                <div className='buttons'>
                    <a href={item.github} target='_blank'>
                        <button className="btn">Github</button>
                    </a>
                    <a href={item.demo} target='_blank'>
                        <button className="btn">Demo</button>
                    </a>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Project