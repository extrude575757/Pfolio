import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
const Header = (props) => {
    
    return (
    <div>
    <header><h1>A Website</h1>
    <NavLink to="/"  activeClassName="is-active" className="visitedLinks" exact={true}>Home</NavLink> 
    <NavLink to="/portfolio" activeClassName="is-active" className="visitedLinks4" exact={true}>Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="is-active" className="visitedLinks3">Contact</NavLink>
    
    </header>
    </div>
    
);
};
export default Header;