import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <Nav tabs>
        <h1>austin yoga community</h1>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Home" exact>home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Studios">studios</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Schedules">schedules</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Teachers" >teachers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Events">events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Blog">blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Shop" >shop</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="nav-link--active" to="./Register">register</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;