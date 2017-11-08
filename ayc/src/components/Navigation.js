import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <Nav tabs>
        <h1>Austin Yoga Community</h1>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Home" exact>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Studios">Studios</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Schedules">Schedules</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Teachers" >Teachers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Events">Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Blog">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Shop" >Shop</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Register">Register</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;