
import { Link } from "react-router"
const Nav = () => {
    return
    (<>
    <header>
        <nav>
          <Link to='/home'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/shop'>Shop</Link>
        </nav>
      </header>
    </>)
}

export default Nav