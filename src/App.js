import React,{useContext} from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/Productlist/ProductList';
import Toggle from './components/toggle/Toggle';
import {ThemeContext} from './context'


function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div style={{backgroundColor:darkMode ? "#222" : 'white',color:darkMode && 'white'}}>
    
    <Navbar/>
    <Toggle  />
    <HeroSection />
    <About />
    <ProductList/>
    <Contact/>
    
    </div>
  );
}

export default App;
