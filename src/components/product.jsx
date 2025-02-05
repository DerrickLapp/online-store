import './product.css';
import Quantitypicker from './quantitypicker';

function Product(){
    return (
        <div className="product">
        <h4>
            For Trade or Buyout:
        </h4>
        <img src="https://picsum.photos/200/235" alt="" />


        <Quantitypicker></Quantitypicker>
        </div>
    );
}

export default Product;