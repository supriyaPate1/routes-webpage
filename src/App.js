import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import Gallery from './Component/Gallery';
import Feedback from './Component/Feedback';
import Event from './Component/Event';
import Contact from './Component/Contact';
import Navbar from './Navbar';
function App() {
  return (
   <>
   
    <Routes>
      <Route  element={<Navbar/>}>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/event" element={<Event />} />
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/contact" element={<Contact />} />
      </Route>
    
    </Routes>
    {/* <Form/> */}
    </>
  );
}
export default App;

