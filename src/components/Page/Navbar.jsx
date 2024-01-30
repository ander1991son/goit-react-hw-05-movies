import React from 'react';
import styled from 'styled-components';
import css from './Navbar.module.css';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: red;
    }
  `;

  return (
    <div>
      <div className={css.NavLink}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

// import React from 'react';
// import css from './Navbar.module.css';
// import { NavLink, Outlet } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div>
//       <div className={css.NavLink}>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/movies">Movies</NavLink>
//       </div>
//       <Outlet />
//     </div>
//   );
// };

// export default Navbar;
