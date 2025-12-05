import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container navbar__inner">
                <div className="navbar__logo">
                    NovaStack<span>Tech</span>
                </div>

                <nav className="navbar__links">
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
