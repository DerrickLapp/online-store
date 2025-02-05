import { useState } from 'react';
import './quantitypicker.css'

function Quantitypicker(){
    const [quantity, setQuantity] = useState(1);

    function increase(){
        const value = quantity + 1;
        setQuantity(value);
    }

    function decrease(){
        const value = quantity - 1;
        if(quantity > 1){
            setQuantity(value);
        }
    }

    return(
        <div className="quantitypicker">
            <button className='btn btn-sm btn-warning' disabled={quantity===1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className='btn btn-sm btn-warning' onClick={increase}>+</button>
        </div>
    );
}

export default Quantitypicker