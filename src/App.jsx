import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './app.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Cursor from './components/cursor/Cursor'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/home/Home'
import About from '../src/pages/about/About'
import Projects from './pages/projects/Projects'
import Blogs from './pages/blogs/Blogs'
import NoPage from './pages/nopage/NoPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <div>
    //   <Cursor />
    //   <section id='Homepage'>
    //     <Navbar />
    //     <Hero />
    //   </section>
    // </div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
