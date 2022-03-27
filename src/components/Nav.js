import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Nav.css"
import FacebookLogo from "../facebook.png"
import TwitterLogo from "../twitter.png"
import InstagramLogo from "../instagram.png"

function Nav() {
    return (
        <>
            <header>
                <nav className="nav-bar">
                    <ul>
                        <li>
                            <Link to="/"> Home</Link>
                        </li>
                        <li>
                            <Link to="/dogs"> View Dogs</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/messages">Messages</Link>
                        </li>
                        <li>
                            <Link to="/doggo">My Dogs</Link>
                        </li>

                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <div className="footer-container">
              <div className="social-container">
              <img src ={FacebookLogo} alt ="facebook logo"></img>
              <img src={TwitterLogo} alt="twitter logo"></img>
              <img src ={InstagramLogo} alt="instagram logo"></img>
              </div>
            <footer>
              <p className="footer">&copy;Walkies 2022</p>
              <div className="contact-container">
              <p className="footer">Contact us:<br>
              </br><br></br>Phone: 0207 637 289<br>
              </br>Email: info@walkies.com<br>
              </br>Address: 129<br></br>
              Holloway Road<br></br>
              NW10 7H2</p>
              </div>

            </footer>
            </div>
        </>
    );
}
export default Nav;
