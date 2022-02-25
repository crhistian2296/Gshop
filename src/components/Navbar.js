import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Gshop
        </Link>

        <div className='navbar-collapse justify-content-sm-between '>
          <div className='navbar-nav'>
            <NavLink className='nav-item nav-link' to='/profile'>
              Perfil
            </NavLink>
            <NavLink className='nav-item nav-link' to='/settings'>
              Ajustes
            </NavLink>
          </div>
          <div className='navbar-nav'>
            {/* <span className='nav-item nav-link text-info'>{user.name}</span> */}
            <Link
              className='nav-item nav-link btn logoutLink'
              to='/login' /* onClick={handleLogout} */
            >
              Cerrar sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
