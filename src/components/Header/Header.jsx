import React from "react"
import { NavLink } from "react-router-dom"
export const Header = () => {
    return <div className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
          </li>
        </ul>
  </div>
  
}