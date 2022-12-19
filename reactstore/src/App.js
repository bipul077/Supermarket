import './App.css';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="maincontent">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
