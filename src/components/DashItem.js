import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const DashItem = ({ name, price }) => {
  return (
    <Fragment>
      <tr>
        <td>{name}</td>
        <td>USD: {parseFloat(price).toFixed(2)}</td>
        <td>
          <button>
            <Link
              to={`/${name}`}
              className='waves-effect waves-light light-blue darken-1 btn'
            >
              Info
            </Link>
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default DashItem;
