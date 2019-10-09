import React from 'react';
import Dashboard from '../components/Dashboard';

const Home = ({ name, price, low, high }) => {
  return (
    <div>
      <Dashboard name={name} price={price} low={low} high={high} />
    </div>
  );
};

export default Home;
