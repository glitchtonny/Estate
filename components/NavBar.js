import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from "../Assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event) =>{
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event)=>{
    event.preventDefault();
    //console.log(searchQuerry)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <NavLink to="/Home">JATE Estate</NavLink>
            <img src={logo} alt="JATE Estate" className="navbar-logo"/>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/Home" activeClassName="active">Home</NavLink>
          <NavLink to="/Blog" activeClassName="active">Blog</NavLink>
        </div>
        <div className={`navbar-user ${isOpen ? 'open' : ''}`}>
          <NavLink to="/login" activeClassName="active">Login</NavLink>
          <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
        </div>
        <div className="navbar-search">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
