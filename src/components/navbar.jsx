import './navbar.css';


function Navbar(){
    return (
        <div>
            <nav>
                <div className="navbar-menu">
                    <div className="left-logo">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e4175c3f-297e-48be-8d30-8480016829c7/d6dlhpw-17b47f0f-4790-4148-b03a-5bf3d44bb1b2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U0MTc1YzNmLTI5N2UtNDhiZS04ZDMwLTg0ODAwMTY4MjljN1wvZDZkbGhwdy0xN2I0N2YwZi00NzkwLTQxNDgtYjAzYS01YmYzZDQ0YmIxYjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hNuNBojgeFteqKEywzxEXtYY8rrlB6gmfwISccrwZ9g" alt="YGO Card Back Logo Substitute" />
                    </div>
                    <h1>Not-So-Local TCG Store</h1>
                    <div className="menu-items">
                        <a href="">Log In</a>
                        <a href="">Search</a>
                        <a href="">Subscribe</a>
                        <a href="">Menu</a>
                        <a href="">Catalog</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;