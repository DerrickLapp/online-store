import { useContext } from "react";
import "./cart.css";
import DataContext from "../stateManagement/dataContext";

function Cart(){

    let cart = useContext(DataContext).cart;



    //calculates the total number of products in the cart
    function calcNumProds() {
        let sum = 0;
        for(let i=0; i<cart.length; i++){
            let prod = cart[i];
            sum += prod.quantity;
        }

        return sum;

    }

    function getTotal(){
        let total = 0;

        for(let i=0; i<cart.length; i++){
            const prod = cart[i];
            total += (prod.quantity * prod.price);
        }

        return total.toFixed(2);
    }


    
    return(
        <div className="cart page">
            <h1>Here's What You've Added to Your Cart!</h1>
            <h3>{calcNumProds()} card(s)!</h3>

            <div className="cartParent">
                <div className="cartProds">
                    {cart.map(prod => <div className="prod-in-cart">
                        <img src={prod.image} alt="" />
                        <h5>{prod.title}</h5>
                        <label>Price: ${prod.price.toFixed(2)}</label>
                        <label>Qty: {prod.quantity}</label>
                        <label>Total: ${(prod.price * prod.quantity).toFixed(2)}</label>
                    </div>)}
                </div>

                <div className="side-menu">
                    <h3>Order Total</h3>
                    <h5>$ {getTotal()}</h5>

                    <button className="btn btn-warning">Pay Now</button>
                </div>
            </div>
        </div>
    )

}


export default Cart;