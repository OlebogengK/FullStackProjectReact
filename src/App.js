import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'; 
import Hero from './components/Hero/Hero'; 
import Services from './components/Services/Services';
import Partners from './components/Partners/Partners';
import ContactUs from './components/Contact/ContactUs';
import CaseStudies from './components/CaseStudies/CaseStudies';



function App() {
  return (
    <div className="App">
      <Header /> 
      <Hero />
      <Services />
      <CaseStudies />
      <Partners />
      <ContactUs />
    </div>
  );
}

export default App;
