import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Nav.css"
import FacebookLogo from "../assets/facebook.png"
import TwitterLogo from "../assets/twitter.png"
import InstagramLogo from "../assets/instagram.png"
import WalkiesLogo from "../assets/logo1.png"

function Nav() {
    return (
        <>
            <header>
                <nav className="nav-bar">
                  <img src={WalkiesLogo} alt="Walkies logo"></img>
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
                            <Link to="/dogs/mydog">My Dogs</Link>
                        </li>

                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <div className="footer-container">
              <div className="social-container">
              <a href ="https://www.facebook.com" target="_blank" rel="noreferrer noopener"><img src ={FacebookLogo} alt ="facebook logo"></img></a>
              <a href ="https://www.twitter.com" target="_blank" rel="noreferrer noopener"><img src ={TwitterLogo} alt ="twitter logo"></img></a>
              <a href ="https://www.instagram.com" target="_blank" rel="noreferrer noopener"><img src ={InstagramLogo} alt ="instagram logo"></img></a>
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
