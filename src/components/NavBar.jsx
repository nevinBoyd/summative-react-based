import { NavLink } from "react-router-dom";

// simple navigation bar component
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/menu" className="nav-link">
        Menu
      </NavLink>
      <NavLink to="/admin" className="nav-link">
        Admin
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;
