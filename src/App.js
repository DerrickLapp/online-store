import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main-content">
        <h1>
          Hello World from React!
        </h1>
        <Product></Product>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
