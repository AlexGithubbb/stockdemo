import React from 'react';
import DashItem from './DashItem';
import Spinner from './Spinner';
import Waiting from './Waiting';
import PropTypes from 'prop-types';

const Dashboard = ({ stocks, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  } else if (stocks[0]['Note'] || stocks[1]['Note']) {
    //Cannot read property '0' of undefined
    return <Waiting />;
  }

  const items = stocks.map(stock => {
    return (
      <DashItem
        key={stock['Meta Data']['2. Symbol']}
        name={stock['Meta Data']['2. Symbol']}
        // get the first element
        price={
          stock['Time Series (1min)'][
            Object.keys(stock['Time Series (1min)'])[0]
          ]['1. open']
        }
      />
    );
  });

  return (
    <div className='container'>
      <table className='centered'>
        <thead>
          <tr>
            <th>Company</th>
            <th>Stock Price</th>
            <th>Detail Info</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};

Dashboard.propTypes = {
  stocks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Dashboard;
