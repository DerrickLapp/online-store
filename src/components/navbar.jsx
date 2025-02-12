import './navbar.css';

import {Link} from 'react-router-dom';


function Navbar(){
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
                        </div>
                    </div>
                    <div className='cartDiv'>
                        <Link to="./cart">Cart</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;