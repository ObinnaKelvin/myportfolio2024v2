import React from 'react'
import { motion } from "framer-motion"
import "./animatedText.scss"

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            // delay: 0.5
            duration: 1
        }
    }
}

export const AnimatedText = ({text, className=""}) => {
    return (
        // <div className='animatedtext-container'>
            <motion.div
            className={`${className}`}
            variants={quote}
            initial="initial"
            animate="animate"
            >

            {
                text.split(" ").map((word, index) => 
                    <motion.span key={word+'-'+index}
                    variants={singleWord}
                    >
                        {word}&nbsp; 
                    </motion.span>
                )
            }

            </motion.div>
        // </div>
    )
}

// function animatedText() {
//   return (
//     <div>animatedText</div>
//   )
// }

// export default animatedText