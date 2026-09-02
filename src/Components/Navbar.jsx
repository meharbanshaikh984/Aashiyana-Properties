import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div>
                    <h4>Aashiyana Properties</h4>
                </div>
                <div className="Nav_links">

                    <Link to="/">Home</Link>
                    <Link to="/aboutus">AboutUs</Link>
                    <Link to="/contactus">ContactUs</Link>
                    <Link to="/favorite">Favorite</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/logout">Logout</Link>
                    <Link to="/register">Register</Link>


                </div>
            </div>
        </div>
    );
}

export default Navbar;
