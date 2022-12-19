import './App.css';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  return (
    <div>  
      <Router>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>   
    </div>
  );
}

export default App;
