import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Language from "./pages/Language"
import Culture from "./pages/Culture"
import Cuisine from "./pages/Cuisine"
import About from "./pages/About"

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Navbar />
        <div className="main-content" style={{ flex: 1, padding: "0" }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/language" element={<Language />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
