
import './App.css';
import Home from './pages/home/home';
import Courses from './pages/courses/courses';
import Pricing from './pages/pricing/pricing';
import Login from './pages/auth/login/login';
import Signup from './pages/auth/signup/signup';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Navbar from './component/home/navbar';

import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />   
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
