import logo from './logo.svg';
import './App.css';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
  
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
