import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <h1>Trading Today</h1>
      <Outlet />
    </div>
  );
};

export default Navbar;
