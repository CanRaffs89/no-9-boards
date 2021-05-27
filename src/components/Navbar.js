import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link to="/"><StaticImage src="../images/no-9-logo.png" alt="No 9 Boards logo" /></Link>
            </div>
            <input type="checkbox" id="nav" className="hidden"/>
            <label htmlFor="nav" className="nav-btn">
                <i></i>
                <i></i>
                <i></i>
            </label>
            <div className="nav-container">
                <ul>
                    <li><Link to="/buy" className="navlink">Buy</Link></li>
                    <li><Link to="/about" className="navlink">About</Link></li>
                    <li><Link to="/contact" className="navlink">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
