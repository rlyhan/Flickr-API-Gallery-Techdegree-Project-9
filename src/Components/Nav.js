import React from 'react';
import { Route,
         NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/home/dogs" onClick={() => {props.search("dogs")}}>Dogs</NavLink></li>
        <li><NavLink to="/home/scenery" onClick={() => {props.search("scenery")}}>Scenery</NavLink></li>
        <li><NavLink to="/home/cars" onClick={() => {props.search("cars")}}>Cars</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
