
import './App.css';
import AboutUs from './components/AboutUs';
import Discover from './components/Discover';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Discover />
     <Services />
      <AboutUs />
    </div>
  );
}

export default App;
