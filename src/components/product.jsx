import './product.css';
import Quantitypicker from './quantitypicker';

function Product(props){

    function add(){
        console.log("Added to Cart!");
    }



    return (
        <div className="product">
            <h4>
                {props.data.title}
            </h4>

            <img src={props.data.image} alt="" />

            <div className="qtyadd">
                <Quantitypicker></Quantitypicker>
                <button onClick={add} className='btn btn-sm btn-warning add-btn'>Add</button>
            </div>

            <div className='pricentotal'>
                <label>
                    Price: ${props.data.price}
                </label>
                <label>
                    Total: $
                </label>
            </div>
        </div>
    );
}

export default Product;