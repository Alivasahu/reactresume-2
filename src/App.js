
import About from './About/About';
import './App.scss';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Home from './Home/Home';
import Iconbar from './Iconbar/Iconbar';
import Portfolio from './Portfolio/Portfolio';
import Sidebar from './Sidebar/Sidebar';
import Skills from './Skills/Skills';
import Specialization from './spacialization/Specialization';

function App() {
  return (
    <div className="App">
     <Sidebar/>
     <section className='main-page'>
      <Home/>
      <About/>
      <Experience/>
      <Specialization/>
    <Skills/>
    <Portfolio/>
    <Contact/>
   
     </section>
     <Iconbar/>
    </div>
  );
}

export default App;
