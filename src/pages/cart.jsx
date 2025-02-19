import { useContext } from "react";
import "./cart.css";
import DataContext from "../stateManagement/dataContext";

function Cart(){

    const cart = useContext(DataContext).cart;

    //calculates the total number of products in the cart
    function calcNumProds() {
        let sum = 0;
        for(let i=0; i<cart.length; i++){
            let prod = cart[i];
            sum += prod.quantity;
        }

        return sum;

    }
    
    return(
        <div className="cart page">
            <h1>Here's What You've Added to Your Cart!</h1>
            <h3>{calcNumProds()} card(s)!</h3>
        </div>
    )

}


export default Cart;