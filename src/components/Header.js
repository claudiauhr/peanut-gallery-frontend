import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="nav">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/game">Join Game</Link></div>
            <div><Link to="/login">Log In</Link></div>
            <div><Link to="/register">Register</Link></div>
            <div><Link to="/about">About</Link></div>
        </div>
    );
};

export default Header;
