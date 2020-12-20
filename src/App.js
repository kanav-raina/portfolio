import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from './components/Main/Main';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skill from './components/skills/Skill';
import ContactUs from './components/Contact/ContactUs';
// yarn add aos@next
AOS.init({
  duration:3000,
  delay: 1000
});


function App() {
  return (
    <div>
      <Main />
      <About />
      <Projects />
      <Skill />
      <ContactUs />
    </div>
  );
}

export default App;
