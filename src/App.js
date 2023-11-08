import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import card from './components/card';
import Card from './components/card';

function App() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Card />
    </div>
  );
}

export default App;
