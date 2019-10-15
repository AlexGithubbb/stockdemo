import React, { Fragment, Component } from 'react';
import spinner from './spinner.gif';

const Waiting = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='loading logo'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
      <h5 style={{ color: 'red', textAlign: 'center' }}>
        Ooops <i className='far fa-surprise fa-2x'></i> your operation is too
        frequent, please wait for 1 minute then refresh the page or click 'Home'
        button, thank you !
      </h5>
    </Fragment>
  );
};

export default Waiting;
