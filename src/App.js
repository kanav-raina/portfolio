//date 20dec 2020

import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from './components/Main/Main';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skill from './components/skills/Skill';
import ContactUs from './components/Contact/ContactUs';
import { Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

// yarn add aos@next
AOS.init({
  duration:3000,
  delay: 200   //mili second
});


function App() {
  return (
    <div>
      <Main />
      <About />
      <Projects />
      <Skill />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
/*
 
      
      
      
     
      <Route exact path='/blog' />

*/