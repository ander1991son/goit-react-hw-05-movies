import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <Outlet />
    </div>
  );
};

export default Navbar;
