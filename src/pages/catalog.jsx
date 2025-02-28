import './catalog.css';
import Product from '../components/product';
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';





const categories = ["Main Deck Monster","Extra Deck Monster","Spell","Trap"]

function Catalog(){
    const[allProducts, setAllProducts] = useState([]);


    async function loadProducts(){
        const data = await DataService.getProducts();
        setAllProducts(data);
    };


    // use effect is executed when the component loads (function expects what to do, then after the comma is when to do it)
    useEffect(
        function(){
            loadProducts();
    }, []);

    return (
        <div className="catalog page">
            <h1>Check out our Trade Binder!</h1>

            <div className="filters">
                {categories.map(cate => <button className='btn btn-sm btn-warning catebtn'>{cate}</button>)}
            </div>

            {allProducts.map(prod => <Product key={prod._id} data= {prod}></Product>)}
        </div>
    );
}

export default Catalog;