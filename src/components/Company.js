import React from 'react';

const Company = ({ name, high, low }) => {
  return (
    <div className='dashboard'>
      <table border='1'>
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
            <td>{high}</td>
            <td>{low}</td>
          </tr>
          <tr>
            <td>IBM</td>
            <td>$130</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Company;
