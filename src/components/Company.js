import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const Company = ({ name, stocks }) => {
  // const name = match.params.name;
  if (stocks[0] === null && stocks[1] === null) {
    return <Spinner />;
  }
  // filter out the target company information
  const data = stocks.filter(
    stock => stock['Meta Data']['2. Symbol'] === name
  )[0];
  // console.log(data);

  const high =
    data['Time Series (1min)'][Object.keys(data['Time Series (1min)'])[0]][
      '2. high'
    ];
  const low =
    data['Time Series (1min)'][Object.keys(data['Time Series (1min)'])[0]][
      '3. low'
    ];

  return (
    <div className='container' data-test='CompanyComponent'>
      <table className='centered'>
        <thead>
          <tr>
            <th>Company</th>
            <th>High</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td test-data='name'>{name}</td>
            <td>USD: {parseFloat(high).toFixed(2)}</td>
            <td>USD: {parseFloat(low).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Company.propTypes = {
  name: PropTypes.string.isRequired,
  stocks: PropTypes.array.isRequired
};

export default Company;
