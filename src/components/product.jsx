import { useState } from 'react';
import './product.css';
import Quantitypicker from './quantitypicker';

function Product(props){

    const [qpicked, setQPicked] = useState(1);

    function add(){
        console.log("Added to Cart!");
    }


    function handleQuantity(qty){
        console.log("Quantity changed!", qty);
        setQPicked(qty)
    }

    return (
        <div className="product">
            <h4>
                {props.data.title}
            </h4>

            <img src={props.data.image} alt="" />

            <div className="qtyadd">
                <Quantitypicker onChange={handleQuantity}></Quantitypicker>
                <button onClick={add} className='btn btn-sm btn-warning add-btn'><i class="fa-solid fa-cart-plus"></i></button>
            </div>

            <div className='pricentotal'>
                <label>
                    Price: ${props.data.price}
                </label>
                <label className='total'>
                    Total: ${props.data.price * qpicked}
                </label>
            </div>
        </div>
    );
}

export default Product;