import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import { Link } from 'gatsby'

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="content">
                { children }
            </div>
            <footer>
                <Link to="#navbar">Back to Top</Link>
                <p>Copyright &copy; No. 9 Boards 2021</p>
            </footer>
        </div>
    )
}
