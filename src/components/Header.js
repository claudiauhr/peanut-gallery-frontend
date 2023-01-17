import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/games">Game</Link></div>
            <div><Link to="/login">Log In</Link></div>
            <div><Link to="/register">Register</Link></div>
        </div>
    )
}

export default Header;
