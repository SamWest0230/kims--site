import Nav from './components/nav'
import './App.scss';
import Safety from './components/safety';
import Hero from './components/hero';
import About from './components/about';
import Price from './components/prices';
import Booking from './components/booking';
import Footer from  './components/footer';
import Testimonials from './components/testimonials';

function App() {
  return (
    <div className="App">
      
    
    <Nav />
    <Safety />
  
    <div className='App__div'>
    <Hero />
    </div>

    <div className='App__div'>
    <About />
    </div>

    <div  className='App__div'>
      <Testimonials />
    </div>

    <div className='App__div'>
    <Price />
    </div>

    <div className='App__div'>
    <Booking />
    </div>

    <div className='App__div'>
    <Footer />
    </div>

    </div>
  );
}

export default App;
