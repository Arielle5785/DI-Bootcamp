import { Link } from "react-router"
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <div>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/home'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/shop'>Shop</Link>
      </nav>
    </header>
    </div>
  )
};

export default Nav