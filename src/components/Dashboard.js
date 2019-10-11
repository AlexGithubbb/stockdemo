import React from 'react';
import DashItem from './DashItem';
import Spinner from './Spinner';

const Dashboard = ({ stocks, isLoading }) => {
  if (
    isLoading ||
    typeof stocks[0] === 'undefined' ||
    typeof stocks[1] === 'undefined'
  ) {
    return <Spinner />;
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

export default Dashboard;
