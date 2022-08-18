import './App.scss'
import Home from './components/Home'
import { Routes, Route, Outlet } from 'react-router-dom'
import About from './components/About'
import Sidebar from './components/Sidebar'
import Contact from './components/Contact'
import Showcase from './components/Showcase'


function App() {
  return (
    <>
     <div className="App">
        <Sidebar />
        <div className="page">
            <span className="tags top-tags-html">&lt;html&gt;</span>
            <br />
            <span className="tags top-tags">&lt;body&gt;</span>

            <Outlet />

            <span className="tags bottom-tags">
                &lt;/body&gt;
                <br />
                <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>

        </div>

        </div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="portfolio" element={<Showcase />} />
  </Routes>
  </>
  )
}

export default App