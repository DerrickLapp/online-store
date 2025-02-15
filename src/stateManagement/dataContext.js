import { createContext } from "react";

/**
 * it's a promise of the data structure.
 * it's an interface.
 * it's a blueprint.
 */


const DataContext = createContext({
    cart: [],
    user: {},

    addProductToCart: () => {},
    removeProductFromCart: () => {},
    clearCart: () => {},

});


export default DataContext;