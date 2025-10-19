import { NavLink } from "react-router-dom";

function NavBar() {
  const cx = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <nav className="navbar">
      <NavLink to="/" className={cx}>Home</NavLink>
      <NavLink to="/menu" className={cx}>Menu</NavLink>
      <NavLink to="/admin" className={cx}>Admin</NavLink>
      <NavLink to="/about" className={cx}>About</NavLink>
    </nav>
  );
}

export default NavBar;
