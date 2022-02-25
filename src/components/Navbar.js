import { faGear, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Home <FontAwesomeIcon icon={faHouse} />
        </Link>

        <div className='navbar-collapse justify-content-sm-between '>
          <div className='navbar-nav'>
            <NavLink className='nav-item nav-link' to='/profile'>
              Perfil <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink className='nav-item nav-link' to='/settings'>
              Ajustes <FontAwesomeIcon icon={faGear} />
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
