import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Company from './components/Company';
class App extends Component {
  state = {
    name: '',
    price: '',
    low: '',
    high: ''
  };

  componentDidMount() {
    this.fetchStock('MSFT');
    setInterval(() => {
      this.fetchStock('MSFT');
    }, 60000);
  }

  companies = ['MSFT', 'IBM', ''];

  // map through companies and run the api call

  // componentDidMount() {
  //   this.companies.map(company => {
  //     this.fetchStock(company);
  //   })
  //   setInterval(() => {
  //     this.fetchStock('MSFT');
  //   }, 600000);
  // }

  async fetchStock(company) {
    const API_KEY = '80Y08N3U8HM50P20';
    const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${company}&interval=1min&outputsize=compact&apikey=${API_KEY}`;

    // fetch the API
    const response = await fetch(API_Call);
    const data = await response.json();
    for (var key in data['Time Series (1min)']) {
      const array = new Array();
      array.push(key);
      const name = data['Meta Data']['2. Symbol'];
      const price = data['Time Series (1min)'][array[0]]['1. open'];
      const high = data['Time Series (1min)'][array[0]]['2. high'];
      const low = data['Time Series (1min)'][array[0]]['3. low'];
      this.setState({ name });
      this.setState({ price });
      this.setState({ high });
      this.setState({ low });
    }
  }
  render() {
    const { name, price, high, low } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <h1 className='header'>Stock Market</h1>
        </div>
        <Switch>
          <Route
            path='/'
            exact
            render={props => (
              <Home name={name} price={price} high={high} low={low} />
            )}
          />
          <Route path='/about' exact component={About} />
          <Route
            path='/:cpnid'
            exact
            render={props => (
              <Company name={name} price={price} high={high} low={low} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
