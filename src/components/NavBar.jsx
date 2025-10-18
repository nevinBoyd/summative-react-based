import { NavLink } from "react-router-dom";

// simple navigation bar component
function NavBar() {
  const linkStyle = {
    margin: "0 1rem",
    textDecoration: "none",
    color: "black",
  };

  return (
    <nav style={{ marginBottom: "2rem" }}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/menu" style={linkStyle}>
        Menu
      </NavLink>
      <NavLink to="/admin" style={linkStyle}>
        Admin
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;
