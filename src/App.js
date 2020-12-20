import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from './components/Main';
// yarn add aos@next
AOS.init({
  duration:3000,
  delay: 1000
});


function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
