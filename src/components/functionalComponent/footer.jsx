import "../../css/navBar.css"
import { Link } from "react-router-dom"
const Footer=()=>{
    return(
        <div>
             <ul type="none">
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/CopyRight">CopyRight</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
             </ul>
        </div>
    )
}
export default Footer;