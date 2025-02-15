import { useContext } from 'react';
import './navbar.css';

import {Link} from 'react-router-dom';
import DataContext from '../stateManagement/dataContext';


function Navbar(){

    const user = useContext(DataContext).user

    return (
        <div>
            <nav>
                <div className="navbar-menu">
                    <div className="allbutcart">
                        <div className="left-logo">
                            <img src="/images/YGOCardBack.jpg" alt="YGO Card Back Logo Substitute" />
                        <h1>Not-So-Local TCG Store</h1>
                        </div>
                        <div className="menu-items">
                            <Link to="./home">Home</Link>
                            <Link to="./catalog">Catalog</Link>
                            <Link to="./about">About</Link>
                            <Link to="./admin">Admin</Link>
                            <Link to="./contact">Contact</Link>
                        </div>
                    </div>
                    <div className='cartDiv'>
                        <a href='#' className='user-info'>
                            <i class="fa-regular fa-circle-user"></i>: 
                            {user.name}
                        </a>
                        <Link className="cartLink" to="./cart">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Cart
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;