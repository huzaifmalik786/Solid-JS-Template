import { Component, lazy } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
// import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
const Home= lazy(()=>import("./pages/Home"))
const App: Component = () => {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
};

export default App;
