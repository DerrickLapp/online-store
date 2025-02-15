import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import About from './pages/about';
import Admin from './pages/admin';
import Home from './pages/home';
import Cart from './pages/cart';
import Contact from './pages/contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

import GlobalProvider from './stateManagement/globalProvider';


function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/catalog" element={<Catalog></Catalog>}></Route>
            <Route path="/admin" element={<Admin></Admin>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes> 

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

