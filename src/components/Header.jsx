import {Link} from "react-router-dom";

export default function Header(){
    return (
        <nav className="navbar">
            <h1>Lab 8 Blog</h1>
            <div className="nav-links">
                <Link to="/"><h2>Home</h2></Link>
                <h2>About</h2>
                <Link to="/contact"><h2>Contact</h2></Link>
            </div>
            
        </nav>
    );
}