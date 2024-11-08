
import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
     <Services />
      <AboutUs />
    </div>
  );
}

export default App;
