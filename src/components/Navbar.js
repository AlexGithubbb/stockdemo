import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo'>
          <i className='fas fa-hand-holding-usd fa-1x'></i>
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link
              to='/'
              onClick={() => {
                props.fetchCompany();
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
