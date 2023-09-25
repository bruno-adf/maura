import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Info from './pages/Info.jsx'
import './reset.css'
import './global.css'
import './animations/Animations.css'

function App() {
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
