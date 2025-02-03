import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Product from './components/product';

function Catalog() {
  return (
    <div className="Catalog">
      <Navbar></Navbar>
      <div className="main-content">
        <h1>
            This page will show the catalog products!
        </h1>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Catalog;
