import "./App.css";
import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Header/Nav";
import Home from "./components/HomeComponent/Home";
import Skill from "./components/Skill/Skill";

function App() {
  return (
    <div className='grid h-screen w-screen grid-cols-12 bg-zinc-100'>
      <Nav className='col-span-2 col-end-2 h-screen w-60 bg-zinc-200 text-xl'></Nav>
      <Home className='col-span-8 col-start-3 row-span-1 mt-24 h-screen'></Home>
      <About className='col-span-8 col-start-4 mt-24 h-screen'>
        About section
      </About>
      <Skill className='col-span-8 col-start-4 mt-24 h-screen'>
        Skill Section
      </Skill>
    </div>
  );
}

export default App;
