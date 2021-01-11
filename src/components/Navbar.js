import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/">
            Home
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/hot_cheetos">
            Hot Cheetos
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/monster">
            Monster Energy Drink
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/protein_bites">
            Protein Donut Bites
        </NavLink>
      </div>
    )
  }
}

export default Navbar;