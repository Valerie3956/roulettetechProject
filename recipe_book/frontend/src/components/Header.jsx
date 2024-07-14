import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className = "header">
            <div className = "title">
            <h1>Recipe Book</h1>
            </div>
            <ul className = "nav">
                <Link to="/" className = "link">
                    <li className = "navItems">Search</li>
                </Link>
                <Link to="cook" className = "link">
                    <li className = "navItems">View Current Recipe</li>
                </Link>
            </ul>
        </div>
    )
}