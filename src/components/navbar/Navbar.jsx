import React from 'react'
import './navbar.scss'
import { motion } from "framer-motion";
import Sidebar from '../siderbar/Sidebar';
import { BrowserRouter, Link, Route, Navigate, Routes } from "react-router-dom";
import Blogs from '../../pages/blogs/Blogs';

const Navbar = () => {

    // const router = Link()
    // console.log(router)
  return (
    <div className='navbar'>
        <Sidebar />
        <div className="wrapper">
            {/* <motion.span 
                initial={{opacity: 0, scale: 0.5}} 
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
            >
                KobiSoft
            </motion.span> */}
            <div className="navLinks">
                <Link to="/" className='link active'>Home</Link>
                <Link to="/about"className='link'>About</Link>
                <Link to="/projects"className='link'>Projects</Link>
                <Link to="/blogs"className='link'>Blogs</Link>
            </div>
            <div className="social">
                {/* <a href="#"><img src='/facebook.png'/></a>
                <a href="#"><img src='/instagram.png'/></a>
                <a href="#"><img src='/youtube.png'/></a>
                <a href="#"><img src='/facebook.png'/></a>
                <a href="#"><img src='/facebook.png'/></a> */}
            </div>
            <div className="mode">
                
            </div>
        </div>
    </div>
  )
}

export default Navbar