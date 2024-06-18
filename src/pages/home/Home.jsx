import Cursor from '../../components/cursor/Cursor'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import { motion } from "framer-motion"
import * as ImIcons from 'react-icons/im';



const sliderVariants = {
  initial: {
    x: 0
  },
  animate: {
    x: "-320%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20
    }
  }
};

function Home() {
  return (
    <div className="home">
        <Cursor />
        <Navbar />
      <section className='hero-wrapper'>

        <motion.div variants={sliderVariants} animate="animate" initial="initial" className="slidingTextContainer">
          UI/UX Front-End Back-End API Database Engineer 
        </motion.div>
        <div className="hero-left">
            <img src='./devbgSmall.png' />
        </div>
        <div className="hero-right">
            <div className="textHolder">
              <div className="caption">
                Turning Ideas Into Reality With Code And Design. 
              </div>
              <div className="caption-details">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </div>
            </div>
            <div className="action-buttons">
              <div className="button-one">
                  Download Resume <ImIcons.ImDownload style={{width: '20px',height: '20px'}} className='actionIcon'/>
              </div>
              <div className="button-two">
                  Hire Me
              </div>
            </div>
        </div>
      </section>
      <section id='contact'>

      </section>
    </div>
  )
}

export default Home