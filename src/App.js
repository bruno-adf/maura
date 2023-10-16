import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Info from './pages/Info.jsx'
import { useEffect } from 'react';
import './reset.css'
import './global.css'
import './animations/Animate.jsx'
import './animations/Animations.css'
import Swup from 'swup';

function App() {

  const swup = new Swup();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/maura/' element={<Home/>}/>
        <Route path='/maura/contato' element={<Contact/>}/>
        <Route path='/maura/info' element={<Info/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
