import React, { Fragment, Component } from 'react';
import spinner from './spinner.gif';

const Waiting = () => {
  // state = {
  //   count: 60
  // };

  // componentDidMount() {
  //   this.myInterval = setInterval(() => {
  //     this.setState(prevState => ({ count: prevState.count - 1 }));
  //   }, 1000);
  // }

  // componentWillMount() {
  //   if (this.state.count < 55) {
  //     clearInterval(this.myInterval);
  //   }
  // }

  return (
    <Fragment>
      <img
        src={spinner}
        alt='loading logo'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
      <h5 style={{ color: 'red', textAlign: 'center' }}>
        Ooops <i class='far fa-surprise fa-2x'></i> your operation is too
        frequent, please wait for 1 minute then refresh the page or click 'Home'
        button, thank you !
      </h5>
    </Fragment>
  );
};

export default Waiting;
