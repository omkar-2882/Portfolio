import React, { useState } from 'react'
import "./portfolio2.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Project from './Project';

const items = [
    {
        id: 1,
        title: "Kit Kart: Ecommerce Web App With Ether Payments",
        img: "/ecommerce.png",
        desc: "Ecommerce App for clothing store where users can surf various products and can also buy products via card or ethereum payment",
        github: "https://github.com/omkar-2882/MERN-Stack-Ecommerce-App",
        demo: "https://kit-kart.vercel.app/",
    },
    {
        id: 2,
        title: "Oflix: Movie Catalogue",
        img: "/oflix.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        github: "https://github.com/omkar-2882/Oflix",
        demo: "https://oflix-phi.vercel.app/",
    },
    {
        id: 3,
        title: "SmartNotebook: Notes App",
        img: "/notebook.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        github: "https://github.com/omkar-2882/smart-notebook",
        demo: "https://smart-notebook-backend.vercel.app/",
    },
    {
        id: 4,
        title: "Quizify: Quiz App",
        img: "/quizapp.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        github: "https://github.com/omkar-2882/Quizify",
        demo: "https://quizify-pi.vercel.app/",
    },
    {
        id: 5,
        title: "News Upon: News App",
        img: "/newsapp.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        github: "https://github.com/omkar-2882/News-App",
        demo: "https://news-app-gray-nine.vercel.app/",
    },
    {
        id: 5,
        title: "WriteIt: Text Converter",
        img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        github: "",
        demo: "",
    },
];


const Portfolio2 = () => {
    const directionX = "left"
    const directionY = "right"

    return (
        <>
            <div className='project-section'>
                <h1>Projects</h1>
                <div className='project-row'>
                    <Project direction={directionX} item={items[0]} />
                    <Project direction={directionY} item={items[1]} />
                </div>
                <div className='project-row'>
                    <Project direction={directionX} item={items[2]} />
                    <Project direction={directionY} item={items[3]} />
                </div>
                <div className='project-row'>
                    <Project direction={directionX} item={items[4]} />
                    {/* <Project direction={directionY} item={items[3]} /> */}
                </div>
            </div>
        </>
    )
}

export default Portfolio2