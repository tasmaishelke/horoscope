import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar(){
    return(
        <nav className="container">
            <h1 className="class-website-name">Horoscope</h1>
                <ul>
                    <li> 
                        <Link to="/"> Home </Link> 
                    </li>
                    <li> 
                        <Link to="/about"> About </Link> 
                    </li>
                    <li> 
                        <Link to="/contact"> Contact </Link> 
                    </li>
                    <li> 
                       <button className="class-navbar-button"> <Link to="/login"> Login </Link>  </button>
                    </li>
                </ul>
        </nav>        
    );
}

export default Navbar