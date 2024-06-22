import React from 'react'
import './about.scss'
import Cursor from '../../components/cursor/Cursor'
import Navbar from '../../components/navbar/Navbar'
import { Helmet, HelmetProvider, HelmetData } from 'react-helmet-async';
import { AnimatedText } from '../../components/animatedText/animatedText';


const helmetData = new HelmetData({});

function About() {
  return (
    <div className='about-container'>
      <Helmet helmetData={helmetData}>
        <title>Obinna Okere | About Page</title>
        <meta property="og:description" name='description' content='Obinna Okere Kelvin Kobisoft, about page showcasing skills in web development react front end backend developer ui ux '/>
        <meta property="og:description" content='Obinna Okere Kelvin Kobisoft, about page showcasing skills in web development react front end backend developer ui ux ' />
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <Cursor />
      <Navbar />

      <div className="about-wrapper">
        <div className="about-caption">
          <AnimatedText text="Passion Fuels Purpose!" className="caption" />
        </div>
        <div className="about-details">
          <div className="about-details-item">
            <div className="biography-header">
              BIOGRAPHY
            </div>
            <div className="biography-body">
              <p>
                  Hi, I'm Obinna Okere Kelvin (founder of KobiSoft), a web developer and UI/UX designer with a passion for creating beautiful, 
                  functional, and user-centered digital experiences. With over 6 years of experience in the field, 
                  I am always looking for new and innovative ways to bring my clients' visions to life.
              </p>
              <p>
                  I was born in Port Harcourt, Nigeria but spent most of my life in Lagos. Growing up, I had a unique perspective of the world - being Nigerian, and being black. 
                  I learned that with their lives, anyone can tell a unique and beautiful story irrespective of their nationality or culture. 
                  I also learnt that if I must improve then it's important to be open to change and fresh ideas.
                  I found a love for art, design and technology. At a very young age, I became fascinated with the way people think, feel, and create useful things. 
                  When this fascination became an obsession then I knew I had found my passion. 
              </p>
              <p>
                  I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, 
                  enjoyable experiences for users.
              </p>
              <p>
                  Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered 
                  thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>
          </div>
          <div className="about-details-item">
              <div className="phone-frame">
                  <img className='coverImg' src='./pic4.jpg' />
                  <div className="camera"></div>
                  <div className="circle-button"></div>
              </div>
          </div>
          <div className="about-details-item">
                <div className="item">
                  <div className="stat">40+</div>
                  <div className="stat-description">Satisfied Clients</div>
                </div>
                <div className="item">
                  <div className="stat">50+</div>
                  <div className="stat-description">Projects Completed</div>
                </div>
                <div className="item">
                  <div className="stat">6+</div>
                  <div className="stat-description">Years Of Experience</div>
                </div>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default About