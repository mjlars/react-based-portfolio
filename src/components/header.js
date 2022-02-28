import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="name">
                <h1>Matthew Larson</h1>
            </div>
            <div className="links">
                <nav>
                <Link to="/about">About Me</Link>
                <Link to="/projects">My Work</Link>
                <Link to="/contact">Contact Me</Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;