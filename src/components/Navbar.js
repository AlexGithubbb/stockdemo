import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className='navbar'>
      <li>
        <Link className='nav_item' to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link className='nav_item' to='/about'>
          About
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
