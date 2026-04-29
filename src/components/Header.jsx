import {Link} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header(){

    const { user, logout } = useAuth();
    return (
        <nav className="navbar">
            <h1>Project 2 Blog</h1>
            <div className="nav-links">
                <Link to="/"><h2>Home</h2></Link>
                <h2>About</h2>
                <Link to="/contact"><h2>Contact</h2></Link>
            
                {user ? (
          <>
            <span className="username">Hey, {user.username}</span>
            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            Login
          </Link>
        )}

            </div>
            
        </nav>
    );
}