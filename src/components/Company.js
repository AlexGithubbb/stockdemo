import React from 'react';
import Spinner from './Spinner';

const Company = ({ match, stocks }) => {
  if (stocks[0] === null && stocks[1] === null) {
    return <Spinner />;
  }
  const name = match.params.name;

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
    <div className='container'>
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
            <td>{name}</td>
            <td>USD: {parseFloat(high).toFixed(2)}</td>
            <td>USD: {parseFloat(low).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Company;
