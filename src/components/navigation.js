import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

function NavBar() {
    return (
        <div className="nav">
            <NavLink 
                to="/">
                <Logo className="logo" alt="Logo" />
            </NavLink>
            <NavLink 
                to="/recipes"
                className="links nav-link"
            >Recipes</NavLink>
        </div>
    )
}

export default NavBar;