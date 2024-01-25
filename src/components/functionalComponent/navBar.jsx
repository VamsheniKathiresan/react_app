import "../../css/navBar.css"
import { Link } from "react-router-dom"
const NavBar=() =>{
          return(
            <ul type="none">
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Education">Education</Link></li>
                <li><Link to="/Experience">Experience</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
          )
}
export default NavBar