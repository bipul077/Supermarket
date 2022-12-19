import './App.css';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  return (
    <div className='maincontent'>  
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/products" element={<Products/>}/>
        </Routes>
        <Footer/>
      </Router>   
    </div>
  );
}

export default App;
