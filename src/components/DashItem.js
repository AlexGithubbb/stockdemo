import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const DashItem = ({ name, price }) => {
  return (
    <Fragment>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <button>
            <Link to={`/${name}`} className='info_btn'>
              Info
            </Link>
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default DashItem;
