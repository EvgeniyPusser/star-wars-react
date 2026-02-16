import './App.css'
import Headers from './components/Headers'
import Footer from './components/Footer'

import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import StarWars from './pages/StarWars'
import Contact from './pages/Contact'

function App() {
    return (
        <>
            <Headers />

            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/starwars" element={<StarWars />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>


        </>
    )
}


export default App



