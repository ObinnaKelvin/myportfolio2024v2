import React from 'react'
import './navbar.scss'
import { motion } from "framer-motion";
import Sidebar from '../siderbar/Sidebar';
import { Link } from "react-router-dom";

const Navbar = () => {
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
                
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/blogs">Blogs</Link>
            </div>
            <div className="social">
                {/* <a href="#"><img src='/facebook.png'/></a>
                <a href="#"><img src='/instagram.png'/></a>
                <a href="#"><img src='/youtube.png'/></a>
                <a href="#"><img src='/facebook.png'/></a>
                <a href="#"><img src='/facebook.png'/></a> */}
            </div>
            <div className="mode"></div>
        </div>
    </div>
  )
}

export default Navbar