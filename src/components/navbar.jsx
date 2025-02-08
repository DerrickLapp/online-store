import './navbar.css';


function Navbar(){
    return (
        <div>
            <nav>
                <div className="navbar-menu">
                    <div className="left-logo">
                        <img src="/images/YGOCardBack.jpg" alt="YGO Card Back Logo Substitute" />
                    <h1>Not-So-Local TCG Store</h1>
                    </div>
                    <div className="menu-items">
                        <a href="">Log In</a>
                        <a href="">Search</a>
                        <a href="">Subscribe</a>
                        <a href="">Menu</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;