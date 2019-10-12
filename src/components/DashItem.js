import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DashItem = ({ name, price }) => {
  return (
    <Fragment>
      <tr data-test='DashItemComponent'>
        <td data-test='name'>{name}</td>
        <td data-test='price'>USD: {parseFloat(price).toFixed(2)}</td>
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

DashItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default DashItem;
