import About from "./component/About";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import {BrowserRouter as Router, Route,Routes, } from 'react-router-dom';
import Service from "./component/Service";
import Footer from "./component/Footer";
import Blog from "./component/Blog";
import Portfolio from "./component/Portfolio";
import Portfolio_detail from "./component/Portfolio_detail";
import Single_blog from "./component/Single_blog";
import Contact from "./component/Contact";

function App() {
  return (
    
 <>
 <Router>
<Navbar/>
    <Routes>
    <Route path="/about" element={<About />} />
        <Route element={<Hero/>} path="/" />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio_detail" element={<Portfolio_detail />} />
        <Route path="/single_blog" element={<Single_blog />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
 </Router>
     
    </>
  );
}

export default App;
