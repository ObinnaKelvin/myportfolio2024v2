import { AnimatedText } from '../../components/animatedText/animatedText';
import Cursor from '../../components/cursor/Cursor'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import { motion } from "framer-motion"
import * as ImIcons from 'react-icons/im';
import { Helmet, HelmetProvider, HelmetData } from 'react-helmet-async';


const helmetData = new HelmetData({});

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
        <Helmet helmetData={helmetData}>
          <title>Obinna Okere | Home Page</title>
          <meta property="og:description" name='description' content='Obinna Okere Kelvin Kobisoft, home page showcasing skills in web development react front end backend developer ui ux '/>
          <meta property="og:description" content='Obinna Okere Kelvin Kobisoft, home page showcasing skills in web development react front end backend developer ui ux ' />
          {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
        </Helmet>
        <Cursor />
        <Navbar />
      <section className='hero-wrapper'>

        <motion.div variants={sliderVariants} animate="animate" initial="initial" className="slidingTextContainer">
          Web UI/UX Front-End Back-End API Database Engineer 
        </motion.div>
        <div className="hero-left">
            <img src='./devbgSmall.png' />
        </div>
        <div className="hero-right">
            <div className="textHolder">
              <AnimatedText text="Turning Ideas Into Reality With Code And Design." className="caption" />
              {/* <div className="caption">
                Turning Ideas Into Reality With Code And Design. 
              </div> */}
              <div className="caption-details">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </div>
            </div>
            <div className="action-buttons">
              <div className="button-one">
                  Resume <ImIcons.ImDownload style={{width: '20px',height: '20px'}} className='actionIcon'/>
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