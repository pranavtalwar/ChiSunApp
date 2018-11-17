/* global window */
import React from 'react';
import { Col, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SidebarNavItems = () => (
  <div>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname === '/' && 'active'}`} to="/">
        <i className="icon-home" />
        {' '}
        <span>Home</span>
      </Link>
    </NavItem>
    <NavItem>
      <Link
        className={`nav-link ${window.location.pathname.startsWith('/group') && 'active'}`}
        to="/groups"
      >
        <i className="icon-notebook" />
        {' '}
        <span>Groups</span>
      </Link>
      <Link
        className={`nav-link ${window.location.pathname.startsWith('/event/create') && 'active'}`}
        to="/event/create"
      >
        <i className="icon-calendar" />
        {' '}
        <span>Create Event</span>
      </Link>
    </NavItem>
  </div>
);

const Sidebar = () => (
  <div>
    <Col sm="3" md="2" className="d-none d-sm-block sidebar">
      <Nav vertical>{SidebarNavItems()}</Nav>
    </Col>
  </div>
);

export { Sidebar, SidebarNavItems };