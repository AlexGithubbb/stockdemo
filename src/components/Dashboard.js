import React from 'react';

import DashItem from './DashItem';

const Dashboard = props => {
  return (
    <div className='dashboard'>
      <table border='1'>
        <thead>
          <tr>
            <th>Company</th>
            <th>Stock Price</th>
          </tr>
        </thead>

        <tbody>
          <DashItem {...props} />
          <tr>
            <td>IBM</td>
            <td>$120</td>
            <td>
              <button className='info_btn'>Info</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
