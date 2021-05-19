import Nav from './components/nav'
import './App.scss';
import Safety from './components/safety';
import Hero from './components/hero';
import About from './components/about';
import Price from './components/prices';
import Booking from './components/booking';
import Footer from  './components/footer';

function App() {
  return (
    <div className="App">
    <Nav />
    <Safety />
    <Hero />
    <About />
    <Price />
    <Booking />
    <Footer />
    </div>
  );
}

export default App;
